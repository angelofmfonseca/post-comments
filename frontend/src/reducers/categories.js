import { RETRIEVE_CAT } from '../actions/types'

export function categories(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_CAT:
      const cat_obj = {};
      for (let category of action.categories) {
        cat_obj[category.name] = category;
      }
      return cat_obj
    default:
      return state
  }
}
export default categories
