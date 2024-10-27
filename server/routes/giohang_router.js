const express = require('express');
const router = express.Router();
const gioHangController = require('../controllers/giohang_controller'); // Import controller giỏ hàng

// Lấy danh sách giỏ hàng
router.get('/', gioHangController.getListGioHang);

// Thêm giỏ hàng mới
router.post('/', gioHangController.addGioHang);

// Cập nhật giỏ hàng theo ID
router.put('/:id', gioHangController.updateGioHang);

// Xóa giỏ hàng theo ID
router.delete('/:id', gioHangController.deleteGioHang);

// Lấy giỏ hàng theo ID
router.get('/:id', gioHangController.getGioHangById);

module.exports = router;
