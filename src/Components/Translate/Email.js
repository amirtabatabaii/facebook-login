import React from "react";
import { useTranslation } from "react-i18next";

const Email = () => {
  const { t, i18n } = useTranslation();

  return <>{t("email.label")}</>;
};

export default Email;
