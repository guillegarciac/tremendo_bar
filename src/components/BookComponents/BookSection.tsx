import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Button, Container, Typography, Box } from "@mui/material";
import FormSteps from "@/components/BookComponents/FormSteps";
import FormFields from "@/components/BookComponents/FormFields";
import styles from "./bookComponents.module.css";  // Ensure this path matches the location of your CSS

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

const BookSection = () => {
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
      {reservationConfirmed ? (
        <Box textAlign="center" p={3}>
          <Typography variant="h4">
            {t("reservationConfirmed")}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.location.reload()}
          >
            {t("makeAnotherReservation")}
          </Button>
        </Box>
      ) : (
        <Container maxWidth="sm">
          <FormSteps steps={steps} activeStep={step} />
          <form onSubmit={handleSubmit}>
            <FormFields
              step={step}
              formData={formData}
              formErrors={formErrors}
              handleChange={handleChange}
            />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button
                disabled={step === 0}
                onClick={handleBack}
              >
                {t("back")}
              </Button>
              {step === steps.length - 1 ? (
                <Button type="submit" variant="contained" color="primary">
                  {t("submit")}
                </Button>
              ) : (
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {t("next")}
                </Button>
              )}
            </Box>
          </form>
        </Container>
      )}
    </>
  );
};

export default BookSection;
