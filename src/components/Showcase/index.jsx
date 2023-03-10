import styles from "./index.module.scss";
import { AppContext } from "../../Context/AppContext";
import { useContext, useRef, useState } from "react";
import { UseGetData } from "./../../utils/hooks/getData";
import { BiAlignLeft } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";
import { useStorage } from "./../../utils/store/store";
import { ShowIcons } from "./../../utils/ShowIcons";
import nouts from "../../media/nouts.jpg";
import { Button } from "@mui/material";
export default function Showcase() {
  const getCategory = UseGetData(["getCategory"], `/category`);
  const context = useContext(AppContext);
  const menuRef = useRef();
  const [id, setId] = useState(1);
  const language = useStorage((state) => state.language);
  console.log(getCategory);
  const bis = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];
  const texts = [
    {
      text_Uz: "Ijodkorlikning yangi darajasi!",
      text_Ru: "Новый уровень креативности!",
      text_En: "New level of creativity!",
      description_Ru:
        "Наши продукты являются очень красивыми и креативными поэтому мы сотрудничаем это с отличными спонсорами которые уже 10 лет занимают свое место в местом рынке !",
      description_Uz:
        "Mahsulotlarimiz juda chiroyli va ijodiy, shuning uchun biz 10 yildan beri bozorda o'z o'rnini egallab kelayotgan ajoyib homiylar bilan hamkorlik qilamiz!",
      description_En:
        "Our products are very beautiful and creative, so we cooperate with excellent sponsors who have been occupying their place in the market for 10 years!",
    },
    {
      text_Uz: "Hayotingizni yangilang - bizni tanlang!",
      text_Ru: "Обновите свою жизнь – выберите нас!",
      text_En: "Renew your life - choose us!",
      description_Ru:
        "Ученые заявили что любая красота в вашем доме повлияет на вашу жизнь. Выберите нас и ваша жизнь станет лучше !",
      description_Uz:
        "Olimlar sizning uyingizdagi har qanday go'zallik hayotingizga ta'sir qilishini ta'kidladilar. Bizni tanlang va hayotingiz yaxshiroq bo'ladi!",
      description_En:
        "Scientists have stated that any beauty in your home will affect your life. Choose us and your life will be better!",
    },
    {
      text_Uz: "Har bir kichik narsada go'zallik!",
      text_Ru: "Красота в каждой мелочи!",
      text_En: "Beauty in every little thing!",
      description_Ru:
        "Может и мелочь зато красивый . Ваша жизнь станет ярче после приобретени красивый вещей !",
      description_Uz:
        "Ehtimol, arzimas narsa, lekin chiroyli. Chiroyli narsalarni sotib olganingizdan keyin hayotingiz yorqinroq bo'ladi!",
      description_En:
        "Maybe a trifle, but beautiful. Your life will become brighter after purchasing beautiful things!",
    },
    {
      text_Uz: "Uyingiz uchun qulaylik va qulaylik!",
      text_Ru: " Комфорт и уют для вашего дома!",
      text_En: "Comfort and coziness for your home!",
      description_Ru:
        "Мы хотим только комфорт и уют для вашего дома ! Мы радуем людей прятижении 5 лет . ",
      description_Uz:
        "Biz sizning uyingizga faqat qulaylik va qulaylik tilaymiz! Biz 5 yildan beri odamlarni xursand qilmoqdamiz.",
      description_En:
        "We want only comfort and coziness for your home! We have been making people happy for 5 years.",
    },
  ];
  console.log(id);
  return (
    <div className={styles.Showcase}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            {getCategory?.data?.data?.map((item, index) => (
              <span>
                <p>
                  <BiAlignLeft></BiAlignLeft>
                  {language == "uz" && item.name_Uz}
                  {language == "ru" && item.name_Ru}
                  {language == "en" && item.name_En}
                </p>
                <p>
                  <AiOutlineRight></AiOutlineRight>
                </p>
              </span>
            ))}
          </div>
          <div className={styles.banner}>
            <div className={styles.item1}>
              <div className={styles.Buttons}>
                <Button
                  onClick={() => setId((prev) => (prev >= 1 ? prev - 1 : 4))}
                >
                  {" "}
                  {"<"}{" "}
                </Button>
                <Button
                  onClick={() => setId((prev) => (prev < 5 ? prev + 1 : 1))}
                >
                  {" "}
                  {">"}{" "}
                </Button>
              </div>
              <img src={nouts} alt="" />
              <div className={styles.div}>
                {id ? (
                  <>
                    {language == "en" && (
                      <>
                        {id > 1 ? (
                          <>
                            <h1>{texts?.[id - 1]?.text_En}</h1>
                            <p>{texts?.[id - 1]?.description_En}</p>
                          </>
                        ) : (
                          <>
                            <h1>{texts?.[3]?.text_En}</h1>
                            <p>{texts?.[3]?.description_Uz}</p>
                          </>
                        )}
                      </>
                    )}
                    {language == "ru" && (
                      <>
                        {id > 1 ? (
                          <>
                            <h1>{texts?.[id - 1]?.text_Ru}</h1>
                            <p>{texts?.[id - 1]?.description_Ru}</p>
                          </>
                        ) : (
                          <>
                            <h1>{texts?.[3]?.text_Ru}</h1>
                            <p>{texts?.[3]?.description_Ru}</p>
                          </>
                        )}
                      </>
                    )}
                    {language == "uz" && (
                      <>
                        {id > 1 ? (
                          <>
                            <h1>{texts?.[id - 1]?.text_Uz}</h1>
                            <p>{texts?.[id - 1]?.description_Uz}</p>
                          </>
                        ) : (
                          <>
                            <h1>{texts?.[3]?.text_Uz}</h1>
                            <p>{texts?.[3]?.description_Uz}</p>
                          </>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {language == "uz" && (
                      <>
                        <h1>{texts?.[0]?.text_Uz}</h1>
                        <p>{texts?.[0]?.description_Uz}</p>
                      </>
                    )}
                    {language == "ru" && (
                      <>
                        <h1>{texts?.[0]?.text_Ru}</h1>
                        <p>{texts?.[0]?.description_Ru}</p>
                      </>
                    )}
                    {language == "en" && (
                      <>
                        <h1>{texts?.[0]?.text_En}</h1>
                        <p>{texts?.[0]?.description_En}</p>
                      </>
                    )}
                  </>
                )}
              </div>
              <div className={styles.bis}>
                {bis.map((item) => (
                  <b
                    className={item.id == id && styles.activeB}
                    onClick={() => setId(item.id)}
                  ></b>
                ))}
              </div>
            </div>
            <div className={styles.item2}>
              {ShowIcons.map((item) => (
                <div className={styles.iconImgs}>
                  <img src={item.img} alt="" />
                  {
                    language == 'uz' && <p>{item.text_Uz}</p>
                  }
                  {
                    language == 'ru' && <p>{item.text_Ru}</p>
                  }
                  {
                    language == 'en' && <p>{item.text_En}</p>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
