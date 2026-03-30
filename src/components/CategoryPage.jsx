import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductList from './ProductList';
import { useCart } from '../context/CartContext';

function CategoryPage({ products }) {
  const { category } = useParams();
  const { addToCart } = useCart();

  const filtered = products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="category-page">
      <h2>{category} Products</h2>

      {filtered.length === 0 ? (
        <div>
          <p>No products found</p>
          <Link to="/">Back Home</Link>
        </div>
      ) : (
        <ProductList products={filtered} onAddToCart={addToCart} />
      )}
    </div>
  );
}

export default CategoryPage;