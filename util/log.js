var winston = require("winston");
var Postgres = require("winston-postgres").Postgres;
const logger = require("../util/logger");
winston.add(winston.transports.Postgres, {
  ssl: false, // are you sure you want to do this?
  timestamp: true,
  connectionString: "postgres://mukesh:password@localhost:5432/postgres",
  tableName: "winston-logs",
  ignoreMessage: function(level, message, metadata) {
    if (message === "something to ignore") {
      return true;
    }
    return false;
  }
});

var errorLogEmail = process.env.ERROR_LOGS_EMAIL || "";
var sendErrorLogOnEmail = process.env.ERROR_LOG_ON_EMAIL || false;
var saveLogInDb = process.env.SAVE_ERROR_LOG_IN_DB || true;
var saveLogInFile = process.env.SAVE_ERROR_LOG_IN_FILE || false;

// if (saveLogInDb == "true") {
//   logger.add(
//     new winston.transports.PostgreSQL({
//       connString: "postgres://mukesh:password@localhost:5432/postgres",
//       schema: "public",
//       tableName: "logEntry",
//       customSql: 'INSERT INTO public."logEntry"(logLevel) VALUES ("alpha");'
//     })
//   );
// }
// if (saveLogInFile == "true") {
//   logger.add(
//     new winston.transports.File({ filename: "error.log", level: "error" })
//   );
// }
// transports : [
//     new winston.transports.PostgreSQL({
//       connString :   'xxxxxxxxxxx',
//       schema : 'public',
//       //tableName : 'logEntry',
//       customSql:'INSERT INTO public."logEntry"(logLevel, msg, meta) VALUES ($1, $2, $3);',
//     })
//   ];
module.exports = {
  logger: logger,
  errorLogEmail: errorLogEmail,
  sendErrorLogOnEmail: sendErrorLogOnEmail
};
