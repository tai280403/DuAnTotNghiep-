const mongoose = require('mongoose');

const gioHangSchema = new mongoose.Schema({
    nguoiDungId: { type: Number, required: true },
    laptop: [
        {
            laptopId: { type: Number, required: true },
            soLuong: { type: Number, required: true },
            gia: { type: Number, required: true }
        }
    ],
    tongTien: { type: Number, required: true },
    ngayCapNhat: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GioHang', gioHangSchema);
