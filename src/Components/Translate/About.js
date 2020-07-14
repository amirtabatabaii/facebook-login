import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  return <>{t("menu-item2.label")}</>;
};

export default About;
