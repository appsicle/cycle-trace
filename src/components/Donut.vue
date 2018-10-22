<template>
    <v-app style="background: white">
        <DC/>
        <DonutGraph/>
    </v-app>
</template>

<script>
    import DC from './DonutController'
    import DonutGraph from './DonutGraph'

    export default {
        components: {
            DC,
            DonutGraph
        }
    }
</script>