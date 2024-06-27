import dynamic from "next/dynamic";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Button, Container, Typography, Box } from "@mui/material";
import styles from "./bookATable.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import contactTremendo from "../../assets/contacttremendo.jpeg";
import FormSteps from "@/components/BookComponents/FormSteps";
import FormFields from "@/components/BookComponents/FormFields";

const NavFooter = dynamic(() => import("@/components/NavFooter/NavFooter"), { ssr: false });
const HamburgerMenu = dynamic(() => import("@/components/HamburgerMenu/HamburgerMenu"));

interface FormData {
  date: string;
  time: string;
  pax: string;
  name: string;
  email: string;
  comments: string;
}

const steps = [
  "selectDateTitle",
  "selectTimeTitle",
  "selectPaxTitle",
  "selectDetailsTitle",
];

export default function BookATable() {
  const { t } = useTranslation("common");
  const [step, setStep] = useState<number>(0);
  const [reservationConfirmed, setReservationConfirmed] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    date: "",
    time: "",
    pax: "",
    name: "",
    email: "",
    comments: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const handleNext = () => {
    const errors = validateStep();
    if (Object.keys(errors).length === 0) {
      setStep((prevStep) => prevStep + 1);
    } else {
      setFormErrors(errors);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (key: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [key]: event.target.value });
    setFormErrors({ ...formErrors, [key]: "" });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const errors = validateStep();
    if (Object.keys(errors).length === 0) {
      console.log(formData);
      setReservationConfirmed(true);
    } else {
      setFormErrors(errors);
    }
  };

  const validateStep = (): Partial<FormData> => {
    const errors: Partial<FormData> = {};
    switch (step) {
      case 0:
        if (!formData.date) errors.date = t("pleaseFillDate");
        break;
      case 1:
        if (!formData.time) errors.time = t("pleaseFillTime");
        break;
      case 2:
        if (!formData.pax) errors.pax = t("pleaseFillPax");
        break;
      case 3:
        if (!formData.name) errors.name = t("pleaseFillName");
        if (!formData.email) errors.email = t("pleaseFillEmail");
        break;
    }
    return errors;
  };

  return (
    <>
      <HamburgerMenu />
      <main className="lg:min-h-screen relative overflow-visible w-full">
        <section className="flex flex-col lg:flex-row w-full h-full lg:min-h-screen bg-white">
          <div
            className="w-full lg:w-1/2 p-12 flex-col justify-between items-center lg:min-h-screen h-full hidden lg:flex"
            style={{
              backgroundImage: `url(${contactTremendo.src || contactTremendo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <div className="hidden lg:block">
              <NavFooter />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex-col justify-center items-center lg:flex lg:flex-col">
            <div className="text-center">
              <Typography variant="h2" className={styles.bookTitle}>
                {t("book")}
              </Typography>
            </div>
            {reservationConfirmed ? (
              <Box textAlign="center" p={3}>
                <Typography variant="h4">
                  {t("reservationConfirmed")}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.primaryButton}
                  onClick={() => window.location.reload()}
                >
                  {t("makeAnotherReservation")}
                </Button>
              </Box>
            ) : (
              <Container maxWidth="sm" className={styles.container}>
                <FormSteps steps={steps} activeStep={step} />
                <form onSubmit={handleSubmit} className={styles.form}>
                  <FormFields
                    step={step}
                    formData={formData}
                    formErrors={formErrors}
                    handleChange={handleChange}
                  />
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    mt={2}
                    className={styles.stickyButtons}
                  >
                    <Button
                      disabled={step === 0}
                      onClick={handleBack}
                      className={styles.backButton}
                    >
                      {t("back")}
                    </Button>
                    {step === steps.length - 1 ? (
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={styles.primaryButton}
                      >
                        {t("submit")}
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        className={styles.primaryButton}
                        onClick={handleNext}
                      >
                        {t("next")}
                      </Button>
                    )}
                  </Box>
                </form>
              </Container>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
