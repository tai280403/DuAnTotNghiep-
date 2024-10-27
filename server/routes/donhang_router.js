const express = require('express');
const router = express.Router();
const donHangController = require('../controllers/donhang_controller');

// Middleware xác thực (nếu cần)
// const authMiddleware = require('../middlewares/auth');

// Lấy danh sách đơn hàng
router.get('/', donHangController.getListDonHang);

// Thêm đơn hàng mới
router.post('/', donHangController.addDonHang);

// Cập nhật đơn hàng
router.put('/:id', donHangController.updateDonHang);

// Xóa đơn hàng
router.delete('/:id', donHangController.deleteDonHang);

// Lấy đơn hàng theo ID
router.get('/:id', donHangController.getDonHangById);

// Bạn có thể thêm middleware xác thực cho các route nhạy cảm
// router.use(authMiddleware);

module.exports = router;
