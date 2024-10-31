import { setOrder } from '../redux/orderSlice'; // Import action để lưu đơn hàng

const confirmOrder = () => {
    const orderData = {
        tenNguoiNhan: 'Nguyễn Văn A', // Thay thế bằng thông tin thực tế
        diaChi: '123 Đường ABC, TP.HCM', // Thay thế bằng địa chỉ thực tế
        phuongThucGiaoHang: deliveryMethod,
        phuongThucThanhToan: paymentMethod,
        tongChiPhi: totalCost,
    };

    dispatch(setOrder(orderData)); // Lưu thông tin đơn hàng vào Redux

    Alert.alert(
        'Confirm Order',
        `Total Cost: ${totalCost.toLocaleString()} VND\n` +
        `Delivery Method: ${deliveryMethod}\n` +
        `Payment Method: ${paymentMethod}\n` +
        (promoCode ? `Promo Code: ${promoCode}\n` : '') +
        'Proceed with placing the order?',
        [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Confirm', onPress: () => navigation.navigate('OrderScreen') }, // Chuyển hướng đến OrderScreen
        ]
    );
};
