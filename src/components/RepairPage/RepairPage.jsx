import React, {useState} from 'react';
import {NavLink, Outlet, useLocation} from 'react-router-dom';
import {ROUTES} from '../../utils/routes';

import {useTranslation} from "react-i18next";

import styles from '../../styles/BuildAndRepair.module.css'

import INSULATION from '../../images/repair-insulation.png'
import KITCHEN from '../../images/repair-kitchen.png'
import ROOMS from '../../images/repair-rooms.png'
import BATHROOM from '../../images/repair-bathroom.png'
import HALLWAY from '../../images/repair-hallway.png'
import APARTMENT from '../../images/repair-apartment.png'
import WATER_SUPPLY from '../../images/repair-water-supply.png'
import NOVOSTROY from '../../images/repair-novostroy.png'
import ELECTRICITY from '../../images/repair-electricity.png'

const RepairPage = () => {
    const location = useLocation()
    const [activeNavLink, setActiveNavLink] = useState('')
    const {t} = useTranslation()

    const handleNavLinkClick = (to) => {
        setActiveNavLink(to)
    }

    const isActive = (to) => {
        if (location.pathname === ROUTES.REPAIR) {
            return styles.active
        }
        return activeNavLink === to ? styles.active : ''
    };

    return (
        <div className={styles.build_repair}>
            <div className={styles.selection_panel}>
                <NavLink to={'insulation'} className={`${isActive(`${ROUTES.REPAIR}/insulation`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.REPAIR}/insulation`)}>
                    <div className={styles.type}>
                        <img src={INSULATION} alt="insulation"/>
                        <h3>{t("selection-panel.insulation")}</h3>
                    </div>
                </NavLink>
                <NavLink to={'kitchen'} className={`${isActive(`${ROUTES.REPAIR}/kitchen`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.REPAIR}/kitchen`)}>
                    <div className={styles.type}>
                        <img src={KITCHEN} alt="kitchen"/>
                        <h3>{t("selection-panel.kitchen")}</h3>
                    </div>
                </NavLink>
                <NavLink to={'rooms'} className={`${isActive(`${ROUTES.REPAIR}/rooms`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.REPAIR}/rooms`)}>
                    <div className={styles.type}>
                        <img src={ROOMS} alt="rooms"/>
                        <h3>{t("selection-panel.rooms")}</h3>
                    </div>
                </NavLink>
                <NavLink to={'bathroom'} className={`${isActive(`${ROUTES.REPAIR}/bathroom`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.REPAIR}/bathroom`)}>
                    <div className={styles.type}>
                        <img src={BATHROOM} alt="bathroom"/>
                        <h3>{t("selection-panel.bathroom")}</h3>
                    </div>
                </NavLink>
                <NavLink to={'hallway'} className={`${isActive(`${ROUTES.REPAIR}/hallway`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.REPAIR}/hallway`)}>
                    <div className={styles.type}>
                        <img src={HALLWAY} alt="hallway"/>
                        <h3>{t("selection-panel.hallway")}</h3>
                    </div>
                </NavLink>
                <NavLink to={'apartment'} className={`${isActive(`${ROUTES.REPAIR}/apartment`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.REPAIR}/apartment`)}>
                    <div className={styles.type}>
                        <img src={APARTMENT} alt="apartment"/>
                        <h3>{t("selection-panel.apartment")}</h3>
                    </div>
                </NavLink>
                <NavLink to={'water-supply'} className={`${isActive(`${ROUTES.REPAIR}/water-supply`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.REPAIR}/water-supply`)}>
                    <div className={styles.type}>
                        <img src={WATER_SUPPLY} alt="water-supply"/>
                        <h3>{t("selection-panel.water-supply")}</h3>
                    </div>
                </NavLink>
                <NavLink to={'novostroy'} className={`${isActive(`${ROUTES.REPAIR}/novostroy`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.REPAIR}/novostroy`)}>
                    <div className={styles.type}>
                        <img src={NOVOSTROY} alt="novostroy"/>
                        <h3>{t("selection-panel.novostroy")}</h3>
                    </div>
                </NavLink>
                <NavLink to={'electricity'} className={`${isActive(`${ROUTES.REPAIR}/electricity`)}`}
                         onClick={() => handleNavLinkClick(`${ROUTES.REPAIR}/electricity`)}>
                    <div className={styles.type}>
                        <img src={ELECTRICITY} alt="electricity"/>
                        <h3>{t("selection-panel.electricity")}</h3>
                    </div>
                </NavLink>
            </div>

            <Outlet/>
        </div>
    );
};

export default RepairPage;