const mongoose = require("mongoose");
// connect to the database
const connectionUrlDb = "mongodb://127.0.0.1:27017/logger";
mongoose
  .connect(connectionUrlDb, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch(e => {
    console.log(e);
  });
