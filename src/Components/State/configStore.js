import { createStore, combineReducers } from "redux";
import { navReducer } from "./Reducers/navReducer";
import { carouselReducer } from "./Reducers/carouselReducer";
import { ThaneShopReducer } from "./Reducers/ThaneShopReducer";
import { PuneShopReducer } from "./Reducers/PuneShopReducer";
import { MumbaiSuburbanShopReducer } from "./Reducers/MumbaiSuburbanShopReducer";
export const configStore = () => {
  const store = createStore(
    combineReducers({
      navReducer,
      carouselReducer,
      ThaneShopReducer,
      PuneShopReducer,
      MumbaiSuburbanShopReducer,
       
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
