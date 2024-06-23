import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, ChangeEvent, FormEvent } from "react";
import { useTranslation } from "next-i18next";
import styles from "./bookATable.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import contactTremendo from "../../assets/contacttremendo.jpeg";

const NavFooter = dynamic(() => import("@/components/NavFooter/NavFooter"), {
  ssr: false,
});
const HamburgerMenu = dynamic(() => import("@/components/HamburgerMenu/HamburgerMenu"));
const FooterMenu = dynamic(() => import("@/components/FooterMenu/FooterMenu"));

interface FormData {
  date: string;
  time: string;
  pax: string;
  name: string;
  email: string;
  comments: string;
}

interface FormErrors {
  date: string;
  time: string;
  pax: string;
  name: string;
  email: string;
  comments: string;
}

export default function BookATable() {
  const { t } = useTranslation("common");
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    date: "",
    time: "",
    pax: "",
    name: "",
    email: "",
    comments: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    date: "",
    time: "",
    pax: "",
    name: "",
    email: "",
    comments: ""
  });
  const [reservationConfirmed, setReservationConfirmed] = useState<boolean>(false);

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [key]: "" }));
  };

  const validateStep = (): boolean => {
    const errors: Partial<FormErrors> = {};
    switch(step) {
      case 1:
        if (!formData.date) errors.date = t("pleaseFillDate");
        break;
      case 2:
        if (!formData.time) errors.time = t("pleaseFillTime");
        break;
      case 3:
        if (!formData.pax) errors.pax = t("pleaseFillPax");
        break;
      case 4:
        if (!formData.name) errors.name = t("pleaseFillName");
        if (!formData.email) errors.email = t("pleaseFillEmail");
        break;
    }

    setFormErrors(errors as FormErrors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep() && step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validateStep()) return;
    console.log(formData);
    setReservationConfirmed(true);  // Set the confirmation state to true to show the message
  };

  return (
    <>
      <HamburgerMenu />
      <main className="min-h-screen relative overflow-hidden bg-white">
        <section className="flex flex-col lg:flex-row w-full h-full min-h-screen bg-white">
          <div
            className="w-full lg:w-1/2 p-12 flex-col justify-between items-center min-h-screen h-full hidden lg:flex"
            style={{
              backgroundImage: `url(${contactTremendo.src || contactTremendo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <Link href="/" className="font-semibold cursor-pointer text-white">
              {t("pageTitle")}
            </Link>
            <div className="text-center">
              <h2 className="font-dancing text-[60px] leading-none text-white" style={{ color: "#00b55e" }}>
                {t("book")}
              </h2>
            </div>
            <div className="hidden lg:block">
            <FooterMenu />
              <NavFooter />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex-col justify-center items-center lg:flex lg:flex-col">
            {reservationConfirmed ? (
              <div className={styles.confirmationMessage}>
                <h2>{t("reservationConfirmed")}</h2>
                <button className={styles.button} onClick={() => window.location.reload()}>
                  {t("makeAnotherReservation")}
                </button>
              </div>
            ) : (
              <div className={`${styles.stickyContainer} ${styles.container}`}>
                <ul className={styles.stepIndicator}>
                  {[1, 2, 3, 4].map((num) => (
                    <li key={num} className={step >= num ? styles.active : ""}>{num}</li>
                  ))}
                </ul>
                <div>{renderStepContent(step)}</div>
              </div>
            )}
          </div>
        </section>
      </main>
      <FooterMenu />
      <NavFooter />
    </>
  );

  function renderStepContent(step: number) {
    const errorDisplay = (error: string) => error && <div className={styles.error}>{error}</div>;
    switch (step) {
      case 1:
        return (
          <div className={styles.inputGroup}>
            <label>{t("selectDate")}</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
            {errorDisplay(formErrors.date)}
            <button className={styles.button} onClick={nextStep}>
              {t("next")}
            </button>
          </div>
        );
      case 2:
        return (
          <div className={styles.inputGroup}>
            <label>{t("selectTime")}</label>
            <input
              type="time"
              value={formData.time}
              onChange={(e) => handleChange("time", e.target.value)}
            />
            {errorDisplay(formErrors.time)}
            <div className={styles.buttonGroup}>
              <button className={`${styles.button} ${styles.backButton}`} onClick={prevStep}>
                {t("back")}
              </button>
              <button className={styles.button} onClick={nextStep}>
                {t("next")}
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={styles.inputGroup}>
            <label>{t("selectPax")}</label>
            <input
              type="number"
              value={formData.pax}
              onChange={(e) => handleChange("pax", e.target.value)}
            />
            {errorDisplay(formErrors.pax)}
            <div className={styles.buttonGroup}>
              <button className={`${styles.button} ${styles.backButton}`} onClick={prevStep}>
                {t("back")}
              </button>
              <button className={styles.button} onClick={nextStep}>
                {t("next")}
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <form onSubmit={handleSubmit} className={styles.reservationForm}>
            <label>{t("name")}</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            {errorDisplay(formErrors.name)}
            <label>{t("email")}</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {errorDisplay(formErrors.email)}
            <label>{t("comments")}</label>
            <textarea
              value={formData.comments}
              onChange={(e) => handleChange("comments", e.target.value)}
            />
            {errorDisplay(formErrors.comments)}
            <div className={styles.buttonGroup}>
              <button className={`${styles.button} ${styles.backButton}`} onClick={prevStep}>
                {t("back")}
              </button>
              <button type="submit" className={styles.button}>
                {t("submit")}
              </button>
            </div>
          </form>
        );
      default:
        return null;
    }
  }
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
