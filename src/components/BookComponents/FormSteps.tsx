import { Step, Stepper, StepLabel } from '@mui/material';
import { useTranslation } from 'next-i18next';
import styles from './bookComponents.module.css';  // Adjust path as necessary

interface FormStepsProps {
    steps: string[];   // This specifies an array of string labels for the steps
    activeStep: number;  // This specifies the current active step
}

const FormSteps = ({ steps, activeStep }: FormStepsProps) => {
    const { t } = useTranslation('common');

    return (
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
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
    );
};

export default FormSteps;
