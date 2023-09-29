import React from 'react';
import {Link, NavLink} from "react-router-dom";

import {useTranslation} from "react-i18next";

import {ROUTES} from "../../utils/routes";

import styles from '../../styles/Footer.module.css'

import LOGO from "../../images/logo.svg";
import LOCATION from "../../images/location-icon.svg"
import PHONE from "../../images/phone-icon.svg";
import WHATSAPP from "../../images/whatsapp-icon.svg";
import TELEGRAM from "../../images/telegram-icon.svg";
import INSTAGRAM from "../../images/instagram-icon.svg";
import FACEBOOK from "../../images/facebook-icon.svg";
import YOUTUBE from "../../images/youtube-icon.svg";
import TWITTER from "../../images/twitter-icon.svg";

const activeMenuClass = ({isActive}) => isActive ? styles.active : ''

const Footer = () => {
    const {t} = useTranslation()

    return (
        <div className={styles.footer_bgc}>
            <div className={styles.footer}>
                <div className={styles.logo}>
                    <Link to={ROUTES.HOME}>
                        <img src={LOGO} alt="logo"/>
                    </Link>
                </div>

                <div className={styles.footer_links}>
                    <NavLink to={ROUTES.ABOUT} className={activeMenuClass}>
                        <p>{t("common.about")}</p>
                    </NavLink>
                    <NavLink to={ROUTES.BUILD} className={activeMenuClass}>
                        <p>{t("common.build")}</p>
                    </NavLink>
                    <NavLink to={ROUTES.REPAIR} className={activeMenuClass}>
                        <p>{t("common.repair")}</p>
                    </NavLink>
                    <NavLink to={ROUTES.CONTACTS} className={activeMenuClass}>
                        <p>{t("common.contacts")}</p>
                    </NavLink>
                </div>

                <div className={styles.address}>
                    <h4>{t("common.address")}</h4>
                    <div>
                        <img src={LOCATION} alt="location"/>
                        <h4>{t("footer.street")}</h4>
                    </div>
                </div>

                <div className={styles.call_box}>
                    <a href={"tel:+996700123456"} className={styles.call_link}>
                        <img src={PHONE} alt="phone"/>
                        <p>{t("common.callback")}</p>
                    </a>
                    <p>+996700123456</p>
                </div>

                <div>
                    <ul className={styles.follow_us}>
                        <li className={styles.follow_us_links}>
                            <a href="/linkshere">
                                <img src={WHATSAPP} alt="whatsapp"/>
                            </a>
                        </li>
                        <li className={styles.follow_us_links}>
                            <a href="/linkshere">
                                <img src={TELEGRAM} alt="telegram"/>
                            </a>
                        </li>
                        <li className={styles.follow_us_links}>
                            <a href="/linkshere">
                                <img src={INSTAGRAM} alt="instagram"/>
                            </a>
                        </li>
                        <li className={styles.follow_us_links}>
                            <a href="/linkshere">
                                <img src={FACEBOOK} alt="facebook"/>
                            </a>
                        </li>
                        <li className={styles.follow_us_links}>
                            <a href="/linkshere">
                                <img src={YOUTUBE} alt="youtube"/>
                            </a>
                        </li>
                        <li className={styles.follow_us_links}>
                            <a href="/linkshere">
                                <img src={TWITTER} alt="twitter"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;