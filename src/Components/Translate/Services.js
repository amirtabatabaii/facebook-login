import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation();

  return <>{t("menu-item3.label")}</>;
};

export default Services;
