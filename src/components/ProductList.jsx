import { plants } from '../data/plants'

export default function ProductList({ cart, addToCart }) {
  const categories = [...new Set(plants.map(p => p.category))]

  const isInCart = (id) => cart.some(item => item.id === id)

  return (
    <div className="product-list">
      {categories.map(category => (
        <section key={category}>
          <h2>{category}</h2>
          <div className="plants-grid">
            {plants.filter(p => p.category === category).map(plant => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p className="price">${plant.price}</p>
                <button 
                  onClick={() => addToCart(plant)}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
