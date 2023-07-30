import { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Product from './components/product/product';
import axios from 'axios';


function App() {
  const [category, setCategory] = useState('allcategory')
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (category === "allcategory")
      axios.get('https://fakestoreapi.com/products').then(response => setProducts(response.data))
    else
      axios.get('https://fakestoreapi.com/products/category/' + category).then(response => setProducts(response.data))
  }, [category])
  useEffect(() => {
    const newProductList = products.filter(p => {
      return p.title.includes(search) || p.description.includes(search) || p.description.includes(search)
    })
    setProducts(newProductList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <div className="App">
      <section className='interactive'>
        <Navbar category={category} setCategory={setCategory} search={search} setSearch={setSearch} />
        <div className='slider'>
          <h2>get started <br /> your favourite shopping</h2>
          <button>Buy now</button>
        </div>
      </section>
      <section className='products'>
        <h2>Men's & Women's fashion</h2>
        <div className='products-list'>
          {
            products.map(product => <Product {...product} key={product.id} />)
          }
        </div>
      </section>
    </div>
  );
}

export default App;
