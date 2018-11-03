<script>
    import {Doughnut} from 'vue-chartjs'

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Most Popular Starting Stations by Pass Type'
        }
    };
    export default {
        data() {
          return {
              initial_data: [],
              initial_label: []
          }
        },
        extends: Doughnut,

        watch: {
            data: function () {
                this.$data._chart.destroy();
                this.renderDonutChart();
            }
        },

        mounted() {
            this.$http.get('http://localhost:3000/starting').then(response => {
               var x = response.body['Monthly Pass'].slice(0,4);
               for(var i = 0; i < x.length; ++i){
                   this.initial_data.push(x[i][1]);
                   this.initial_label.push('Station '+x[i][0]);
               }

            });
            this.renderDonutChart()
        },

        methods: {
            renderDonutChart() {
                this.renderChart({
                        labels: this.labels,
                        datasets: [
                            {
                                backgroundColor: ['#5f4548', '#d1e5f5', '#93cd90', '#395c43'],
                                data: this.data,
                            }
                        ]
                    }, options
                );
            }

        },
        computed: {
            labels(){
                if(this.$store.getters.getStartArray.length === 0){
                    return this.initial_label;
                }else{
                    var x = this.$store.getters.getStartLabels.slice(0,4);
                    var temp = [];
                    for(var i = 0; i < x.length; ++i){
                        temp.push("Station "+ x[i]);
                    }
                    return temp;
                }
            },
            data(){
                if(this.$store.getters.getStartArray.length === 0){
                    return this.initial_data;
                }else{
                    return this.$store.getters.getStartArray.slice(0,4);
                }
            }
        }
    }
</script>
