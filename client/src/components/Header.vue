<template>
    <div>
        <v-toolbar dense app dark>
            <v-toolbar-title><i class="fas fa-bicycle"></i><router-link style="text-decoration: none; color: white; padding-left: 7px;" to="/">Cycle Trace</router-link></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/distance" class="body-1">Distance Data</v-btn>
                <v-btn flat to="/frequency" class="body-1">Frequency Data</v-btn>
                <v-btn flat to="/stations" class="body-1">Station Data</v-btn>
                <v-btn flat to="/seasons" class="body-1">Seasonal Data</v-btn>
                <v-btn flat to="/routes" class="body-1">Route Data</v-btn>

            </v-toolbar-items>

            <v-menu class="hidden-md-and-up">
                <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
                <v-list dense>
                    <v-subheader> GRAPHS</v-subheader>
                    <v-divider></v-divider>
                    <v-list-tile
                            router
                            to="/distance">
                        <v-list-tile-content>
                            <v-list-tile-title class="body-1">Distance</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>

                    <v-list-tile
                            router
                            to="/frequency">
                        <v-list-tile-content>
                            <v-list-tile-title class="body-1">Frequency</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile
                            router
                            to="/stations">
                        <v-list-tile-content>
                            <v-list-tile-title class="body-1">Stations</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile
                            router
                            to="/seasons">
                        <v-list-tile-content>
                            <v-list-tile-title class="body-1">Seasonal</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile
                            router
                            to="/routes">
                        <v-list-tile-content>
                            <v-list-tile-title class="body-1">Routes</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>

            </v-menu>

        </v-toolbar>

    </div>

</template>
