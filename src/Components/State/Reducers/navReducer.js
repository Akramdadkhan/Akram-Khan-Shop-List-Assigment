const initState = {
  navData: [
    { name: "Grocery", link: "https://www.dunzo.com/pune/grocery-stores"  },
    {
      name: "Butcher",
      link: "https://www.zomato.com/pune/the-butcher-kothrud"
       
    },
    { name: "Baker", link: "https://www.tripadvisor.in/Restaurants-g297654-zfg9901-Pune_Pune_District_Maharashtra.html" },
    { name: "Chemist", link: "https://www.medicineindia.org/pharmacies-chemists-drugstores-in-city/836/pune" },
    { name: "Stationary Shop", link: "https://lbb.in/pune/best-stationery-stores-in-pune/"  },
  ],
};
export const navReducer = (state = initState, action) => {
  // switch (action.type) {
  //   case "ADD_NAV_LINK":
  //     return {
  //       ...state,
  //       navData: [...state.navData, action.navData],
  //     };
  //   default:
  //     return state;
  // }
  if (action.type === "ADD_NAV_LINK") {
    return {
      ...state,
      navData: [...state.navData, action.navData],
    };
  } else return state;
};
