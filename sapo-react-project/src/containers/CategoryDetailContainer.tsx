import React, { useEffect,useContext } from 'react'
import CategoryDetail from '../components/CategoryDetail/CategoryDetail';
import { actGetCategoryByIDRequest, actUpdateCategoryRequest, actClearCategoryItem, actAddCategoryRequest } from '../actions/index'
import { connect } from 'react-redux';
import Category from '../model/Category';
import {UserContext} from '../contexts/UserContext'
import history from '../history'
type Props= {
    match: any,
    onGetCategoryByID: (code:number) => void,
    onClearItem: ()=> void,
    categoryItem: Category,
    onUpdateCategory: (category:Category) => void,
    onAddCategory: (category:Category) => void,
}

const CategoryDetailContainer = (props:Props) => {
    let code = props.match.params.code;
    useEffect(() => {
        if (code) {
            props.onGetCategoryByID(code)
        }
        else {
            props.onClearItem()
        }
    }, [code]);

    let { categoryItem } = props

    return (
        <CategoryDetail category={categoryItem} onUpdateCategory={props.onUpdateCategory} onAddCategory={props.onAddCategory} />
    );
}


const mapStatetoProps = (state: { categoryItem: Category; }) => {
    return {
        categoryItem: state.categoryItem
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        onGetCategoryByID: (id: number) => {
            dispatch(actGetCategoryByIDRequest(id))
        },
        onUpdateCategory: (category:Category) => {
            dispatch(actUpdateCategoryRequest(category))
        },
        onClearItem: () => {
            dispatch(actClearCategoryItem())
        },
        onAddCategory: (category:Category) => {
            dispatch(actAddCategoryRequest(category))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(CategoryDetailContainer);