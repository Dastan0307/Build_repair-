import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useTranslation} from "react-i18next";

import {ROUTES} from "../../utils/routes";
import {loginUser, setUser} from "../../features/user/userSlice";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

import SocialLogin from "../SocialLogin/SocialLogin";

import styles from '../../styles/Form.module.css';
import PopUpModal from "../PopUpModal/PopUpModal";

const Login = () => {
  const dispatch = useDispatch()
  const {t} = useTranslation()
  const [openModal, setOpenModal] = useState(false)

  const schema = yup.object({
    email: yup.string().required(`${t("login.warn-email")}`).email(`${t("register-page.invalid-email")}`),
    password: yup.string().required(`${t("login.warn-password")}`),
  })

  const {handleSubmit, register, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  })

  const formSubmit = async (data) => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, data.email, data.password)
      await setOpenModal(true)
      dispatch(setUser({
        currentUser: {
          name: data.name,
          surname: data.surname,
          email: data.email
        }
      }))
    } catch (err) {
      console.log(err)
      alert('Invalid credentials!')
    }
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  // const formSubmit1 = async (data) => {
  //   try {
  //     const res = await dispatch(loginUser(data))
  //     if (res.error) {
  //       alert('Неверные данные!')
  //     } else {
  //       setOpenModal(true)
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <div className={styles.form_outer}>
      <div className={styles.form_top_box}>
        <h2 className={styles.form_h2}>{t("login.title")}</h2>
      </div>
      <div className={styles.form_inner}>
        <div className={styles.container}>
          <form onSubmit={handleSubmit(formSubmit)}>
            <label className={styles.label}>{t("login.email")}</label>
            <input type="email" className={styles.input} {...register("email")}/>
            <p className={styles.error__message}>{errors.email?.message}</p>
            <br/>
            <label className={styles.label}>{t("login.password")}</label>
            <input type="password" className={styles.input} {...register("password")}/>
            <p className={styles.error__message}>{errors.password?.message}</p>
            <br/>
            <Link to={ROUTES.PASSWORD_RESET} className={styles.pass_reset_link}>{t("login.forgot-password")}</Link>
            <button type={"submit"} className={styles.form_login_btn}>{t("common.signin")}</button>
          </form>

          <div className={styles.lines_and_h4}>
            <div className={styles.line}></div>
            <h4>{t("common.login-with")}</h4>
            <div className={styles.line}></div>
          </div>

          <SocialLogin/>

          <div className={styles.form_reg_link}>
            <h4 className={styles.form_h4}>{t("login.no-account")}</h4>
            <Link to={ROUTES.REGISTER} className={styles.form_reg_link}>{t("login.register")}</Link>
          </div>
        </div>
      </div>
      <PopUpModal isOpen={openModal} onClose={closeModal} message={t("login.successful-login")}/>
    </div>
  );
};

export default Login;