import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        passStats: {},
        starting_stations: {},
        ending_stations: {},
        start_station_array: [],
        end_station_array: [],
        start_station_labels: [],
        end_station_labels: [],
        seasons: {},
        routes: {}
    },
    mutations: {
        setStats(state, stats) {
            state.passStats = stats;
        },
        setStarting(state, data) {
            state.starting_stations = data;
        },
        setEnding(state, data) {
            state.ending_stations = data;
        },
        setStartArray(state, array) {
            state.start_station_array = array;
        },
        setEndArray(state, array) {
            state.end_station_array = array;
        },
        setStartLabels(state, array) {
            state.start_station_labels = array;
        },
        setEndLabels(state, array) {
            state.end_station_labels = array;
        },
        setSeasons(state, data) {
            state.seasons = data;
        },
        setRoutes(state, data) {
            state.routes = data;
        }
    },
    getters: {
        getPassTypes: (state) => {
            return Object.keys(state.passStats);
        },
        getAttributes: (state) => (passType, attribute) => {
            if (passType in state.passStats) {
                return state.passStats[passType][attribute];
            }
        },
        getStarting: (state) => (passType) => {
            return state.starting_stations[passType];
        },
        getEnding: (state) => (passType) => {
            return state.ending_stations[passType];
        },
        getStartArray: (state) => {
            return state.start_station_array;
        },
        getEndArray: (state) => {
            return state.end_station_array;
        },
        getStartLabels: (state) => {
            return state.start_station_labels;
        },
        getEndLabels: (state) => {
            return state.end_station_labels;
        },
        getSeasons: (state) => {
            return state.seasons;
        },
        getRoutes: (state) => {
            return state.routes;
        }
    }
});
