import { setAuthProgress } from "./registerActions";
import { parse } from "sparkson";
import { Login } from "./../../models/loginModel";
import { getAccount } from "./accountActions";
import { http } from "src/servises/http";
import endpoints from "src/endpoints";
import { Dispatch } from "redux";
import { Account } from "src/models/accountModel";
import { setTokenInLocalStorage, removeTokenFromLocalStorage } from "src/servises/storage";

export const loginPromise = (payload: Login) => {
    return (dispatch: Dispatch) => {
        dispatch(setAuthProgress.success(true));
        http(endpoints.login, payload).then(json => {
            setTokenInLocalStorage(json.token);
            dispatch(getAccount.success(parse(Account, json.user)));
        });
    };
};

export const logoutPromise = () => {
    return (dispatch: Dispatch) => {
        http(endpoints.logout, {}).then(r => {
            dispatch(getAccount.success(null));
            removeTokenFromLocalStorage();
        });
    };
};
