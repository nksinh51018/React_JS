import * as ActionType from "../constains/ActionType";
import callAPI from "../ulti/APICaller";
import Category from "../model/Category";

export const actSignInSuccess = (token: string, username: string) => {
  return {
    type: ActionType.SIGNIN_SUCCESS,
    token,
    username,
  };
};

export const actSignInFailure = () => {
  return {
    type: ActionType.SIGNIN_FAILURE,
  };
};

export const actUpdateUser = () => {
  return {
    type: ActionType.UPDATE_USER,
  };
};

export const actSignInRequest = (username: string, password: string) => {
  return (
    dispatch: (arg0: {
      type: string;
      token?: string;
      username?: string;
    }) => void
  ) => {
    callAPI(
      "auth",
      "POST",
      {
        username: username,
        password: password,
      },
      null
    )
      .then((res) => {
        if (res) {
          dispatch(
            actSignInSuccess(res.headers.authorization.slice(6), username)
          );
        }
      })
      .catch((e) => {
        console.log(e);
        dispatch(actSignInFailure());
      });
  };
};

export const actLogout = (message: string) => {
  return {
    type: ActionType.LOGOUT,
    message,
  };
};

export const actGetAllCategory = (
  pageNumber: number,
  categories: Category[]
) => {
  return {
    type: ActionType.GET_ALL_CATEGORY,
    categories,
    pageNumber,
  };
};

export const actGetAllCategoryRequest = (pageNumber: number) => {
  return (
    dispatch: (arg0: {
      type: string;
      categories: Category[];
      pageNumber: number;
    }) => void
  ) => {
    callAPI(
      `admin/categories?pageNumber=${pageNumber}`,
      "GET",
      null,
      null
    ).then((res) => {
      if (res) {
        dispatch(actGetAllCategory(pageNumber, res.data));
      }
    });
  };
};

export const actCountCategories = (total: number) => {
  return {
    type: ActionType.COUNT_ALL_CATEGORY,
    total,
  };
};

export const actCountCategoriesRequest = () => {
  return (dispatch: (arg0: { type: string; total: number }) => void) => {
    callAPI(`admin/categories/total`, "GET", null, null).then((res) => {
      if (res) {
        dispatch(actCountCategories(res.data));
      }
    });
  };
};

export const actGetCategoryByIDRequest = (id: number) => {
  return (dispatch: (arg0: { type: string; category: Category }) => void) => {
    callAPI(`admin/categories/${id}`, "GET", null, null).then((res) => {
      if (res) {
        dispatch(actGetCategoryByID(res.data));
      }
    });
  };
};

export const actGetCategoryByID = (category: Category) => {
  return {
    type: ActionType.GET_CATEGORY_BY_ID,
    category,
  };
};

export const actUpdateCategorySuccess = (category: Category) => {
  return {
    type: ActionType.UPDATE_CATEGORY_SUCCESS,
    category,
  };
};

export const actUpdateCategoryFailure = (message: string) => {
  return {
    type: ActionType.UPDATE_CATEGORY_FAILURE,
    message,
  };
};

export const actUpdateCategoryRequest = (category: Category) => {
  return (dispatch: (arg0: { type: string; category?: Category }) => void) => {
    const userJson = localStorage.getItem("USER");
    let user = userJson !== null ? JSON.parse(userJson) : null;
    if (user !== null) {
      callAPI(`admin/categories/${category.id}`, "PUT", category, {
        Authorization: "Bearer " + user.token,
      })
        .then((res) => {
          if (res) {
            console.log("1");
            dispatch(actUpdateCategorySuccess(res.data));
          } else {
            dispatch(actUpdateCategoryFailure("Error unknown"));
          }
        })
        .catch((e) => {
          let res = e.response;
          if (res.status === 401) {
            dispatch(actLogout("No have access"));
          } else {
            dispatch(actUpdateCategoryFailure(e.response.data));
          }
        });
    }
  };
};

export const actClearCategoryItem = () => {
  return {
    type: ActionType.CLEAR_CATEGORY_ITEM,
  };
};

export const actAddCategoryRequest = (category: Category) => {
  return (dispatch: (arg0: { type: string; category?: Category }) => void) => {
    const userJson = localStorage.getItem("USER");
    let user = userJson !== null ? JSON.parse(userJson) : null;
    if (user !== null) {
      category["productDTOs"] = [];
      callAPI(`admin/categories`, "POST", category, {
        Authorization: "Bearer " + user.token,
      })
        .then((res) => {
          console.log(res);
          if (res) {
            dispatch(actAddCategorySuccess(res.data));
          } else {
            dispatch(actAddCategoryFailure("Error unknown"));
          }
        })
        .catch((e) => {
          let res = e.response;
          if (res.status === 401) {
            dispatch(actLogout("No have access"));
          } else {
            dispatch(actAddCategoryFailure(e.response.data));
          }
        });
    } else {
      dispatch(actAddCategoryFailure("Not have access"));
    }
  };
};

export const actAddCategorySuccess = (category: Category) => {
  return {
    type: ActionType.ADD_CATEGORY_SUCCESS,
    category,
  };
};

export const actAddCategoryFailure = (message: string) => {
  return {
    type: ActionType.ADD_CATEGORY_FAILURE,
    message,
  };
};

export const actDeleteCategoryRequest = (id: number) => {
  return (dispatch: (arg0: { type: string; id?: number }) => void) => {
    const userJson = localStorage.getItem("USER");
    let user = userJson !== null ? JSON.parse(userJson) : null;
    if (user !== null) {
      callAPI(`admin/categories/${id}`, "DELETE", null, {
        Authorization: "Bearer " + user.token,
      })
        .then((res) => {
          dispatch(actDeleteCategorySuccess(id));
        })
        .catch((e) => {
          let res = e.response;
          if (res.status === 401) {
            dispatch(actLogout("No have access"));
          } else {
            dispatch(actDeleteCategoryFailure());
          }
        });
    }
  };
};

export const actDeleteCategorySuccess = (id: number) => {
  return {
    type: ActionType.DELETE_CATEGORY_SUCCESS,
    id,
  };
};

export const actDeleteCategoryFailure = () => {
  return {
    type: ActionType.DELETE_CATEGORY_FAILURE,
  };
};
