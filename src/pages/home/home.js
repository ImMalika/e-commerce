import Categs from "../../components/categs/categs";
import c from "./home.module.scss";
import Slider from "../../components/slider";

const Home = () => {
  return (
    <div className={c.home}>
      <div className={c.allcategs}>
        <button className={c.btn}>All Categories</button>
        <Categs categTitle={"Category"} />
        <Categs categTitle={"Category"} />
        <Categs categTitle={"Category"} />
        <Categs categTitle={"Category"} />
        <Categs categTitle={"Category"} />
        <Categs categTitle={"Category"} />
      </div>
      <Slider />
    </div>
  );
};

export { Home };
