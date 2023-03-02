exports.getAllTasks = (req, res) => {
  res.send("all iteams ");
};

exports.createTask = (req, res) => {
  res.json(req.body);
};
exports.getTask = (req, res) => {
  res.send("get a single task ");
};
exports.updateTask = (req, res) => {
  res.send("uodate Task ");
};
exports.deleteTask = (req, res) => {
  res.send("Delete Task");
};
