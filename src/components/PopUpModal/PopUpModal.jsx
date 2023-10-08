import React from 'react';
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

import {ROUTES} from "../../utils/routes";

import styles from "../../styles/PopUpModal.module.css";

const PopUpModal = ({isOpen, onClose, message}) => {
    const navigate = useNavigate()
    const {t} = useTranslation()

    const handleCloseModal = () => {
        onClose()
        navigate(ROUTES.HOME)
    }

    return (
        <>
            {isOpen && (
                <div className={styles.popup__modal_overlay} onClick={handleCloseModal}>
                    <div className={styles.popup__modal} onClick={(e) => e.stopPropagation()}>
                        <p className={styles.popup__modal__text}>{message}</p>
                        <button className={styles.popup__modal__btn} onClick={handleCloseModal}>{t("register-page.ok")}</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopUpModal;

