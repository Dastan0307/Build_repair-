import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

import {ROUTES} from "../../utils/routes";

import Home from "../Home/Home";
import AboutPage from "../AboutPage/AboutPage";
import BuildPage from "../BuildPage/BuildPage";
import BuildHouse from "../BuildPage/components/BuildHouse";
import BuildBanya from "../BuildPage/components/BuildBanya";
import BuildGarage from "../BuildPage/components/BuildGarage";
import BuildRoof from "../BuildPage/components/BuildRoof";
import BuildWall from "../BuildPage/components/BuildWall";
import BuildFoundation from "../BuildPage/components/BuildFoundation";
import RepairPage from "../RepairPage/RepairPage";
import RepairInsulation from "../RepairPage/components/RepairInsulation";
import RepairKitchen from "../RepairPage/components/RepairKitchen";
import RepairRooms from "../RepairPage/components/RepairRooms";
import RepairBathroom from "../RepairPage/components/RepairBathroom";
import RepairHallway from "../RepairPage/components/RepairHallway";
import RepairApartment from "../RepairPage/components/RepairApartment";
import RepairWaterSupply from "../RepairPage/components/RepairWaterSupply";
import RepairNovostroy from "../RepairPage/components/RepairNovostroy";
import RepairElectricity from "../RepairPage/components/RepairElectricity";
import ContactsPage from "../ContactsPage/ContactsPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import PasswordReset from "../PasswordReset/PasswordReset";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const AppRoutes = () => {
    const isAuthenticated = useSelector(state => state.user.currentUser)

    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
            <Route path={ROUTES.BUILD} element={<BuildPage/>}>
                <Route path='house' element={<BuildHouse/>}/>
                <Route path='banya' element={<BuildBanya/>}/>
                <Route path='garage' element={<BuildGarage/>}/>
                <Route path='roof' element={<BuildRoof/>}/>
                <Route path='wall' element={<BuildWall/>}/>
                <Route path='foundation' element={<BuildFoundation/>}/>
            </Route>
            <Route path={ROUTES.REPAIR} element={<RepairPage/>}>
                <Route path='insulation' element={<RepairInsulation/>}/>
                <Route path='kitchen' element={<RepairKitchen/>}/>
                <Route path='rooms' element={<RepairRooms/>}/>
                <Route path='bathroom' element={<RepairBathroom/>}/>
                <Route path='hallway' element={<RepairHallway/>}/>
                <Route path='apartment' element={<RepairApartment/>}/>
                <Route path='water-supply' element={<RepairWaterSupply/>}/>
                <Route path='novostroy' element={<RepairNovostroy/>}/>
                <Route path='electricity' element={<RepairElectricity/>}/>
            </Route>
            <Route path={ROUTES.CONTACTS} element={<ContactsPage/>}/>
            <Route path={ROUTES.LOGIN} element={<Login/>}/>
            <Route path={ROUTES.REGISTER} element={<Register/>}/>
            <Route path={ROUTES.PROFILE} element={isAuthenticated ? <Profile/> : <Navigate to={ROUTES.LOGIN}/>}/>
            <Route path={ROUTES.PASSWORD_RESET} element={<PasswordReset/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    )
};

export default AppRoutes;