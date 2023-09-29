import React, {useRef, useState} from 'react';
import {useSelector} from "react-redux";

import Modal from "./Modal";

import styles from '../../styles/Profile.module.css'
import styles2 from '../../styles/Form.module.css'

import AVATAR from '../../images/avatar.svg'
import EDIT from '../../images/edit-icon.svg'
import CALENDAR from '../../images/calendar-icon.svg'
import ARROW_RIGHT from '../../images/arrow-right.svg'
import CLOSE_BTN from '../../images/close-btn.svg'

const Profile = () => {
    const userData= useSelector(state => state.user.currentUser)
    const inputRef = useRef(null)
    const [openModal1, setOpenModal1] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)

    const handleImageClick = () => {
        inputRef.current.click()
    }

    return (
        <div>
            <div className={styles.profile_card}>
                <h2 className={styles.flex}>Профиль</h2>
                <div className={`${styles.avatar} ${styles.flex}`}>
                    <img src={AVATAR} alt="avatar"/>
                    <div className={styles.avatar_edit} onClick={handleImageClick}>
                        <img src={EDIT} alt="edit"/>
                        <input type="file" ref={inputRef} style={{display: "none"}}/>
                    </div>
                </div>
                <h4 className={styles.h4}>{userData.email}</h4>
                <div className={styles.line}></div>
                <button className={styles.open_modal} onClick={() => setOpenModal1(true)}>
                    <div>Данные пользователя</div>
                    <img src={ARROW_RIGHT} alt="arrow"/>
                </button>
                <button className={styles.open_modal} onClick={() => setOpenModal2(true)}>
                    <div>Мои расчёты</div>
                    <img src={ARROW_RIGHT} alt="arrow"/>
                </button>
            </div>
            {openModal1 && <Modal>
                <div className={styles2.form_top_box}>
                    <h2 className={`${styles2.form_h2}`}>Мой профиль</h2>
                    <button className={styles.close_modal_btn} onClick={() => setOpenModal1(false)}>
                        <img src={CLOSE_BTN} alt="close"/>
                    </button>
                </div>
                <div className={styles.modal_bottom}>
                    <div>
                        <p className={styles.p}>Ваше ФИО</p>
                        <div className={styles.fields_box}>
                            <div className={styles.fields}>{userData.name} {userData.surname}</div>
                            <img src={EDIT} alt="edit"/>
                        </div>
                    </div>
                    <div className={styles.bd_field}>
                        <p className={styles.p}>Дата рождения</p>
                        <div className={styles.fields_box}>
                            <div className={styles.fields}>01.01.2023</div>
                            <img src={CALENDAR} alt="edit"/>
                        </div>
                    </div>
                    <div>
                        <p className={styles.p}>Пароль</p>
                        <div className={styles.fields_box}>
                            <div className={styles.fields}>*********</div>
                            <img src={EDIT} alt="edit"/>
                        </div>
                    </div>
                    <div className={styles.last_field}>
                        <p className={styles.p}>Эл. почта</p>
                        <div className={styles.fields_box}>
                            <div className={styles.fields}>{userData.email}</div>
                            <img src={EDIT} alt="edit"/>
                        </div>
                    </div>
                    <div className={styles2.form_reg_btn_box}>
                        <button className={`${styles2.form_reg_btn} ${styles2.form_reg_btn}`}>Сохранить</button>
                    </div>
                </div>
            </Modal>}
            {openModal2 && <Modal closeModal={setOpenModal2}>
                modal 2
                <button onClick={() => setOpenModal2(false)}>X</button>
            </Modal>}
        </div>
    );
};

export default Profile;