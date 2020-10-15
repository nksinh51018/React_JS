import React, { useEffect,useContext } from 'react'
import CategoryList from '../components/CategoryList/CategoryList'
import { connect } from 'react-redux'
import { actGetAllCategoryRequest, actCountCategoriesRequest, actDeleteCategoryRequest } from '../actions/index'
import {UserContext} from '../contexts/UserContext'
import Category from '../model/Category'

type Props = {
    categoryList: {
        categories: Category[],
        pageNumber: number,
        total:number
    },
    match: any,
    onGetAllCategory: (pageNumber: number) => void,
    onCountCategories: ()=> void,
    onDeleteCategory: (id:number)=> void
}
const CategoryListContainer = (props:Props) => {

    let { users } = useContext(UserContext);
    let { categoryList, match } = props;
    useEffect(() => {
        let { categoryList } = props;
        if (categoryList.categories.length < 1) {
            props.onGetAllCategory(1)
        }
        if (categoryList.total === 0) {
            props.onCountCategories();
        }
    }, [props]);

    const changePage = (pageNumber:number) => {
        props.onGetAllCategory(pageNumber)
    }

    return (
        <CategoryList categoryList={categoryList}
            match={match}
            changePage={(pageNumber) => { changePage(pageNumber) }}
            onDeleteCategory={props.onDeleteCategory}
        />
    );
}

const mapStateToProps = (state: { categoryList: any }) => {
    return {
        categoryList: state.categoryList,
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        onGetAllCategory: (pageNumber: number) => {
            dispatch(actGetAllCategoryRequest(pageNumber))
        },
        onCountCategories: () => {
            dispatch(actCountCategoriesRequest())
        },
        onDeleteCategory: (id:number) => {
            dispatch(actDeleteCategoryRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListContainer)