import React from 'react';

import {useTranslation} from "react-i18next";

import styles from '../../styles/Contacts.module.css'

import INSTAGRAM from  '../../images/contacts-instagram.svg'
import WHATSAPP from  '../../images/contacts-whatsapp.svg'

const ContactsPage = () => {
    const {t} = useTranslation()

    return (
        <div className={styles.contacts}>
            <p className={styles.contacts_p}>{t("contacts.title")}</p>
            <div className={styles.operator_address}>
                <div className={styles.inner}>
                    <p className={styles.contacts_p}>{t("contacts.operator")}</p>
                    <p className={styles.contacts_p}>{t("common.address")}</p>
                </div>
                <div className={styles.inner}>
                    <p className={styles.contacts_p}>+996700123456</p>
                    <p className={styles.contacts_p}>{t("contacts.street")}</p>
                </div>
            </div>
            <div className={styles.socials}>
                <img src={INSTAGRAM} alt="instagram"/>
                <p className={styles.contacts_p}>@stroika i remont</p>
            </div>
            <div className={styles.socials}>
                <img src={WHATSAPP} alt="whatsapp"/>
                <p className={styles.contacts_p}>+996700123456</p>
            </div>
        </div>
    );
};

export default ContactsPage;