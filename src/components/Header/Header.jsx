import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {useTranslation} from "react-i18next";

import {ROUTES} from "../../utils/routes";
import {logoutUser} from "../../features/user/userSlice";

import styles from '../../styles/Header.module.css'

import LOGO from '../../images/logo.svg'
import USER from '../../images/user-icon.svg'
import PHONE from '../../images/phone-icon.svg'

const activeMenuClass = ({isActive}) => isActive ? styles.active : ''

const Header = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const {t, i18n} = useTranslation()
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value
        i18n.changeLanguage(selectedLanguage)
        setCurrentLanguage(selectedLanguage)
    }

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <div className={styles.header_bgc}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link to={ROUTES.HOME}>
                        <img src={LOGO} alt="logo"/>
                    </Link>
                </div>

                <div className={styles.menu_links}>
                    <NavLink to={ROUTES.ABOUT} className={activeMenuClass}>
                        <p className={styles.navlink_p}>{t("common.about")}</p>
                    </NavLink>
                    <NavLink to={ROUTES.BUILD} className={activeMenuClass}>
                        <p className={styles.navlink_p}>{t("common.build")}</p>
                    </NavLink>
                    <NavLink to={ROUTES.REPAIR} className={activeMenuClass}>
                        <p className={styles.navlink_p}>{t("common.repair")}</p>
                    </NavLink>
                    <NavLink to={ROUTES.CONTACTS} className={activeMenuClass}>
                        <p className={styles.navlink_p}>{t("common.contacts")}</p>
                    </NavLink>
                </div>

                <a href={ROUTES.CONTACTS} className={styles.call_link}>
                    <img src={PHONE} alt="phone"/>
                    <p>{t("common.callback")}</p>
                </a>

                <div className={styles.languages}>
                    <select value={currentLanguage} onChange={handleLanguageChange}>
                        <option value="kg">Кыргыз тили</option>
                        <option value="ru">Русский язык</option>
                        <option value="en">English</option>
                    </select>
                </div>

                <div className={styles.reg_log}>
                    {currentUser ? (
                        <>
                            <Link to={ROUTES.PROFILE} className={styles.user_links}>
                                <img src={USER} className={styles.user_icon} alt="user"/>
                                <p className={styles.username}>
                                    {currentUser.name} {currentUser.surname}
                                </p>
                            </Link>
                            <button className={styles.logout_btn} onClick={handleLogout}>{t("common.logout")}</button>
                        </>
                    ) : (
                        <>
                            <Link to={ROUTES.REGISTER}>
                                <div className={styles.register_box}>
                                    <p>{t("common.signup")}</p>
                                </div>
                            </Link>
                            <Link to={ROUTES.LOGIN} className={styles.login_and_icon}>
                                <p>{t("common.signin")}</p>
                                <img src={USER} className={styles.user_icon} alt="user"/>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;