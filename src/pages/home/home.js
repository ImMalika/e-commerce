import Categs from "../../components/categs/categs";
import c from "./home.module.scss";

const Home = () => {
  return (
    <div className={c.home}>
      <div className={c.allcategs}>
      <button className={c.btn}>All Categories</button>
      <Categs categTitle={'Category'}/>
      <Categs categTitle={'Category'}/>
      <Categs categTitle={'Category'}/>
      <Categs categTitle={'Category'}/>
      <Categs categTitle={'Category'}/>
      <Categs categTitle={'Category'}/></div>
    </div>
  )
}

export { Home } 
