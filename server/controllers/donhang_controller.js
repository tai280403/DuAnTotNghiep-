const { donHangModel } = require('../models/donhang_model');

exports.getListDonHang = async (req, res, next) => {
    try {
        const listDonHang = await donHangModel.find({});
        res.status(200).json({ status: 200, data: listDonHang });
    } catch (error) {
        res.status(500).json({ status: "lỗi", result: error.message });
    }
};

exports.addDonHang = async (req, res, next) => {
    try {
        const data = req.body;
        const newDonHang = new donHangModel({
            nguoiDungId: data.nguoiDungId,
            laptop: data.laptop,
            trangThai: data.trangThai,
            tongTien: data.tongTien,
            ngayDatHang: data.ngayDatHang,
            phuongThucThanhToan: data.phuongThucThanhToan,
            thongTinVanChuyen: {
                tenNguoiNhan: data.thongTinVanChuyen.tenNguoiNhan,
                soDienThoai: data.thongTinVanChuyen.soDienThoai,
                diaChi: data.thongTinVanChuyen.diaChi,
            },
        });

        const savedDonHang = await newDonHang.save();
        res.status(201).json(savedDonHang);
    } catch (error) {
        res.status(500).json({ status: "lỗi", result: error.message });
    }
};

exports.updateDonHang = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updatedDonHang = {
            nguoiDungId: data.nguoiDungId,
            laptop: data.laptop,
            trangThai: data.trangThai,
            tongTien: data.tongTien,
            ngayDatHang: data.ngayDatHang,
            phuongThucThanhToan: data.phuongThucThanhToan,
            thongTinVanChuyen: {
                tenNguoiNhan: data.thongTinVanChuyen.tenNguoiNhan,
                soDienThoai: data.thongTinVanChuyen.soDienThoai,
                diaChi: data.thongTinVanChuyen.diaChi,
            },
        };

        const result = await donHangModel.findByIdAndUpdate(id, updatedDonHang, { new: true });

        if (result) {
            return res.status(200).json({
                status: 200,
                message: "Cập nhật đơn hàng thành công",
                data: result,
            });
        } else {
            return res.status(400).json({
                status: 400,
                message: "Không thể cập nhật đơn hàng",
                data: [],
            });
        }
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", result: error.message });
    }
};

exports.deleteDonHang = async (req, res) => {
    try {
        const deletedDonHang = await donHangModel.findByIdAndDelete(req.params.id);
        if (!deletedDonHang) {
            return res.status(404).json({ message: 'Không tìm thấy đơn hàng' });
        }
        res.status(200).json({ message: 'Xóa đơn hàng thành công' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDonHangById = async (req, res, next) => {
    try {
        const donHang = await donHangModel.findById(req.params.id);
       
        if (!donHang) {
            return res.status(404).json({ message: 'Đơn hàng không tồn tại' });
        }
        
        res.status(200).json({ status: 200, data: donHang });
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", result: error.message });
    }
};
