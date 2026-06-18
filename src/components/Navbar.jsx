import { Link } from 'react-router-dom'

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1>🌿 Paradise Nursery</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  )
}
