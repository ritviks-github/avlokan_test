import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Nav.css';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

export default function Search() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate('/login');
    };

    const optionsArr = ['milk', 'butter', 'yoghurt', 'bread', 'iphone16'];
    const [beforeSearch, setBeforeSearch] = useState('');
    const token = localStorage.getItem("authToken");
    const [prods, setProds] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); 
    useEffect(() => {
        const updatePlaceholder = () => {
            const randomNumber = Math.floor(Math.random() * optionsArr.length);
            setBeforeSearch(optionsArr[randomNumber]);
        };

        const intervalId = setInterval(updatePlaceholder, 3000);
        updatePlaceholder();
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (searchTerm.trim() !== '') { // Only fetch if the search term is not empty
            axios.get('http://localhost:5000/api/allProdsfind', { params: { search: searchTerm } })
                .then((res) => {
                    const fetchedProds = res.data;
                    setProds(fetchedProds);
                })
                .catch((err) => console.error('Error fetching products:', err));
        } else {
            setProds([]); // Clear products if the search term is empty
        }
    }, [searchTerm]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#880085' }}>
                <div className="container-fluid">
                    <Link style={{ color: 'white', fontWeight: '800' }} className="navbar-brand" to="/">eCommerce</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <input
                            type="text"
                            id="searchHome"
                            placeholder={`Search "${beforeSearch}"`}
                            value={searchTerm}
                            onChange={handleSearchChange}
                            style={{ padding: '5px', width: '300px', marginRight: '20px', borderRadius: '5px' }}
                        />
                        <div className="dropdown" id="rightNav">
                            {token ? (
                                <>
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/014/396/452/original/comic-style-user-icon-with-transparent-background-file-png.png"
                                        alt="User Icon"
                                        style={{ height: '60px', cursor: 'pointer' }}
                                        className="dropdown-toggle"
                                        id="dropdownMenuButton"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    />
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/cart">Cart</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li onClick={handleLogout} style={{ cursor: "pointer", paddingLeft: '10px' }}>Logout</li>
                                    </ul>
                                </>
                            ) : (
                                <>
                                    <Link to='/login' style={{ backgroundColor: ' #D600D9', color: 'white' }} className="btn" id="login">Login</Link>
                                    <Link to='/signup' style={{ backgroundColor: '#B100B1', color: 'white' }} className="btn">Signup</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="product-carousel">
                {prods.length > 0 ? (
                    prods.map((prod, index) => (
                        <ProductCard key={index} product={prod} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', marginTop: '20px', color: '#888' }}>No products found.</p>
                )}
            </div>
        </div>
    );
}
