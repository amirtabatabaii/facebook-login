import React from "react";
import { useTranslation } from "react-i18next";

const Detail = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h1 className='App-title'>{t("facebook.label")}</h1>
      <p>{t("note.label")}</p>
    </>
  );
};

export default Detail;
