import { Link } from 'react-router-dom'

export default function CartItem({ item, updateQty, removeItem }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-thumbnail" />
      <div className="cart-info">
        <h4>{item.name}</h4>
        <p>Unit Price: ${item.price}</p>
        <p>Total: ${(item.price * item.qty).toFixed(2)}</p>
      </div>
      <div className="qty-controls">
        <button onClick={() => updateQty(item.id, -1)}>-</button>
        <span>{item.qty}</span>
        <button onClick={() => updateQty(item.id, 1)}>+</button>
      </div>
      <button onClick={() => removeItem(item.id)} className="delete-btn">Delete</button>
    </div>
  )
}
