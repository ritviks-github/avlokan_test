import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';

export default function Navbar() {
    const navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem("authToken");    
        navigate('/login');
    }
    
    const optionsArr = ['milk', 'butter', 'yoghurt', 'bread', 'iphone16'];
    const [beforeSearch, setBeforeSearch] = useState('');
    const token = localStorage.getItem("authToken");
    useEffect(() => {
        const updatePlaceholder = () => {
            const randomNumber = Math.floor(Math.random() * optionsArr.length);
            setBeforeSearch(optionsArr[randomNumber]);
        };

        const intervalId = setInterval(updatePlaceholder, 3000);
        updatePlaceholder();
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#880085'}}>
                <div className="container-fluid">
                    <Link style={{color:'white',fontWeight:'800'}} className="navbar-brand" to="/">eCommerce</Link>
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
                        <div>
                            <Link to='/search'><input
                                type="text"
                                id="searchHome"
                                placeholder={`Search "${beforeSearch}"`}
                            /></Link>
                        </div>
                        <div className="dropdown" id="rightNav">
                          {token ?<>
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
                                <li onClick = {handleLogout} style={{cursor:"pointer",paddingLeft:'10px'}}>Logout</li>
                            </ul>
                            
                          </> : <>
                          <Link to='/login' style={{backgroundColor:' #D600D9',color:'white'}} className="btn" id="login">Login</Link>
                          <Link to='/signup' style={{backgroundColor:'#B100B1',color:'white'}} className="btn">Signup</Link>
                          </>}
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
