import React from "react";
import Button from "../../components/button/button";
import c from "./korzinka.module.scss";
import { useStorage } from "./../../utils/store/store";
import { Table } from "antd";
const Korzinka = () => {
  const language = useStorage((state) => state.language);
  const korzina = useStorage((state) => state.korzina);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "Category",
    },
    {
      title: "Img",
      dataIndex: "img",
      key: "img",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <a>Delete</a>,
    },
  ];
  return (
    <div className={c.korzinka}>
      <div className={c.container}>
        <h1>
          {language == "ru" && "Корзина"}
          {language != "ru" && "Korinza"}
        </h1>
        <div className={c.wrapper}>
          {korzina.length ? (
            <Table
              columns={columns}
              expandable={{
                expandedRowRender: (record) => (
                  <p
                    style={{
                      margin: 0,
                    }}
                  >
                    {record.description}
                  </p>
                ),
                rowExpandable: (record) => record.name !== "Not Expandable",
              }}
              dataSource={korzina.map((item, index) => ({
                key: index + 1,
                name: (
                  <>
                    {language == "uz" &&
                      korzina.find((_, idx) => idx == index)?.name_Uz}
                    {language == "ru" &&
                      korzina.find((_, idx) => idx == index)?.name_Ru}
                    {language == "en" &&
                      korzina.find((_, idx) => idx == index)?.name_En}
                  </>
                ),
                category: (
                  <>
                    {language == "uz" &&
                      korzina.find((_, idx) => idx == index)?.description_Uz}
                    {language == "ru" &&
                      korzina.find((_, idx) => idx == index)?.description_Ru}
                    {language == "en" &&
                      korzina.find((_, idx) => idx == index)?.description_En}
                  </>
                ),
                description: (
                  <>
                    {language == "uz" &&
                      korzina.find((_, idx) => idx == index)?.Category?.name_Uz}
                    {language == "ru" &&
                      korzina.find((_, idx) => idx == index)?.Category?.name_Ru}
                    {language == "en" &&
                      korzina.find((_, idx) => idx == index)?.Category?.name_En}
                  </>
                ),
                img: (
                  <img style={{
                    width : '100px',
                    height : '100px',
                  }}
                    src={`http://3.19.30.204/upload/${
                      korzina.find((_, idx) => idx == index)?.photo
                        ?.path
                    }`}
                  ></img>
                ),
              }))}
            />
          ) : (
            <>
              {language == "uz" && `korzinada hech narsa yo'q`}
              {language == "ru" && `ваша корзина пустая`}
              {language == "en" && `your cart is empty`}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Korzinka;
