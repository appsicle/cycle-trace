const fs = require("fs");
const d3 = require("d3");
var geolib = require('geolib');
const _ = require("lodash");


fs.readFile('bike.csv', 'utf8', function (error, data) {
    if (error) {
        throw error;
    }

    data = d3.csvParse(data);
    var processed_data = create_dict(data);
    var default_data = JSON.stringify(processed_data[0]);
    var starting_data = JSON.stringify(processed_data[1]);
    var ending_data = JSON.stringify(processed_data[2]);
    var routes = JSON.stringify(sortRoutes(data));
    var seasons = JSON.stringify(sortSeasonal(data));
    writeTo("data.json", default_data);
    writeTo("starting.json", starting_data);
    writeTo("ending.json", ending_data);
    writeTo("seasons.json", seasons);
    writeTo("routes.json", routes);
});

function writeTo(dest, file){
    fs.writeFile(dest, file, 'utf8', (err) => {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("file has been saved in " + dest);
    })
}


/**
 *
 * @param data An array of objects which each contain the values of the parsed dataset
 * @returns {*} Object containing the total statistics for each type of passholder in the dataset
 */


function create_dict(data) {
    var passholderStats = {
        "Monthly Pass": {
            frequency: 0,
            total_distance: 0,
            average_distance: 0,
            start_station: {},
            end_station: {}
        },
        "Flex Pass": {
            frequency: 0,
            total_distance: 0,
            average_distance: 0,
            start_station: {},
            end_station: {}
        },
        "Walk-up": {
            frequency: 0,
            total_distance: 0,
            average_distance: 0,
            start_station: {},
            end_station: {}
        },
        "Staff Annual": {
            frequency: 0,
            total_distance: 0,
            average_distance: 0,
            start_station: {},
            end_station: {}
        }
    };

    for (var i = 0; i < data.length; ++i) {
        var coordinates = {
            lat1: data[i]['Starting Station Latitude'],
            long1: data[i]['Starting Station Longitude'],
            lat2: data[i]['Ending Station Latitude'],
            long2: data[i]['Ending Station Longitude']
        };

        if (!coordinates.lat1 || !coordinates.long1 || !coordinates.lat2 || !coordinates.long2) {
            continue;
        }

        var dist = calculate_dist(coordinates.lat1, coordinates.long1, coordinates.lat2, coordinates.long2);
        passholderStats[data[i]['Passholder Type']].frequency += 1;
        passholderStats[data[i]['Passholder Type']].total_distance += dist;

        /**
         * Calculates the frequencies of starting and ending station ids, for each type of passholder
         */
        var start_stations = parseInt(data[i]['Starting Station ID']);
        var end_stations = parseInt(data[i]['Ending Station ID']);

        if (!(end_stations in passholderStats[data[i]['Passholder Type']].end_station)) {
            passholderStats[data[i]['Passholder Type']].end_station[end_stations] = 1;
        } else {
            passholderStats[data[i]['Passholder Type']].end_station[end_stations] += 1;
        }

        if (!(start_stations in passholderStats[data[i]['Passholder Type']].start_station)) {
            passholderStats[data[i]['Passholder Type']].start_station[start_stations] = 1;
        } else {
            passholderStats[data[i]['Passholder Type']].start_station[start_stations] += 1;
        }

    }

    calculate_average_dist(passholderStats);
    var packaged_data = sortStations(passholderStats);
    return packaged_data;
}

/**
 *
 * @param data An array of objects which each contain the values of the parsed dataset
 * @return seasons an object containing the frequency and average_time duration for each date in the dataset
 */
function sortSeasonal(data){
    //how many of each pass per season july 21 - sept 20 summer, sept 21 - dec 20 fall, dec 21 - march 20 winter, march
    const seasons = {};
    //frequency per date
    //{ date: { frequency: 1234, average_time: 1234 }}
    for(var i = 0; i < data.length; ++i){
        var currentDate = data[i]['Start Time'].slice(5, 10);
        var time = parseInt(data[i]['Duration'])/60;

        if(!(currentDate in seasons)){
            seasons[currentDate] = {frequency: 1, total_time: 1, average_time: 1};
        }else{
            seasons[currentDate].frequency += 1; //pushing all month and days
            seasons[currentDate].total_time += time;
        }
    }

    for(var key in seasons){
        seasons[key]['average_time'] = Math.round(seasons[key]['total_time'] / seasons[key]['frequency'] * 100)/100;
    }

    return seasons;
}

/**
 *
 * @param data An array of objects which each contain the values of the parsed dataset
 * @return final An object storing the frequency of each route pattern which is a string combining the start and end station
 */

function sortRoutes(data){
    const routes = {};
    var sorted = [];
    var final = {};

    for(var i = 0; i < data.length; ++i){
        var routeCode = data[i]['Starting Station ID'] +'->'+ data[i]['Ending Station ID'];
        if(data[i]['Starting Station ID'] === data[i]['Ending Station ID']){
            continue;
        }
        if(!(routeCode in routes)){
            routes[routeCode] = 1;
        }else{
            routes[routeCode] += 1;
        }
    }
    for(var key in routes){
        sorted.push([key, routes[key]]);
    }

    sorted.sort(function(a, b) {
        return b[1] - a[1];
    });

    for(var i = 0; i < 60; ++i){ //only retrieve 60 entries of sorted data
        final[i] = sorted[i];
    }
    return final;
}

/**
 *
 * @param passholderStats An object containing stats for each type of pass
 * @returns {*[]} array storing the original stats along with starting and ending station data.
 */

function sortStations(passholderStats) {
    var starting = {};
    for (var passType in passholderStats) {
        starting[passType] = [];
        sorted = [];
        for(var station_id in passholderStats[passType].start_station){
            sorted.push([station_id, passholderStats[passType].start_station[station_id]]);
        }
        sorted.sort((a,b) => {
            return b[1] - a[1];
        });

        starting[passType] = sorted;
    }

    var ending = {};
    for (var passType in passholderStats) {
        ending[passType] = [];
        sorted = [];
        for(var station_id in passholderStats[passType].end_station){
            sorted.push([station_id, passholderStats[passType].end_station[station_id]]);
        }
        sorted.sort((a,b) => {
            return b[1] - a[1];
        });

        ending[passType] = sorted;
    }

    return [passholderStats, starting, ending];
}

/** HELPER FUNCTIONS **/

/**
 *
 * @param lat1
 * @param long1
 * @param lat2
 * @param long2
 * @returns {float} distance between two (lat, long) coordinates
 */
function calculate_dist(lat1, long1, lat2, long2) {
    coord1 = {'latitude': lat1, 'longitude': long1};
    coord2 = {'latitude': lat2, 'longitude': long2};
    return geolib.getDistance(coord1, coord2);
}

/**
 * function calculates and mutates the average-distance value in the object
 * @param passholderStats Objects containing passholder statistics
 */
function calculate_average_dist(passholderStats) {
    for (var key in passholderStats) {
        passholderStats[key].average_distance = passholderStats[key].total_distance / passholderStats[key].frequency;
    }
}
