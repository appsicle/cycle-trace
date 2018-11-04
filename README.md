# Cycle Trace 
A simple web app to display visualizations of data regarding the LA bike share system to satisfy the requirements of [Capital One's coding challenge](https://www.mindsumo.com/contests/bikeshare-data).

## Built With

[Vue.js](https://github.com/vuejs) - Frontend

[Node.js](https://nodejs.org/en/) - Backend 

[Express.js](https://expressjs.com/) - Backend

[vue-chart.js](https://vue-chartjs.org/#/) - Vue.js wrapper for Chart.js

[Vuetify.js](https://vuetifyjs.com/en/) - Material UI framework for Vue.js

[AWS](https://aws.amazon.com/) - Deployment using ec2 and s3

[nginx](https://www.nginx.com/) - Web Server to serve the backend through ec2

## Challenges

The hardest part of this assignment was planning out the structure of the application. I settled for a backend api created using express.js and used Vue.js to consume the api. 

I struggled with vue-chart.js' limitation on prohibiting html to be written on the graph component. This forced me to pass props in from other components as well as to nest the graph in a separate container component.

When parsing through the data for the backend, I searched for data structures similar to python's defaultdict but settled on just using objects instead.

When hosting the backend data, I struggled trying to deploy the backend onto heroku because I did not want to create a separate repository for my backend. Instead, I went with aws ec2 and used pm2 to keep the server up indefinitely.

## Improvements

Looking back, I could have loaded the data onto a database instead of converting it into json files. This may have simplified the process.


## Future Plans

I plan to add more available graphs and endpoints for the api so I can include even more interesting graphs on my application. Unfortunately, I ran short on time but I will add more features in the future (perhaps a search feature to retrieve data on certain days).

## Acknowledgments

This was a coding challenge for Capital One, through which i learned a lot about web development, especially 
deploying a webserver and separating the frontend and backend.


