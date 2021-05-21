import { REMOVE_FLOWER,ADD_FLOWER, SET_FLOWER } from "../actions/types";

const initialState ={
    flowers:{
        carnation : 1,
        hyacinth :1,
        lily :1,
        orchid : 1,
        rose :1, 
        tulip : 1,
    },
    price:1000,
};

const prices = {
    rose : 100,
    lily :200,
    tulip :150,
    orchid : 130,
    carnation :250,  
    hyacinth : 170,
  };
  

const flowers=(state=initialState,action)=>{
    const newState={...state};
    switch (action.type) {
        case ADD_FLOWER:
            newState.flowers[action.flower]++; 
            newState.price+=prices[action.flower]
            break;
            case REMOVE_FLOWER:
                newState.flowers[action.flower]--; 
                newState.price-=prices[action.flower]
                break;
                case SET_FLOWER:
                    return { ...action.data };
        default:
            break;
    }
        return newState ;
    }
   export default flowers;