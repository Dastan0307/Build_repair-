import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useTranslation} from "react-i18next";

import {registerUser} from "../../features/user/userSlice";

import SocialLogin from "../SocialLogin/SocialLogin";
import PopUpModal from "../PopUpModal/PopUpModal";

import styles from '../../styles/Form.module.css';

const Register = () => {
    const dispatch = useDispatch()
    const {t} = useTranslation()
    const [openModal, setOpenModal] = useState(false)

    const schema = yup.object({
        name: yup.string().required(`${t("register-page.msg-name")}`),
        surname: yup.string().required(`${t("register-page.msg-surname")}`),
        email: yup.string().required(`${t("register-page.msg-email")}`).email(`${t("register-page.invalid-email")}`),
        password: yup.string().min(4, `${t("register-page.short-password")}`),
        passwordConfirm: yup.string().oneOf([yup.ref("password")], `${t("register-page.unmatched-password")}`),
    })

    const {handleSubmit, register, formState: {errors},} = useForm({
        resolver: yupResolver(schema),
    })

    const formSubmit = async (data) => {
        try {
            const res = await dispatch(registerUser(data))
            if (res.error) {
                alert('Ошибка данных!')
            } else {
                setOpenModal(true)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        <div className={styles.form_outer}>
            <div className={styles.form_top_box}>
                <h2 className={styles.form_h2}>{t("register-page.title")}</h2>
            </div>
            <div className={`${styles.form_inner} ${styles.form_inner_reg}`}>
                <div className={styles.container}>
                    <form onSubmit={handleSubmit(formSubmit)}>
                        <label className={styles.label}>{t("register-page.name")}</label>
                        <input type="text" className={styles.input} {...register("name")}/>
                        <p className={styles.error__message}>{errors.name?.message}</p>
                        <br/>
                        <label className={styles.label}>{t("register-page.surname")}</label>
                        <input type="text" className={styles.input} {...register("surname")}/>
                        <p className={styles.error__message}>{errors.surname?.message}</p>
                        <br/>
                        <label className={styles.label}>Email</label>
                        <input type="text" className={styles.input} {...register("email")}/>
                        <p className={styles.error__message}>{errors.email?.message}</p>
                        <br/>
                        <label className={styles.label}>{t("register-page.password")}</label>
                        <input type="password" className={styles.input} {...register("password")}/>
                        <p className={styles.error__message}>{errors.password?.message}</p>
                        <br/>
                        <label className={styles.label}>{t("register-page.confirm-password")}</label>
                        <input type="password" className={styles.input} {...register("passwordConfirm")}/>
                        <p className={styles.error__message}>{errors.passwordConfirm?.message}</p>
                        <br/>
                        <div className={styles.form_reg_btn_box}>
                            <button type={"submit"} className={`${styles.form_reg_btn} ${styles.form_reg_btn}`}>
                                {t("common.signup")}
                            </button>
                        </div>
                    </form>

                    <div className={styles.lines_and_h4}>
                        <div className={styles.line}></div>
                        <h4>{t("common.login-with")}</h4>
                        <div className={styles.line}></div>
                    </div>

                    <SocialLogin />
                </div>
            </div>
            <PopUpModal isOpen={openModal} onClose={closeModal} message={t("register-page.successful-signup")}/>
        </div>
    );
};

export default Register;