const express = require('express');
const router = express.Router();
const LapTopCtl = require('../controllers/laptop_controller');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const Upload = multer({ storage: storage });

router.get("/getListLapTop", LapTopCtl.getListlaptop);
router.post("/addLapTop", Upload.single('hinhAnh'), LapTopCtl.addlaptop);
router.put("/updateLapTop/:id", Upload.single('hinhAnh'), LapTopCtl.updatelaptop);
router.delete("/deleteLapTop/:id", LapTopCtl.deletelaptop);
router.get("/getLapTopById/:id", LapTopCtl.getlaptopById);

module.exports = router;
