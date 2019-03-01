import { http } from "src/servises/http";
import endpoints from "src/endpoints";
import { Account } from "src/models/accountModel";
import { createAsyncAction } from "typesafe-actions";
import { Dispatch } from "redux";
import { parse } from "sparkson";
import { Register } from "src/models/registerModel";
import { getAccount } from "./accountActions";
import { setTokenInLocalStorage } from "src/servises/storage";

const REQUEST = `request/ACCOUNT`;
const FAILURE = `failure/ACCOUNT`;
const AUTH_IN_PROGRESS = `setAuthProgress/ACCOUNT`;

export const setAuthProgress = createAsyncAction(REQUEST, AUTH_IN_PROGRESS, FAILURE)<string, boolean, Error>();

export const registerPromise = (payload: Register) => {
    return (dispatch: Dispatch) => {
        http(endpoints.register, payload)
            .then(json => {
                setTokenInLocalStorage(json.token);
                dispatch(getAccount.success(parse(Account, json.user)));
            })
            .catch(() => dispatch(setAuthProgress.success(false)));
    };
};
