const express = require("express");
const router = express.Router();
const employeeController = require("../Controller/employeeController");

router.get("/", employeeController.index);
router.post("/add", employeeController.store);
router.put("/:id", employeeController.update);
router.delete("/:id", employeeController.destroy);
module.exports = router;
