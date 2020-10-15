import React, { Component } from 'react'
import {  Route, Link } from 'react-router-dom'

const menus = [
    {
        label: 'Home',
        to: '/',
        exact: true,
    },
    {
        label: 'Products list',
        to: '/products',
        exact: true,
    },
]

const MenuLink = ({ label, to, exact }) => {
    return (
        <Route path={to}
            exact={exact}
            children={({ match }) => {
                let active = match ? "active" : "";
                return <li className={`nav-item ${active}`} > { /* <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> */}
                    <Link className="nav-link"
                        to={to}
                        exact={exact.toString()} > {label}
                                </Link>
                </li>
            }} />
    )
}

class Menu extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
                <a className="navbar-brand"
                    href="/" > Call API </a>
                <div className="collapse navbar-collapse"
                    id="collapsibleNavId" >
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
                        {this.showMenus(menus)}
                    </ul>
                </div> </nav>
        )
    }

    showMenus = (menus) =>{
        let result = "";

        if(menus.length >0){
            result = menus.map((menu,index)=>{
                return (
                    <MenuLink key = {index}
                    label={menu.label}
                    to={menu.to}
                    exact={menu.exact} />
                )
            })
        }
        return result;
    }


}

export default Menu;