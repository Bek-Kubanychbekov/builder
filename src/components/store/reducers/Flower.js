import { REMOVE_FLOWER,ADD_FLOWER, SET_FLOWER } from "../actions/types";

const initialState ={
    flowers:{
        Dog: 1,
        Cat:1,
        Turtle:1,
        Reccoon: 1,
        Hamster:1, 
        Chameleon: 1,
    },
    price:342,
};

const prices = {
    Dog: 80,
    Cat:20,
    Turtle:60,
    Reccoon: 67,
    Hamster:45,  
    Chameleon: 70,
  };
  

const Flower=(state=initialState,action)=>{
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
   export default Flower;