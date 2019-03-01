import { Categories } from "./../../models/categoriesModel";
import { createAsyncAction } from "typesafe-actions";
import { http } from "src/servises/http";
import { Dispatch } from "redux";
import endpoints from "src/endpoints";
import { Category } from "src/models/categoryModel";
import { parse } from "sparkson";

const REQUEST = `request/CATEGORIES`;
const GET = `get/CATEGORIES`;
const FAILURE = `failure/CATEGORIES`;

export const getCategories = createAsyncAction(REQUEST, GET, FAILURE)<string, Categories, Error>();

export const fetchCategoriesPromise = () => {
    return (dispatch: Dispatch) => {
        http(endpoints.categories).then(json => dispatch(getCategories.success(parse(Categories, json))));
    };
};
