import React, { Component } from 'react'
import {Route,NavLink} from 'react-router-dom'


const menus = [
  {
    to: "/",
    label: 'Trang chu',
    acticeOnlyWhenExact:true
  },
  {
    to: "/about",
    label: 'Gioi thieu',
    acticeOnlyWhenExact:false
  },
  {
    to: "/contact",
    label: 'Lien he',
    acticeOnlyWhenExact:false
  },
  {
    to: "/product",
    label: 'Danh sach san pham',
    acticeOnlyWhenExact:false
  },
  {
    to: "/login",
    label: 'Login',
    acticeOnlyWhenExact:false
  },
]

const MenuLink = ({ label, to, acticeOnlyWhenExact }) => {
    return (
      <Route path={to}
        exact={acticeOnlyWhenExact}
        children={({ match }) => {
          let active = match ? 'active' : '';
          return (
            <div className={active}>
              <NavLink to={to}
                activeStyle={{ color: 'red' }}
                exact={acticeOnlyWhenExact}
              >{label}</NavLink>
            </div>
          )
        }} />
    )
  }

class Menu extends Component {

    render() {
        return (
            <>
                <div>
                  {this.showMenu(menus)}
                   
                </div>
            </>
        )
    }

    showMenu = menus =>{
      let result = null;

      if(menus.length > 0){
        result = menus.map((menu,index)=>{
          return(
            <MenuLink label={menu.label} to={menu.to} acticeOnlyWhenExact={menu.acticeOnlyWhenExact} key={index} />
          )
        })
      }

      return result;
    }

}

export default Menu;