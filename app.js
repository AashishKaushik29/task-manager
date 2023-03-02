const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

//middleware

app.use(express.json());

// routes

app.get("/");
app.use("/api/v1/tasks", tasks);

const port = 3001;

app.listen(port, () => console.log(`server is listening on port ${port}... `));
