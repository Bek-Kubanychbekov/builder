import { ADD_FLOWER, REMOVE_FLOWER, SET_FLOWER } from "./types";
import axios from"../../../axios";
export const add = (flower) => ({
  type: ADD_FLOWER,
  flower: flower
});

export const remove = (flower) => ({
  type: REMOVE_FLOWER,
  flower: flower
});

export const set = (data) => ({
    type: SET_FLOWER,
    data: data
  });
  
  export const load = () => {
    return (dispatch) => axios
      .get('/default.json')
      .then(response => dispatch(set(response.data)));
  }