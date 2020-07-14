import React from "react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t, i18n } = useTranslation();

  return <>{t("menu-item4.label")}</>;
};

export default ContactUs;
