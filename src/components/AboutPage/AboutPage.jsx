import React from 'react';

import {useTranslation} from "react-i18next";

import styles from '../../styles/About.module.css'

import IMG1 from '../../images/about-us-img1.png'
import IMG2 from '../../images/about-us-img2.png'

const AboutPage = () => {
    const {t} = useTranslation()

    return (
        <div className={styles.about}>
            <div className={styles.about_title}>
                <h2>{t("common.about")}</h2>
            </div>
            <div className={styles.about_top}>
                <img src={IMG1} alt="img1" className={styles.img1}/>
                <div className={styles.about_p_top}>
                    <div className={styles.about_p}>{t("about.general-top")}</div>
                    <br/>
                    <div className={styles.about_p}>{t("about.general-bottom")}</div>
                </div>
            </div>
            <div className={styles.about_bottom}>
                <ul className={styles.about_p_bottom}>
                    <div className={styles.about_p}>{t("about.reasons-top")}</div>
                    <br/>
                    <li className={styles.about_p}>{t("about.reasons-1")}</li>
                    <br/>
                    <li className={styles.about_p}>{t("about.reasons-2")}</li>
                    <br/>
                    <li className={styles.about_p}>{t("about.reasons-3")}</li>
                    <br/>
                    <li className={styles.about_p}>{t("about.reasons-4")}</li>
                    <br/>
                    <li className={styles.about_p}>{t("about.reasons-5")}</li>
                    <br/>
                    <div className={styles.about_p}>{t("about.reasons-bottom")}</div>
                </ul>
                <img src={IMG2} alt="img2" className={styles.img2}/>
            </div>
        </div>
    );
};

export default AboutPage;