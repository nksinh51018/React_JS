import React from 'react'
import HomePage from './page/homePage/HomePage';
import NotFound from './page/notFound/NotFound';
import ProductListPage from './page/ProductListPage/ProductListPage';
import ProductActionPage from './page/ProductActionPage/ProductActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: ()=> <HomePage />
    },
    {
        path: '/products',
        exact: true,
        main: ()=> <ProductListPage />
    },
    {
        path: '/products/add',
        exact: true,
        main: ({history})=> <ProductActionPage history={history} />
    },
    {
        path: '/products/edit/:id',
        exact: true,
        main: ({match,history})=> <ProductActionPage match={match}  history={history}/>
    },
    {
        path: '',
        exact: true,
        main: ()=> <NotFound />
    },
]

export default routes;