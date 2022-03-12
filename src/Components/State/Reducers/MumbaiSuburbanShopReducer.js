export const MumbaiSuburbanShopReducer = (state = initState, action) => {
    if (action.type === "ADD_SHOP") {
      return {
        ...state,
        ShopData: [...state.ShopData, action.data],
      };
    } else return state;
  };
  
  const initState = {
    ShopData: [
      {
        name: "GROCERY",
        image:" https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&w=1000&q=80",
        area: "Mumbai Suburban,Road No 17,Near Indian Garden",
        category:"Category-Food",
        open:" 10:AM ",
        close:" 8:PM"
      },
      {
        name: "BUTCHER",
        image:"https://us.123rf.com/450wm/pikepicture/pikepicture1709/pikepicture170900077/85464856-butcher-character-vector-classic-professional-butcher-man-with-knife-for-steak-meat-market-storeroom.jpg?ver=6",
        area: "Mumbai Suburban,Road No 22,Near Ryzon Mall",
        category:"Category-Food",
        open:" 9:AM ",
        close:" 4:PM"
         
      },
      {
        name: "BAKER",
        image:"https://assets.architecturaldigest.in/photos/60084fd13829163dc3ab540b/16:9/w_2560%2Cc_limit/Mumbai-bakery-breads-1366x768.jpg",
        area: "Mumbai Suburban,Road No 01,Near Trends Mall",
        category:"Category-Food",
        open:" 5:AM ",
        close:" 7:PM"
        
      },
      {
        name: "CHEMIST",
        image:"https://content3.jdmagicbox.com/comp/hyderabad/x1/040pxx40.xx40.171117132054.d8x1/catalogue/shakthi-generic-medical-shop-beeramguda-hyderabad-chemists-163dux7p0c.jpg?clr=333333",
        area: "Mumbai Suburban,Road No 05,Near Golden Hospital ",
        category:"Category-Health",
        open:" 10:AM ",
        close:"11:PM"
         
      },
      {
        name: "STATIONARY SHOP",
        image:"https://res.cloudinary.com/purnesh/image/upload/f_auto/v1562221648/anand-stationery.png",
        area: "Mumbai Suburban,Road No 17,Near Pipe Road",
        category:"Category-Store",
        open:" 10:AM ",
        close:" 8:PM"
        
      },
      {
        name: "Store",
        image:"https://content3.jdmagicbox.com/comp/gurgaon/07/011pk038507/catalogue/anand-stationery-shop--sector-14-gurgaon-stationery-shops-gu9ohghzqp.jpg?clr=333333",
        area: "Mumbai Suburban,Road No 11,Near Main Road",
        category:"Category-Products",
        open:" 10:AM ",
        close:" 8:PM"
         
      },
      
    ],
  };
  