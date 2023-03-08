import Categs from "../../components/categs/categs";
import c from "./home.module.scss";
import Slider from "../../components/slider";
import CardProd from "../../components/cardProd/cardProd";

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

      <div className={c.allCards}>
        <CardProd
          imgUrl={'https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg'}
          title={"Bismillah"}
          desc={"lorem ipsum"}
          price={100}

        />
        <CardProd
          imgUrl={'https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg'}
          title={"Bismillah"}
          desc={"lorem ipsum"}
          price={100}

        />
        <CardProd
          imgUrl={'https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg'}
          title={"Bismillah"}
          desc={"lorem ipsum"}
          price={100}

        />
        <CardProd
          imgUrl={'https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg'}
          title={"Bismillah"}
          desc={"lorem ipsum"}
          price={100}

        />
        <CardProd
          imgUrl={'https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg'}
          title={"Bismillah"}
          desc={"lorem ipsum"}
          price={100}

        />
        <CardProd
          imgUrl={'https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg'}
          title={"Bismillah"}
          desc={"lorem ipsum"}
          price={100}

        />
        <CardProd
          imgUrl={'https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg'}
          title={"Bismillah"}
          desc={"lorem ipsum"}
          price={100}

        />
        <CardProd
          imgUrl={'https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg'}
          title={"Bismillah"}
          desc={"lorem ipsum"}
          price={100}

        />
      </div>

    </div>
  );
};

export { Home };
