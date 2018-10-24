<template>
    <div id="app">
        <Header/>
        <Graphs/>
    </div>
</template>

<script>
    import Graphs from './components/Graphs'
    import Header from './components/Header'
    export default {
        components: {
            Graphs,
            Header
        }

    }
</script>

