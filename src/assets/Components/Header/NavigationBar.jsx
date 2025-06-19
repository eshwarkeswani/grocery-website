import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Login from './Login';
import './NavigationBar.css';

function NavigationBar({ cart, updateCartQuantity, removeCartItem, clearCart }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [checkoutMessage, setCheckoutMessage] = useState('');
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);


    const toggleMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsMenuOpen((prevState) => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);  
        };

    const toggleLogin = (e) => {
        e.stopPropagation();
        setIsLoginOpen(!isLoginOpen);
    };

    const toggleCart = (e) => {
        e.preventDefault();
        setShowCart((prevState) => !prevState);
    };

    
    const subtotal = cart.reduce(((total, item) => total + item.price * item.quantity), 0).toFixed(2);

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const handleCheckout = () => {
        setShowCart(false); 
        setShowCheckoutForm(true); 
    };
    
    const handleConfirmOrder = () => {
        setCheckoutMessage("Thank you for shopping with us! Your order has been confirmed.");
        clearCart();
        setShowCheckoutForm(false);
        setTimeout(() => {
            setCheckoutMessage('');
        }, 5000); 
    };
    
    const handleCancelOrder = () => {
        setShowCheckoutForm(false); 
    };
    

    return (
        <>
            <nav className="navigation">
                <a href="#" className="logo">
                    <span>Q</span>uickMart
                </a>

                <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <a href="#" className="active" onClick={closeMenu}>Home</a>
                    </li>
                    <li>
                        <a href="#category" onClick={closeMenu}>Categories</a>
                    </li>
                    <li>
                        <a href="#popular-bundle-pack" onClick={closeMenu}>Our Packages</a>
                    </li>
                </ul>

                <div className="right-nav">
                    <a href="#" className="login" onClick={toggleLogin}>
                        <FontAwesomeIcon icon={faUser} />
                    </a>

                    <a href="#" className="cart" onClick={toggleCart}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className="cart-count">{totalQuantity}</span>
                    </a>
                </div>
            </nav>

            {showCart && (
    <div className="cart-dropdown">
        <h3>CART</h3>
        <div className='continue-shopping'>
            <a href="">Continue shopping</a>
        </div>
        {cart.length > 0 ? (
            <>
                <ul className="cart-items">
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <span className="cart-item-name">{item.name}</span>
                                <span className="cart-item-price">${item.price}</span>
                                <div className="cart-item-quantity">
                                    <button
                                        className="quantity-btn"
                                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                        disabled={item.quantity === 1}
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="quantity-btn"
                                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                            <button
                                className="remove-btn"
                                onClick={() => removeCartItem(item.id)}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="cart-summary">
                    <span>Subtotal:</span>
                    <span>${subtotal}</span>
                </div>
                <button className="cart-checkout" onClick={handleCheckout}>
                    CHECK OUT
                </button>
            </>
        ) : (
            <p className="empty-cart-message">Your cart is empty.</p>
        )}
    </div>
)}

{showCheckoutForm && (
    <div className={`checkout-form ${showCheckoutForm ? 'active' : ''}`}>
        <h3>Confirm Your Order</h3>
        <form>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="num">Number</label>
                <input type="tel" id="num" name="num" required />
            </div>
            <div className="form-group">
                <label htmlFor="address">Delivery Address</label>
                <textarea id="address" name="address" required></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="payment">Payment Method</label>
                <select id="payment" name="payment" defaultValue="Cash on Delivery">
                    <option value="Cash on Delivery">Cash on Delivery</option>
                    <option value="Credit Card">Credit Card</option>
                </select>
            </div>
            <div className="form-group">
                <label>Subtotal:</label>
                <span>${subtotal}</span>
            </div>
            <div className="form-actions">
                <button type="button" className="confirm-btn" onClick={handleConfirmOrder}>
                    Confirm Order
                </button>
                <button type="button" className="cancel-btn" onClick={handleCancelOrder}>
                    Cancel Order
                </button>
            </div>
        </form>
    </div>
)}


{checkoutMessage && <div className="checkout-message">{checkoutMessage}</div>}

            <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
}

export default NavigationBar;
