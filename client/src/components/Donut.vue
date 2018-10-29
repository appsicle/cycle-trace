<template>
    <div>
        <DC/>
        <DonutGraphS/>
        <DonutGraphE/>
    </div>
</template>

<script>
    import DC from './DonutController'
    import DonutGraphS from './DonutGraphStarting'
    import DonutGraphE from './DonutGraphEnding'

    export default {
        components: {
            DC,
            DonutGraphS,
            DonutGraphE
        }
    }
</script>
