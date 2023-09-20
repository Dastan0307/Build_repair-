import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LoginSocialGoogle, LoginSocialFacebook} from "reactjs-social-login";
import {GoogleLoginButton, FacebookLoginButton} from "react-social-login-buttons";
import {ROUTES} from "../../utils/routes";
import {facebookLogin, googleLogin} from "../../features/user/userSlice";
import FB from "../../images/facebook-logo.svg"

const SocialLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoogleLogin = async ({ provider, data }) => {
        console.log(provider, data)
        const userData = {
            email: data.email,
            name: data.given_name,
        }
        if (data.family_name) {
            userData.surname = data.family_name
        }
        try {
            const loginResult = await dispatch(googleLogin(userData))
            if (loginResult.payload) {
                navigate(ROUTES.HOME)
            } else {
                console.log('Google login dispatch failed.')
            }
        } catch (err) {
            console.log('Error during Google login dispatch:', err)
        }
    }

    const handleFacebookLogin = async (response) => {
        console.log(response)
        const userData = {
            email: response.data.email,
            name: response.data.first_name,
        }
        if (response.data.last_name) {
            userData.surname = response.data.last_name
        }
        try {
            const loginResult = await dispatch(facebookLogin(userData))
            if (loginResult.payload) {
                navigate(ROUTES.HOME)
            } else {
                console.log('Facebook login dispatch failed.')
            }
        } catch (err) {
            console.log('Error during Facebook login dispatch:', err)
        }
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', gap: 46}}>
            <LoginSocialGoogle
                client_id={process.env.REACT_APP_GG_APP_ID}
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={handleGoogleLogin}
                onReject={(err) => {
                    console.log(err);
                }}
            >
                <GoogleLoginButton
                    style={{
                        margin: 0,
                        padding: 0,
                        height: 32,
                        boxShadow: 'none',
                        marginBottom: 17,
                    }}
                    text=""
                />
            </LoginSocialGoogle>

            <LoginSocialFacebook
                appId={process.env.REACT_APP_FB_APP_ID}
                onResolve={handleFacebookLogin}
                onReject={(err) => {
                    console.log(err)
                }}
            >
                <FacebookLoginButton
                    style={{
                        margin: 0,
                        padding: 0,
                        height: 32,
                        boxShadow: 'none',
                        background: "none",
                        position: 'relative',
                        width: 32
                    }}
                    activeStyle={{background: "none"}}
                >
                    <img src={FB} alt="i" style={{display: 'flex', position: 'absolute', top: 0, left: 0}}/>
                </FacebookLoginButton>
            </LoginSocialFacebook>
        </div>
    );
};

export default SocialLogin;