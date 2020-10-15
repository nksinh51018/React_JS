import Home from './component/Home'
import About from './component/About'
import Contact from "./component/Contact"
import NotFound from "./component/NotFound"
import Products from './component/Products'
import React from 'react'
import Login from './component/Login'
const routes = [

    {
        path:'/',
        exact: true,
        main: ()=>{
            return (<Home />)
        }
    },
    {
        path:'/about',
        exact: false,
        main: ()=>{
            return (<About />)
        }
    },
    {
        path:'/contact',
        exact: true,
        main: ()=>{
            return (<Contact />)
        }
    },
    {
        path:'/product',
        exact: false,
        main: ({match,location})=>{
            return (<Products match={match} location={location} />)
        }
    },
    {
        path:'/login',
        exact: false,
        main: ({location})=>{
            return (<Login location={location}/>)
        }
    },
    {
        path:'',
        exact: false,
        main: ()=>{
            return (<NotFound />)
        }
    },

]

export default routes;