import React from "react";
import { useTranslation } from "react-i18next";

const FbButton = () => {
  const { t, i18n } = useTranslation();

  return <>{t("facebookLogin.label")}</>;
};

export default FbButton;
