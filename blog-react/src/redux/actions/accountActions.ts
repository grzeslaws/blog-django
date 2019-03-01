import { http } from "src/servises/http";
import endpoints from "src/endpoints";
import { Account } from "src/models/accountModel";
import { Dispatch } from "redux";
import { parse } from "sparkson";
import { setAuthProgress } from "./registerActions";
import { createAsyncAction } from "typesafe-actions";

const REQUEST = `request/ACCOUNT`;
const GET = `get/ACCOUNT`;
const FAILURE = `failure/ACCOUNT`;

export const getAccount = createAsyncAction(REQUEST, GET, FAILURE)<string, Account | null, Error>();

export const getAccountPromise = () => {
    return (dispatch: Dispatch) => {
        dispatch(setAuthProgress.success(true));
        http(endpoints.account)
            .then(json => {
                dispatch(getAccount.success(parse(Account, json)));
                dispatch(setAuthProgress.success(false));
            })
            .catch(() => {
                dispatch(getAccount.success(null));
                dispatch(setAuthProgress.success(false));
            });
    };
};
