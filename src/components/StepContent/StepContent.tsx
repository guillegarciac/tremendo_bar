import { TextField } from "@mui/material";
import { useTranslation } from "next-i18next";
import { ChangeEventHandler } from "react";

interface StepContentProps {
  step: number;
  formData: FormData;
  formErrors: Partial<FormData>;
  handleChange: (field: keyof FormData) => ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

interface FormData {
  date: string;
  time: string;
  pax: string;
  name: string;
  email: string;
  comments: string;
}

const StepContent: React.FC<StepContentProps> = ({ step, formData, formErrors, handleChange }) => {
  const { t } = useTranslation("common");

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
          InputLabelProps={{ shrink: true }}
          value={formData.date}
          onChange={handleChange("date")}
          error={!!formErrors.date}
          helperText={formErrors.date}
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
          InputLabelProps={{ shrink: true }}
          value={formData.time}
          onChange={handleChange("time")}
          error={!!formErrors.time}
          helperText={formErrors.time}
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
          />
        </>
      );
    default:
      return null;
  }
}

export default StepContent;
