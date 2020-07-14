import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  return <>{t("menu-item1.label")}</>;
};

export default Home;
