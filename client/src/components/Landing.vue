<template>
    <div style="">
        <transition
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
                mode="out-in">
            <body>
            Many commuters in Los Angeles, California have taken it upon themselves
            to use bike sharing as a method of transportation. Cycle-Trace is a project
            that visualizes over 130,000 entries of bike share data in an attempt to
            categorize and display relevant correlations.
            </body>
        </transition>
        <img src="../../public/bike_gif.gif" alt="" style="margin: 0 auto; display: block; height: 60vh">
    </div>
</template>

<style scoped>
    body {
        margin: 40px auto;
        max-width: 650px;
        line-height: 1.6;
        font-size: 18px;
        color: #444;
        padding: 0 10px;
        text-align: center;
    }

    h1, h2, h3 {
        line-height: 1.2
    }
</style>