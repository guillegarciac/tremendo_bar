import { TextField, MenuItem } from '@mui/material';
import { useTranslation } from 'next-i18next';
import styles from './bookComponents.module.css';  // Adjust path as necessary

interface FormData {
    date: string;
    time: string;
    pax: string;
    name: string;
    email: string;
    comments: string;
}

interface FormFieldsProps {
    step: number;
    formData: FormData;
    formErrors: Partial<FormData>;
    handleChange: (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormFields = ({ step, formData, formErrors, handleChange }: FormFieldsProps) => {
    const { t } = useTranslation('common');

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
                    InputLabelProps={{ shrink: true }}
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
                    select
                    fullWidth
                    margin="normal"
                    id="pax"
                    name="pax"
                    label={t("selectPax")}
                    value={formData.pax}
                    onChange={handleChange("pax")}
                    error={!!formErrors.pax}
                    helperText={formErrors.pax}
                    className={styles.textField}
                >
                    {Array.from(Array(6).keys()).map((number) => (
                        <MenuItem key={number + 1} value={number + 1}>
                            {number + 1}
                        </MenuItem>
                    ))}
                </TextField>
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
};

export default FormFields;
