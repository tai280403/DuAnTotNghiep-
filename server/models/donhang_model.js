const db = require("./db");
const mongoose = db.mongoose;

const donHangSchema = new mongoose.Schema(
  {
    nguoiDungId: { type: String, required: true }, // Đổi thành String nếu ID không phải là số
    laptop: [
      {
        laptopId: { type: String, required: true }, // Đổi thành String nếu ID không phải là số
        soLuong: { type: Number, required: true, min: 1 }, // Thêm điều kiện min cho soLuong
        gia: { type: Number, required: true, min: 0 }, // Thêm điều kiện min cho gia
      }
    ],
    trangThai: { type: String, required: true, enum: ['pending', 'shipped', 'delivered', 'canceled'] }, // Thêm các trạng thái hợp lệ
    tongTien: { type: Number, required: true, min: 0 }, // Thêm điều kiện min cho tongTien
    ngayDatHang: { type: Date, required: true, default: Date.now }, // Sử dụng Date và mặc định là ngày hiện tại
    phuongThucThanhToan: { type: String, required: true },
    thongTinVanChuyen: {
      tenNguoiNhan: { type: String, required: true },
      soDienThoai: { type: String, required: true },
      diaChi: { type: String, required: true },
    },
  },
  {
    collection: "donhangs",
    timestamps: true,
  }
);

const donHangModel = mongoose.model("DonHang", donHangSchema);

module.exports = { donHangModel };
