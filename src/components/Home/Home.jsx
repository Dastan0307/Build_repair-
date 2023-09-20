import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../utils/routes';

import {useTranslation} from "react-i18next";

import styles from '../../styles/Home.module.css'

const Home = () => {
    const {t} = useTranslation()

    return (
        <div className={styles.home_bg}>
            <div className={styles.home}>
                <p className={styles.home_p}>{t("home.title")}</p>
                <p className={styles.home_p}>{t("home.paragraph")}</p>
                <div className={styles.buttons}>
                    <Link to={ROUTES.BUILD} className={styles.link_btns}>{t("home.link1")}</Link>
                    <Link to={ROUTES.REPAIR} className={styles.link_btns}>{t("home.link2")}</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;