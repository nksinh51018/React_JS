import React, { useState,useEffect } from 'react'
import "./css/Header.css"
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import cartShopping from '../../assets/cart-shopping.png'

const Header = () => {

    const [state, setstate] = useState({
        menu: false,
    });



    const toggleMenuMobile = () => {
        setstate({
            menu: !state.menu
        })
    }

    const updateDimensions = () => {
        let width = window.innerWidth;
        if (width < 425) {
            setstate({
                menu: false,
            })
        }
        else {
            setstate({
                menu: true,
            })
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        let width = window.innerWidth;
        if (width < 425) {
            setstate({
                menu: false,
            })
        }
        else {
            setstate({
                menu: true,
            })
        }
    }, []);

    return ( 
        <div className="header">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="nav-button"
                        id="menu"
                        onClick={() => {
                            toggleMenuMobile()
                        }}>
                        <i className="fas fa-stream"></i>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 h-100">
                        <ul
                            className={`nav justify-content-center align-items-center text-center h-100 menu-mobile ${state.menu ? "" : "hide"}`}
                        >
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/">Trang chủ</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/introduction">Giới thiệu</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories">Sản phẩm</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">Dịch vụ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/news">Tin tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Liên hệ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/maps">Bản đồ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <ul
                            className="nav justify-content-center align-items-center text-center h-100"
                        >
                            <li className="nav-item">
                                <i className="fa fa-search nav-link" aria-hidden="true"></i>
                            </li>
                            <li className="nav-item">
                                <img
                                    className="nav-link cart-shopping"
                                    src={cartShopping}
                                    alt="cart shooping"
                                />
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">0 sản phẩm</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
     );
}

export default Header;