import { useEffect, useRef, useState } from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Product from './components/product/product';
import axios from 'axios';


function App() {
  const [category, setCategory] = useState('allcategory')
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  let productTemp = useRef([]);

  const filterSearch = () => {
    if (search === "") return productTemp.current;
    const newProductList = productTemp.current.filter(p =>
      p.title.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search)
    )
    return newProductList;

  }

  useEffect(() => {
    const endpoint = category === "allcategory" ? 'https://fakestoreapi.com/products' : 'https://fakestoreapi.com/products/category/' + category
    axios
      .get(endpoint)
      .then(response => { productTemp.current = response.data; setProducts(response.data); })
  }, [category])

  useEffect(() => {
    setProducts(filterSearch())
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
            products.length ?
              products.map(product => <Product {...product} key={product.id} />) :
              <p className='f-width'>OOPs nothing found!!!</p>
          }
        </div>
      </section>

      <p className='credit'>Made with ❤️ by <a href="https://www.linkedin.com/in/abhishekm2106/">Abhishek Mohanty</a></p>

    </div>
  );
}

export default App;
