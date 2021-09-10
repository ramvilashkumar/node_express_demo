const Logger = (req, res, next) => {
  console.log("Middleware running");
  next();
};

export default Logger;
