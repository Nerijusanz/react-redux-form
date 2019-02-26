/*
import { 
  USERBOOK_BOOKS_STATUS_YES,
  USERBOOK_BOOKS_STATUS_NO,
} from '../actions/types';
*/

const initialState = {
  users: []
};

export default function user(state = initialState, action) {
  switch (action.type) {
    /*
      case USERBOOK_BOOKS_STATUS_YES:
          return {
              ...state,
              books: action.payload.books
          }
      
      case USERBOOK_BOOKS_STATUS_NO:
          return{
              ...state,
              books:[]
          }
      */
    default:
      return state;
  }
}
