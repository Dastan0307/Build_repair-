import React, {useState} from 'react';
import {NavLink, Outlet, useLocation} from 'react-router-dom';
import {ROUTES} from '../../utils/routes';

import {useTranslation} from "react-i18next";

import styles from '../../styles/BuildAndRepair.module.css';

import HOUSE from '../../images/build-house.jpg';
import BANYA from '../../images/build-banya.png';
import GARAGE from '../../images/build-garage.png';
import ROOF from '../../images/build-roof.png';
import WALL from '../../images/build-wall.png';
import FOUNDATION from '../../images/build-foundation.png';

const BuildPage = () => {
    const location = useLocation()
    const [activeNavLink, setActiveNavLink] = useState('')
    const {t} = useTranslation()

    const handleNavLinkClick = (to) => {
        setActiveNavLink(to)
    }

    const isActive = (to) => {
        if (location.pathname === ROUTES.BUILD) {
            return styles.active
        }
        return activeNavLink === to ? styles.active : ''
    };

    return (
        <div className={styles.build_repair}>
            <div className={styles.selection_panel}>
                <NavLink to={'house'} className={`${isActive(`${ROUTES.BUILD}/house`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.BUILD}/house`)}>
                    <div className={styles.type}>
                        <img src={HOUSE} alt="house" className={styles.house_img}/>
                        <h3>{t("selection-panel.house")}</h3>
                    </div>
                </NavLink>
                <NavLink to={'banya'} className={`${isActive(`${ROUTES.BUILD}/banya`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.BUILD}/banya`)}>
                    <div className={styles.type}>
                        <img src={BANYA} alt="banya"/>
                        <h3>{t("selection-panel.banya")}</h3>
                    </div>
                </NavLink>
                <NavLink to={'garage'} className={`${isActive(`${ROUTES.BUILD}/garage`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.BUILD}/garage`)}>
                    <div className={styles.type}>
                        <img src={GARAGE} alt="garage"/>
                        <h3>{t("selection-panel.garage")}</h3>
                    </div>
                </NavLink>
                <NavLink to={'roof'} className={`${isActive(`${ROUTES.BUILD}/roof`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.BUILD}/roof`)}>
                    <div className={styles.type}>
                        <img src={ROOF} alt="roof"/>
                        <h3>{t("selection-panel.roof")}</h3>
                    </div>
                </NavLink>
                <NavLink to={'wall'} className={`${isActive(`${ROUTES.BUILD}/wall`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.BUILD}/wall`)}>
                    <div className={styles.type}>
                        <img src={WALL} alt="wall"/>
                        <h3>{t("selection-panel.wall")}</h3>
                    </div>
                </NavLink>
                <NavLink to={'foundation'} className={`${isActive(`${ROUTES.BUILD}/foundation`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.BUILD}/foundation`)}>
                    <div className={styles.type}>
                        <img src={FOUNDATION} alt="foundation"/>
                        <h3>{t("selection-panel.foundation")}</h3>
                    </div>
                </NavLink>
            </div>

            <Outlet/>
        </div>
    );
};

export default BuildPage;
