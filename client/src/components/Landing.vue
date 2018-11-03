<template>
    <div style="text-align: center;">
        <transition
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
                mode="out-in">
            <body>
            Many commuters in Los Angeles, California have taken it upon themselves
            to use bike sharing as a method of transportation. Cycle Trace is a project
            that visualizes over 130,000 entries of bike share data in an attempt to
            categorize and display relevant correlations. <br><strong>To view the graphs, click on the links
            in the navbar above!</strong>
            </body>
        </transition>
        <v-btn style="margin-top: 0;" to="/distance" class="info" round flat>Enter</v-btn>
        <img src="../../public/bike_gif2.gif" alt="">
        <p class="caption" style="color: #7f8580">Image: Rob Diaz</p>
    </div>
</template>

<style scoped>

    body {
        margin: 20px auto;
        max-width: 94%;
        line-height: 1.6;
        font-size: 18px;
        color: #444;
        padding: 0 10px;
        text-align: center;
    }

    img {
        margin: 10px auto;
        display: block;
        max-width: 90%;

    }



</style>