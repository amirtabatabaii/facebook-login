import React from "react";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t, i18n } = useTranslation();

  return <>{t("welcome.label")}</>;
};

export default Welcome;
