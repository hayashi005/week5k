import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container py-5">
        <div className="alert alert-info">ตะกร้าสินค้าว่างเปล่า</div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2>ตะกร้าสินค้า</h2>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>สินค้า</th>
              <th>ราคา</th>
              <th>จำนวน</th>
              <th>รวม</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                      className="me-2"
                    />
                    {item.name}
                  </div>
                </td>
                <td>฿{item.price}</td>
                <td>
                  <div className="input-group" style={{ width: '120px' }}>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="form-control text-center"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>฿{item.price * item.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="text-end"><strong>รวมทั้งหมด:</strong></td>
              <td><strong>฿{getCartTotal()}</strong></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="text-end mt-3">
        <button className="btn btn-primary" onClick={() => clearCart()}>ดำเนินการสั่งซื้อ</button>
      </div>
    </div>
  );
};

export default Cart;