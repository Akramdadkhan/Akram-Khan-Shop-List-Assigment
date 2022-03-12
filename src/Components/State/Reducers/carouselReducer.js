const initialState = {
  myCarousel: [
    {
      id: 1,
      carouselImg: `https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/cookie-aisle-grocery-store.jpg`,
      carouselTitle: `Grocery`,
      carouselDescription: `Grocery Items means supply items, non-food items, foodstuffs and drinks including, without limitation, any or all of the following: (i) dairy products (including without limitation milk, yogurt, ice cream, cheese and/or any other items commonly found in a grocery store and/or supermarket dairy section), (ii) produce`,
    },
    {
      id: 2,
      carouselImg: `https://ichef.bbci.co.uk/news/640/cpsprodpb/E7F0/production/_120867395_butchers5.jpg`,
      carouselTitle: `Butcher`,
      carouselDescription: `A butcher is a person who may slaughter animals, dress their flesh, sell their meat, or participate within any combination of these three tasks.`,
    },
    {
      id: 3,
      carouselImg: `https://www.baker-street.co.in/images/slide5.jpg`,
      carouselTitle: `Baker`,
      carouselDescription: `Bakers are food workers who create breads and other baked goods, such as cookies, cakes, pies and pastries. You'll be responsible for preparing and measuring ingredients, properly cooking or baking foods, and decorating sweet baked goods`,
    },
    {
      id:4 ,
      carouselImg: `https://omsi.in/wp-content/uploads/2018/04/Online-Medical-Store-Baranagar.jpg`,
      carouselTitle: `Chemist`,
      carouselDescription: `a shop where medicinal drugs are dispensed and sold, and in which toiletries and other medical goods can be purchased.`,
    },
    {
      id:5 ,
      carouselImg: `https://www.effearredamenti.com/wp-content/uploads/2017/01/arredamenti-e-allestimenti-cartolerie-050.jpg`,
      carouselTitle: `Stationery Shop`,
      carouselDescription: `This includes: paper, envelopes, pens, pencils, notepads, note cards, etc. Stores that sell these products are often called stationery stores.`,
    },
  ],
};
export const carouselReducer = (state = initialState, action) => {
  // By usning Swicth case
  // switch (action.type) {
  //   case "ADD_CAROUSEL":
  //     return {
  //       ...state,
  //       myCarousel: [...state.myCarousel, action.data],
  //     };
  //   default:
  //     return state;
  // }
  // By usning if else
  console.log(action);
  if (action.type === "ADD_CAROUSEL") {
    return {
      ...state,
      myCarousel: [...state.myCarousel, action.data],
    };
  } else {
    return state;
  }
};
