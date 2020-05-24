//import PRODUCTS from '../../data/dummy-data';
import {ADD_BUISNESS,SET_BUISNESS,} from '../actions/businessAction';
//import CurrentUser_Login from '../../model/Currentuser';
const initialState = {
      BuisnessData: [],

};

export default(state = initialState, action) => {

    switch(action.type){

        
       case ADD_BUISNESS:
           return{
               ...state
           }
           case SET_BUISNESS:
               return{
                   ...state,BuisnessData:action.buisdata
               }
           
    }
    return state;
};

