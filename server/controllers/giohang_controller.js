const gioHangModel = require('../models/giohang_model'); // Import model giỏ hàng

// Lấy danh sách giỏ hàng
exports.getListGioHang = async (req, res) => {
    try {
        const listGioHang = await gioHangModel.find({});
        res.status(200).json({ status: 200, data: listGioHang });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ status: "lỗi", result: "Không thể lấy danh sách giỏ hàng: " + error.message });
    }
};

// Thêm giỏ hàng mới
exports.addGioHang = async (req, res) => {
    try {
        const { nguoiDungId, laptop, tongTien, ngayCapNhat } = req.body;

        const newGioHang = new gioHangModel({
            nguoiDungId,
            laptop,
            tongTien,
            ngayCapNhat,
        });

        const savedGioHang = await newGioHang.save();
        res.status(201).json({ status: 201, message: "Thêm giỏ hàng thành công", data: savedGioHang });
    } catch (error) {
        res.status(500).json({ status: "lỗi", result: "Không thể thêm giỏ hàng: " + error.message });
    }
};

// Cập nhật giỏ hàng
exports.updateGioHang = async (req, res) => {
    try {
        const { id } = req.params;
        const { laptop } = req.body; // Cập nhật thông tin laptop

        // Tìm giỏ hàng cần cập nhật
        const gioHang = await gioHangModel.findById(id);

        if (!gioHang) {
            return res.status(404).json({ status: 404, message: "Giỏ hàng không tồn tại" });
        }

        // Cập nhật laptop
        gioHang.laptop = laptop; // Cập nhật laptop

        const updatedGioHang = await gioHang.save(); // Lưu lại thay đổi

        return res.status(200).json({
            status: 200,
            message: "Cập nhật giỏ hàng thành công",
            data: updatedGioHang,
        });
    } catch (error) {
        res.status(500).json({ status: "lỗi", result: "Lỗi cập nhật giỏ hàng: " + error.message });
    }
};

// Xóa giỏ hàng
exports.deleteGioHang = async (req, res) => {
    try {
        const deletedGioHang = await gioHangModel.findByIdAndDelete(req.params.id);
        if (!deletedGioHang) {
            return res.status(404).json({ status: 404, message: 'Không tìm thấy giỏ hàng' });
        }
        res.status(200).json({ status: 200, message: 'Xóa giỏ hàng thành công' });
    } catch (error) {
        res.status(500).json({ status: "lỗi", result: "Lỗi khi xóa giỏ hàng: " + error.message });
    }
};

// Lấy giỏ hàng theo ID
exports.getGioHangById = async (req, res) => {
    try {
        const gioHang = await gioHangModel.findById(req.params.id);
       
        if (!gioHang) {
            return res.status(404).json({ status: 404, message: 'Giỏ hàng không tồn tại' });
        }
        
        res.status(200).json({ status: 200, data: gioHang });
    } catch (error) {
        res.status(500).json({ status: "lỗi", result: "Lỗi khi lấy giỏ hàng: " + error.message });
    }
};
