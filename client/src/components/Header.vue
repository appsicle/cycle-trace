<template>
    <div>
        <v-toolbar dense app dark>

            <v-toolbar-title><i class="fas fa-bicycle"></i><v-btn flat to="/">Cycle Trace</v-btn></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/distance">Distance Data</v-btn>
                <v-btn flat to="/frequency">Frequency Data</v-btn>
                <v-btn flat to="/stations">Station Data</v-btn>
            </v-toolbar-items>
            <v-menu class="hidden-md-and-up">
                <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
                <v-list dense>
                    <v-list-tile
                            router
                            to="/distance">
                        <v-list-tile-content>
                            <v-list-tile-title class="body-1">Distance</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile
                            router
                            to="/frequency">
                        <v-list-tile-content>
                            <v-list-tile-title class="body-1">Frequency</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile
                            router
                            to="/stations">
                        <v-list-tile-content>
                            <v-list-tile-title class="body-1">Stations</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>

    </div>

</template>

<style>

</style>
