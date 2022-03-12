// import logo from "./logo.svg";
import "./App.css";
import {Navigation} from "./Components/Navigation/Navigation"
import {MyCarousel} from "./Components/Body/MyCarousel"
import ThaneShop from "./Components/Body/ThaneShop";
import PuneShop from "./Components/Body/PuneShop";
import MumbaiSuburbanShop from "./Components/Body/MumbaiSuburbanShop";
import Landing from "./Components/Landing";
 
 
function App() {
  return (
    <div className="App">
     <Navigation/>
     <br /><br />
     <MyCarousel/>
     <ThaneShop/>
     <PuneShop/>
     <MumbaiSuburbanShop/>
     {/* <Landing/>     */}
    </div>
  );
}

export default App;
