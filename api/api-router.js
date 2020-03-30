const router = require("express").Router();

const worldRouter = require("../routes/world-router")

router.use("/world", worldRouter)

module.exports = router;