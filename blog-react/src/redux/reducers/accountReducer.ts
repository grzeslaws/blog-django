import { Account } from "../../models/accountModel";
import { ActionType, getType } from "typesafe-actions";
import { combineReducers } from "redux";
import * as account from "../actions/accountActions";
import * as register from "../actions/registerActions";

export type AccountAction = ActionType<typeof account>;
export type RegisterAction = ActionType<typeof register>;

export type AccountState = Readonly<{
    account: Account | null;
    authInProgress: boolean;
}>;

export const accountReducer = combineReducers<AccountState, AccountAction | RegisterAction>({
    account: (state = null, action) => {
        switch (action.type) {
            case getType(account.getAccount.success):
                return action.payload;
            default:
                return state;
        }
    },
    authInProgress: (state = true, action) => {
        switch (action.type) {
            case getType(register.setAuthProgress.success):
                return action.payload;
            default:
                return state;
        }
    },
});
