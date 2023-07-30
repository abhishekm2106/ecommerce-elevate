import './navbar.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Navbar = ({ category, setCategory, search, setSearch }) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories").then(response => setCategories(response.data))
    }, [])
    return (
        <>
            <nav className='quick-links'>
                <span>Best Seller</span>
                <span>Gift Ideas</span>
                <span>New Realeses</span>
                <span>todays deal</span>
                <span>customer service</span>
            </nav>
            <h1>
                Eflyer
            </h1>
            <div className='menu'>
                <button className='burger'><GiHamburgerMenu /></button>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className='category'>
                    <option value="allcategory">All Category</option>
                    {
                        categories.map(cat => <option value={cat} key={cat}>{cat}</option>)
                    }
                </select>
                <div className='search'>
                    <input type="text" placeholder='Search for shirts?' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button><FaSearch /></button>
                </div>
                <button className='tp-button'><FaShoppingCart /> Cart</button>
                <button className='tp-button'><FaUser /> Profile</button>

            </div>
        </>
    )
}

export default Navbar;