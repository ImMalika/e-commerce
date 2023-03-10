import Categs from "../../components/categs/categs";
import c from "./home.module.scss";
import Slider from "../../components/slider";
import CardProd from "../../components/cardProd/cardProd";
import { Link, useParams } from "react-router-dom";
import Img from "../../components/img/img";
import { useStorage } from "../../utils/store/store";
import { UseGetData } from "../../utils/hooks/getData";
import { useState } from "react";
import Showcase from "./../../components/Showcase/index";
import line from "../../media/Line.png";
const Home = () => {
  const { id } = useParams();
  const [forCategId, setForCategId] = useState("");
  const language = useStorage((state) => state.language);
  const { data: category, isLoading } = UseGetData(
    ["category"],
    "/category?take=5"
  );
  const getSuviner = UseGetData(["getsuviner"], "products/");
  const { data: products } = UseGetData(["products"], "/products?take=10");
  const getProductsByCategory = UseGetData(
    ["productsbycategory", forCategId],
    `products/category/${forCategId}`
  );
  console.log(products?.data);
  return (
    <div className={c.home}>
      <div className={c.allcategs}>
        <Showcase />
      </div>
      <div className={c.textInfoCard}>
        {language == "uz" && <h2>eng yuqori sotuvlar</h2>}
        {language == "ru" && <h2>топ продаж</h2>}
        {language == "en" && <h2>top sales</h2>}
      </div>
      <div className={c.allCards}>
        {products?.data?.map((item) => {
          if (language == "uz") {
            return (
              <Link to={`/single/{id}`}>
                <CardProd
                  imgUrl={`http://3.19.30.204/upload/${item?.photo?.path}`}
                  title={item.name_Uz}
                  desc={item.description_Uz}
                  price={item.price + " so'm"}
                />
              </Link>
            );
          }
          if (language == "ru") {
            return (
              <Link to={`/single/{id}`}>
                <CardProd
                  imgUrl={`http://3.19.30.204/upload/${item?.photo?.path}`}
                  title={item.name_Ru}
                  desc={item.description_Ru}
                  price={item.price + " сум"}
                />
              </Link>
            );
          }
          if (language == "en") {
            return (
              <Link to={`/single/{id}`}>
                <CardProd
                  imgUrl={`http://3.19.30.204/upload/${item?.photo?.path}`}
                  title={item.name_En}
                  desc={item.description_En}
                  price={item.price + " so'm"}
                />
              </Link>
            );
          }
        })}
      </div>
      <div className={c.sivinerZone}>
        <div className={c.container}>
          <div className={c.text}>
            <h2>
              {language == "uz" && "suvenir zonasi"}
              {language == "ru" && "зона сувенеров"}
              {language == "en" && "souvenir zone"}
            </h2>
            <img src={line} alt="" />
          </div>
          <div className={c.wrapper}>
            {getSuviner?.data?.data
              .filter(
                (item) =>
                  item.categoryId == "23c2ff93-d674-4fd5-9857-b2f76fb1edcd"
              )
              .map((item) => (
                <CardProd
                  imgUrl={`http://3.19.30.204/upload/${item?.photo?.path}`}
                  title={item.name_Uz}
                  desc={item.description_Uz}
                  price={item.price + " so'm"}
                />
              )).splice(0, 4)}
          </div>
        </div>
      </div>
      <Img
        imgUrl={
          "https://topsto-crimea.ru/images/detailed/5334/1637931163.2886.jpg"
        }
      />
    </div>
  );
};

export { Home };
