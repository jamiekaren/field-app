// const router = require("express").Router();
// const userRoutes = require("./user");

// // Book routes
// router.use("/user", userRoutes);

// module.exports = router;
const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;