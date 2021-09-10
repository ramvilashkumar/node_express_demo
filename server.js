import express from "express";
import { config } from "dotenv";
import connectDb from "./config/db.js";
import colors from "colors";

//import the router
import bootcamp from "./router/bootcamps.js";
import Logger from "./middleware/Logger.js";
import morgan from "morgan";

config({ path: "./config/config.env" });

connectDb();

const app = express();

app.use(express.json());

//MiddleWare to add route

if (process.env.NODE_ENV === "development") {
  app.use(morgan("combined"));
}

app.use("/api/v1/bootcamps", bootcamp);

// app.get("/api/v1/todoos", (req, res) => {
//   // const body = req.body();
//   res.status(200).send({ success: true, msg: "Hello" });
// });

// app.post("/api/v1/todoos", (req, res) => {
//   // const body = req.body();
//   res.status(200).send({ success: true, msg: "Added 1 data" });
// });

// app.put("/api/v1/todoos/:id", (req, res) => {
//   // const body = req.body();
//   res
//     .status(200)
//     .send({ success: true, msg: `Updated data of id ${req.params.id}` });
// });

// app.delete("/api/v1/todoos/:id", (req, res) => {
//   // const body = req.body();
//   res
//     .status(200)
//     .send({ success: true, msg: `Deleted data having id ${req.params.id}` });
// });

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} in port ${PORT}`)
);

//Handle unhandled promise

process.on("unhandledRejection", (err, promise) => {
  console.log(`Unhandled: ${err}`.red);

  //Close server....
  server.close(() => process.exit(1));
});
