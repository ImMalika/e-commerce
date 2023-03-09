import Categs from "../../components/categs/categs";
import c from "./home.module.scss";
import Slider from "../../components/slider";
import CardProd from "../../components/cardProd/cardProd";
import { Link } from "react-router-dom";
import Img from "../../components/img/img";
import {useStorage} from '../../utils/store/store'
import { UseGetData } from '../../utils/hooks/getData';
import { useState } from "react";

const Home = () => {
  const [forCategId,setForCategId] = useState("")
  const language = useStorage(state => state.language)
  const { data: category, isLoading } = UseGetData(["category"], '/category?take=5');
  const { data: products } = UseGetData(["products"], '/products');
  const getProductsByCategory = UseGetData(['productsbycategory',forCategId],`products/category/${forCategId}`)
  return (
    <div className={c.home}>
      <div className={c.allcategs}>
        <button className={c.btn}>All Categories</button>
        {category?.data.map(item => {
          if (language == 'uz') {
            
            return (
              <div>
            
              <button onClick={(e)=>setForCategId(item?.id)}>
                  {item?.name_Uz}
              </button>
          </div>
            )
          }
          if (language == 'ru') {
            return (
              <Categs categTitle={item.name_Ru} />

            )
          }
          if (language == 'en') {
            return (
              <Categs categTitle={item.name_En} />

            )
          }
        })}
      </div>

      <Slider />
        <h1>{forCategId && 'sorted by ' + forCategId}</h1>
      <div className={c.allCards}>
      
        {
          forCategId ? (
          getProductsByCategory?.data?.data.map((item)=>{
            products?.data?.map(item=>{
              if (language == 'uz') {
                return(
                  <CardProd
                  imgUrl={'https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg'}
                  title={item.name_Uz}
                  desc={item.description_Uz}
                  price={item.price + " so'm"}
                  
                />
                )
              }
              if (language == 'ru') {
                return(
                  <CardProd
                  imgUrl={'https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg'}
                  title={item.name_Ru}
                  desc={item.description_Ru}
                  price={item.price + " сум"}
                  
                />
                )
              }
              if (language == 'en') {
                return(
                  <CardProd
                  imgUrl={'https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg'}
                  title={item.name_En}
                  desc={item.description_En}
                  price={item.price + " so'm"}
                  
                />
                )
              }
            })
          })
          ) : (
            products?.data?.map(item=>{
              if (language == 'uz') {
                return(
                  <CardProd
                  imgUrl={'https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg'}
                  title={item.name_Uz}
                  desc={item.description_Uz}
                  price={item.price + " so'm"}
                  
                />
                )
              }
              if (language == 'ru') {
                return(
                  <CardProd
                  imgUrl={'https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg'}
                  title={item.name_Ru}
                  desc={item.description_Ru}
                  price={item.price + " сум"}
                  
                />
                )
              }
              if (language == 'en') {
                return(
                  <CardProd
                  imgUrl={'https://cdn1.ozone.ru/s3/multimedia-v/6469500115.jpg'}
                  title={item.name_En}
                  desc={item.description_En}
                  price={item.price + " so'm"}
                  
                />
                )
              }
            })
          )
          
        }

      </div>
      <Img imgUrl={'https://topsto-crimea.ru/images/detailed/5334/1637931163.2886.jpg'} />
    </div>
  );
};

export { Home };
