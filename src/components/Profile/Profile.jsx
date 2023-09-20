import React from 'react';
import {useSelector} from "react-redux";

const Profile = () => {
    const userData= useSelector(state => state.user.currentUser)
    console.log(userData)
    return (
        <div>
            <h2>Мой профиль</h2>
            <p>Имя: {userData.name}</p>
            <p>Фамилия: {userData.surname}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
};

export default Profile;