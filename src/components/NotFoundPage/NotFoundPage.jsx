import React from 'react';
import {Link} from "react-router-dom";

import {ROUTES} from "../../utils/routes";

import styles from '../../styles/NotFound.module.css'

const NotFoundPage = () => {
    return (
        <div className={styles.not_found}>
            <div className={styles.not_found_num}>404</div>
            <div className={styles.not_found_text}>Страница не найдена</div>
            <Link to={ROUTES.HOME}>
                <div className={styles.not_found_box}>
                    <p>Вернуться назад</p>
                </div>
            </Link>
        </div>
    );
};

export default NotFoundPage;