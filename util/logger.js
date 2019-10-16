"use strict";
const { createLogger, format, transports } = require("winston");
const fs = require("fs");
const path = require("path");
var winston = require("winston");
var Postgres = require("winston-postgres").Postgres;
const env = process.env.NODE_ENV || "development";
const logDir = "log";

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const filename = path.join(logDir, "results.log");

const logger = createLogger({
  // change level if in dev environment versus production
  level: env === "development" ? "debug" : "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.json()
  ),
  transports: [
    new transports.Console({
      level: "info",
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    }),
    new winston.transports.PostgreSQL({
      connString: "postgres://mukesh:password@localhost:5432/postgres",
      schema: "public",
      tableName: "logEntry",
      customSql: 'INSERT INTO public."logEntry"(logLevel) VALUES ("alpha");'
    }),
    new transports.File({ filename })
  ]
});
module.exports = logger;
