<template>
    <div>
        <DC/>
        <DonutGraphS style="padding-bottom: 60px;"></DonutGraphS>

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
