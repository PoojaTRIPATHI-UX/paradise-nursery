import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (plant) => {
    setCart(prev => [...prev, {...plant, qty: 1}])
  }

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => 
      item.id === id ? {...item, qty: Math.max(1, item.qty + delta)} : item
    ))
  }

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<h2 style={{padding:'2rem'}}>Welcome to Paradise Nursery!</h2>} />
        <Route path="/plants" element={<ProductList cart={cart} addToCart={addToCart} />} />
        <Route path="/cart" element={
          <div className="cart-page">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? <p>Cart is empty</p> : (
              <>
                {cart.map(item => (
                  <CartItem key={item.id} item={item} updateQty={updateQty} removeItem={removeItem} />
                ))}
                <h3>Total Cart Amount: ${total.toFixed(2)}</h3>
                <button onClick={() => alert('Coming Soon')}>Checkout</button>
                <Link to="/plants"><button>Continue Shopping</button></Link>
              </>
            )}
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}
export default App
