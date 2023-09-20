import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

import {useTranslation} from "react-i18next";

import {ROUTES} from "../../utils/routes";
import {registerUser} from "../../features/user/userSlice";

import SocialLogin from "../SocialLogin/SocialLogin";

import styles from '../../styles/Form.module.css'

const Register = () => {
    const[values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })
    const[passwordConfirm, setPasswordConfirm] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {t} = useTranslation()

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value})
    }

    const isValid = () => {
        let proceed = true
        let errorMessage = `${t("register-page.err-msg")}`
        if (values.name === null || values.name === '') {
            proceed = false
            errorMessage += `${t("register-page.msg-name")}`
        }
        if (values.surname===null || values.surname==='') {
            proceed = false
            errorMessage += `${t("register-page.msg-surname")}`
        }
        if (values.email===null || values.email==='') {
            proceed = false
            errorMessage += `${t("register-page.msg-email")}`
        }
        if (values.password===null || values.password==='') {
            proceed = false
            errorMessage += `${t("register-page.msg-password")}`
        }
        if (passwordConfirm===null || passwordConfirm==='') {
            proceed = false
            errorMessage += `${t("register-page.msg-password-confirm")}`
        }
        if (!proceed) {
            toast.warning(errorMessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]/.test(values.email)) {

            } else {
                proceed = false
                toast.warning(`${t("register-page.invalid-email")}`)
            }
        }
        if (values.password !=='' && values.password.length < 4) {
            proceed = false
            toast.warning(`${t("register-page.short-email")}`)
        }
        if (values.password !== passwordConfirm && values.password !== '' && passwordConfirm !== '') {
            proceed = false;
            toast.warning(`${t("register-page.unmatched-password")}`)
        }
        return proceed
    }

    const handleRegister = (e) => {
        e.preventDefault()
        if (isValid()) {
            try {
                dispatch(registerUser(values))
                toast.success(`${t("register-page.successful-signup")}`)
                navigate(ROUTES.HOME)
            } catch (err) {
                toast.error('Ошибка: ' + err.message)
            }
        }
    }

    return (
        <div className={styles.form_outer}>
            <div className={styles.form_top_box}>
                <h2 className={styles.form_h2}>{t("register-page.title")}</h2>
            </div>
            <div className={`${styles.form_inner} ${styles.form_inner_reg}`}>
                <div className={styles.container}>
                    <form onSubmit={handleRegister}>
                        <label className={styles.label}>{t("register-page.name")}</label>
                        <input type="text" name='name' className={styles.input} value={values.name}
                               onChange={handleChange}/>
                        <br/>
                        <label className={styles.label}>{t("register-page.surname")}</label>
                        <input type="text" name='surname' className={styles.input} value={values.surname}
                               onChange={handleChange}/>
                        <br/>
                        <label className={styles.label}>Email</label>
                        <input type="text" name='email' className={styles.input} value={values.email}
                               onChange={handleChange}/>
                        <br/>
                        <label className={styles.label}>{t("register-page.password")}</label>
                        <input type="password" name='password' className={styles.input} value={values.password}
                               onChange={handleChange}/>
                        <br/>
                        <label className={styles.label}>{t("register-page.confirm-password")}</label>
                        <input type="password" name='passwordConfirm' className={styles.input} value={passwordConfirm}
                               onChange={(e) => setPasswordConfirm(e.target.value)}/>
                        <br/>
                        <div className={styles.form_reg_btn_box}>
                            <button type={"submit"}
                                    className={`${styles.form_reg_btn} ${styles.form_reg_btn}`}
                            >
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
        </div>
    );
};

export default Register;