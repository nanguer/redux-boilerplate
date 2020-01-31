import axios from "axios";
import { ADD_DATA, REMOVE_DATA, POPULATE_DATA } from "./types";

export const add = data => ({ type: ADD_DATA, data });
export const remove = data => ({ type: REMOVE_DATA, data });
export const populate = data => ({ type: POPULATE_DATA, data });
