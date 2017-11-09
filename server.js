const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("client/build"));

app.use(routes);


mongoose.Promise = global.Promise;

mongoose.connect("mongodb://heroku_tkw4flts:unpbbcekr66n2is7caou7fnuta@ds255265.mlab.com:55265/heroku_tkw4flts",
  //process.env.MONGODB_URI || "mongodb://localhost/nytimesReact" || "mongodb://heroku_tkw4flts:unpbbcekr66n2is7caou7fnuta@ds255265.mlab.com:55265/heroku_tkw4flts", 
  {
    useMongoClient: true
  }
);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
