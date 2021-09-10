import Bootcamp from "../models/Bootcamp.js";

//@desc    GET all bootcamps
//@route   /api/v1/bootcamps
//access   Public

export const getBootcamps = async (req, res, next) => {
  try {
    const data = await Bootcamp.find();

    res.status(200).json({
      success: true,
      count: data.length,
      msg: "Fetched All",
      result: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: "Bad Request",
      result: null,
    });
  }
};

//@desc    GET single bootcamps
//@route   /api/v1/bootcamps
//access   Public

export const getBootcamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.findById(req.params.id);

    if (data) {
      res.status(200).json({
        success: true,
        msg: `Fetched data of ${req.params.id}`,
        result: data,
      });
    } else {
      res.status(400).json({
        success: false,
        msg: "Bad Request",
        result: null,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: "Bad Request",
      result: null,
    });
  }
};

//@desc    Create  bootcamp
//@route   /api/v1/bootcamps
//access   Private

export const createBootcamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.create(req.body);
    res
      .status(201)
      .send({ success: true, msg: "Created bootcamp", result: data });
  } catch (error) {
    res.status(400).send({ success: true, msg: "Bad Request", result: null });
  }
};

//@desc    Update  bootcamp
//@route   /api/v1/bootcamps
//access   Private

export const updateBootcamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (data) {
      res.status(200).json({
        success: true,
        msg: `Updated data of id ${req.params.id}`,
        result: data,
      });
    } else {
      res
        .status(400)
        .json({ success: true, msg: `Id does not exists`, result: null });
    }
  } catch (error) {
    res.status(400).json({
      success: true,
      msg: "Something went wrong",
      result: null,
      id: req.params.id,
    });
  }
};

//@desc    DELETE  bootcamp
//@route   /api/v1/bootcamps
//access   Private

export const deleteBootcamp = async (req, res, next) => {
  try {
    const data = await Bootcamp.findByIdAndDelete(req.params.id);

    if (data) {
      res.status(200).json({
        success: true,
        msg: `Deleted data of id ${req.params.id}`,
        result: {},
      });
    } else {
      res
        .status(400)
        .json({ success: true, msg: `Id does not exists`, result: null });
    }
  } catch (error) {
    res.status(400).json({
      success: true,
      msg: "Something went wrong",
      result: null,
      id: req.params.id,
    });
  }
};
