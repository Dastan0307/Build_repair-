import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";

import {useTranslation} from "react-i18next";

import {ROUTES} from "../../utils/routes";
import {loginUser} from "../../features/user/userSlice";

import SocialLogin from "../SocialLogin/SocialLogin";

import styles from '../../styles/Form.module.css'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {t} = useTranslation()

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value})
    }

    const validate = () => {
        let result = true
        if (values.email === null || values.email === '') {
            result = false
            toast.warning(`${t("login.warn-email")}`)
        }
        if (values.password === null || values.password === '') {
            result = false
            toast.warning(`${t("login.warn-password")}`)
        }
        return result
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        if (validate()) {
            try {
                const loginResult = await dispatch(loginUser(values))
                if (loginResult.payload) {
                    navigate(ROUTES.HOME)
                }
            } catch (err) {
                toast.error('Ошибка: ' + err.message)
            }
        }
    }

    return (
        <div className={styles.form_outer}>
            <div className={styles.form_top_box}>
                <h2 className={styles.form_h2}>{t("login.title")}</h2>
            </div>
            <div className={styles.form_inner}>
                <div className={styles.container}>
                    <form onSubmit={handleLogin}>
                        <label className={styles.label}>{t("login.email")}</label>
                        <input type="email" name='email' className={styles.input} value={values.email}
                               onChange={handleChange}/>
                        <br/>
                        <label className={styles.label}>{t("login.password")}</label>
                        <input type="password" name='password' className={styles.input} value={values.password}
                               onChange={handleChange}/>
                        <br/>
                        <Link to={ROUTES.PASSWORD_RESET} className={styles.pass_reset_link}>{t("login.forgot-password")}</Link>
                        <button type={"submit"} className={styles.form_login_btn}>{t("common.signin")}</button>
                    </form>

                    <div className={styles.lines_and_h4}>
                        <div className={styles.line}></div>
                        <h4>{t("common.login-with")}</h4>
                        <div className={styles.line}></div>
                    </div>

                    <SocialLogin />

                    <div className={styles.form_reg_link}>
                        <h4 className={styles.form_h4}>{t("login.no-account")}</h4>
                        <Link to={ROUTES.REGISTER} className={styles.form_reg_link}>{t("login.register")}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;