// Assuming the file name is BookATable.tsx

import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, ChangeEvent, FormEvent } from "react";
import { useTranslation } from "next-i18next";
import styles from './BookATable.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import contactTremendo from '../../assets/contacttremendo.jpeg';


const NavFooter = dynamic(() => import("@/components/NavFooter/NavFooter"), {
  ssr: false,
});
const HamburgerMenu = dynamic(() => import("@/components/HamburgerMenu/HamburgerMenu"));

interface FormData {
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
    date: '',
    time: '',
    pax: '',
    name: '',
    email: '',
    comments: ''
  });

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData(prevState => ({ ...prevState, [key]: value }));
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);
    // Typically handle submission to your backend here
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
              <NavFooter />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex-col justify-center items-center lg:flex lg:flex-col">
            <div className={`${styles.stickyContainer} ${styles.container}`}>
              <ul className={styles.stepIndicator}>
                {[1, 2, 3, 4].map(num => (
                  <li key={num} className={step >= num ? styles.active : ""}>{num}</li>
                ))}
              </ul>
              <div>
                {step === 1 && <div className={styles.inputGroup}>
                  <label>{t("selectDate")}</label>
                  <input type="date" value={formData.date} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('date', e.target.value)} />
                </div>}
                {step === 2 && <div className={styles.inputGroup}>
                  <label>{t("selectTime")}</label>
                  <input type="time" value={formData.time} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('time', e.target.value)} />
                </div>}
                {step === 3 && <div className={styles.inputGroup}>
                  <label>{t("selectPax")}</label>
                  <input type="number" value={formData.pax} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('pax', e.target.value)} />
                </div>}
                {step === 4 && <div className={styles.inputGroup}>
                  <form onSubmit={handleSubmit}>
                    <label>{t("name")}</label>
                    <input type="text" value={formData.name} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('name', e.target.value)} />
                    <label>{t("email")}</label>
                    <input type="email" value={formData.email} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)} />
                    <label>{t("comments")}</label>
                    <textarea value={formData.comments} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange('comments', e.target.value)} />
                    <div className={styles.buttonGroup}>
                      {step > 1 && <button className={`${styles.button} ${styles.backButton}`} onClick={prevStep}>Back</button>}
                      {step < 4 && <button className={styles.button} onClick={nextStep}>Next</button>}
                      {step === 4 && <button type="submit" className={styles.button}>Submit</button>}
                    </div>
                  </form>
                </div>}
              </div>
            </div>
          </div>
        </section>
      </main>
      <NavFooter />
    </>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

