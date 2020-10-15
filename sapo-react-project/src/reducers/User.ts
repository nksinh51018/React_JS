import * as ActionType from "../constains/ActionType";
import { toastMessageError } from "../ulti/ToastMessage";
import history from "./../history";
let localData = localStorage.getItem("USER");
let user1 = JSON.parse(localData ? localData : "{}");
var initState = user1
  ? {
      token: user1.token,
      username: user1.username,
    }
  : {
      token: "",
      username: "",
    };

const user = (
  state = initState,
  action: { type?: string; token?: string; username?: string; message?: string }
) => {
  switch (action.type) {
    case ActionType.SIGNIN_SUCCESS: {
      let { token, username } = action;
      state.token = token;
      state.username = username;
      localStorage.setItem("USER", JSON.stringify(state));
      return { ...state };
    }
    case ActionType.SIGNIN_FAILURE: {
      toastMessageError("Đăng nhập thất bại");
      return { ...state };
    }
    case ActionType.LOGOUT: {
      state.username = "";
      state.token = "";
      if (action.message) {
        toastMessageError(action.message);
      }
      localStorage.setItem("USER", JSON.stringify(state));
      history.push("/signIn");
      return { ...state };
    }
    case ActionType.UPDATE_USER: {
      let localData = localStorage.getItem("USER");
      let user1 = JSON.parse(localData ? localData : "{}");
      state.username = user1.username;
      state.token = user1.token
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default user;
