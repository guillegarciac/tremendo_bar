import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
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

const steps = ["selectDateTitle", "selectTimeTitle", "selectPaxTitle", "selectDetailsTitle"];

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

  const handleChange =
    (key: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <main className="min-h-screen relativeoverflow-hidden bg-white">
        <Typography variant="h3" className={styles.bookTitle}>
          {t("book")}
        </Typography>
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
              <Typography variant="h2" style={{ color: "#00b55e" }}>
                {t("book")}
              </Typography>
            </div>
            <div className="hidden lg:block">
              <FooterMenu />
              <NavFooter />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex-col justify-center items-center lg:flex lg:flex-col">
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
                <Stepper activeStep={step} alternativeLabel>
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel
                        StepIconProps={{
                          classes: {
                            root: styles.stepIcon,
                            active: styles.stepIconActive,
                            completed: styles.stepIconCompleted,
                          },
                        }}
                      >
                        {t(label)}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <form onSubmit={handleSubmit} className={styles.form}>
                  {renderStepContent(step)}
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
      <FooterMenu />
      <NavFooter />
    </>
  );

  function renderStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <TextField
            fullWidth
            margin="normal"
            id="date"
            name="date"
            label={t("selectDate")}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.date}
            onChange={handleChange("date")}
            error={!!formErrors.date}
            helperText={formErrors.date}
            className={styles.textField}
          />
        );
      case 1:
        return (
          <TextField
            fullWidth
            margin="normal"
            id="time"
            name="time"
            label={t("selectTime")}
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.time}
            onChange={handleChange("time")}
            error={!!formErrors.time}
            helperText={formErrors.time}
            className={styles.textField}
          />
        );
      case 2:
        return (
          <TextField
            fullWidth
            margin="normal"
            id="pax"
            name="pax"
            label={t("selectPax")}
            type="number"
            value={formData.pax}
            onChange={handleChange("pax")}
            error={!!formErrors.pax}
            helperText={formErrors.pax}
            className={styles.textField}
          />
        );
      case 3:
        return (
          <>
            <TextField
              fullWidth
              margin="normal"
              id="name"
              name="name"
              label={t("name")}
              value={formData.name}
              onChange={handleChange("name")}
              error={!!formErrors.name}
              helperText={formErrors.name}
              className={styles.textField}
            />
            <TextField
              fullWidth
              margin="normal"
              id="email"
              name="email"
              label={t("email")}
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              error={!!formErrors.email}
              helperText={formErrors.email}
              className={styles.textField}
            />
            <TextField
              fullWidth
              margin="normal"
              id="comments"
              name="comments"
              label={t("comments")}
              multiline
              rows={4}
              value={formData.comments}
              onChange={handleChange("comments")}
              error={!!formErrors.comments}
              helperText={formErrors.comments}
              className={styles.textField}
            />
          </>
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
