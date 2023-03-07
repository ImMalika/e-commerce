import c from "./home.module.scss";
import Slider from "../../components/slider";
// import ProductCard from "../../components/card";
const Home = () => {
  return (
    <div className={c.home}>
      <Slider/>
      
      {/* <ProductCard></ProductCard> */}
    </div>
  )
}

export {Home} 
