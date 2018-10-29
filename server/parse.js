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

    fs.writeFile("data.json", default_data, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file0 has been saved.");
    });

    fs.writeFile("starting.json", starting_data, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file1 has been saved.");
    });

    fs.writeFile("ending.json", ending_data, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file2 has been saved.");
    });
});


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
    console.log(packaged_data);
    return packaged_data;
}

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
