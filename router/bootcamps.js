import express from "express";

import {
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcamp,
} from "../controller/bootcamps.js";

const router = express.Router();

router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

// router.get("/", (req, res) => {
//   // const body = req.body();
//   res.status(200).send({ success: true, msg: "Hello" });
// });

// router.post("/", (req, res) => {
//   // const body = req.body();
//   res.status(200).send({ success: true, msg: "Added 1 data" });
// });

// router.put(":id", (req, res) => {
//   // const body = req.body();
//   res
//     .status(200)
//     .send({ success: true, msg: `Updated data of id ${req.params.id}` });
// });

// router.delete("/:id", (req, res) => {
//   // const body = req.body();
//   res
//     .status(200)
//     .send({ success: true, msg: `Deleted data having id ${req.params.id}` });
// });

export default router;
