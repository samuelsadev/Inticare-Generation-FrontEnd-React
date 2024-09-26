// CartIcon.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CartIcon.css'

const CartIcon = () => {
  return (
    <Link to="/carrinho" style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 100 }}>
      <button className="cart-icon-button">🛒</button>
    </Link>
  );
};

export default CartIcon;