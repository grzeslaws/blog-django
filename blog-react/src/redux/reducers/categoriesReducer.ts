import { Category } from "./../../models/categoryModel";
import { ActionType, getType } from "typesafe-actions";

import * as categories from "../actions/categoriesActions";
import { Categories } from 'src/models/categoriesModel';

export type CategoriesAction = ActionType<typeof categories>;

export type CategoriesState = Readonly<Categories> | null;

export const categoriesReducer = (state: CategoriesState = null, action: CategoriesAction): CategoriesState => {
    switch (action.type) {
        case getType(categories.getCategories.success):
            return action.payload;
        default:
            return state;
    }
};
