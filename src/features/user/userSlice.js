import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify";

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async(userData) => {
        try {
            const res = await axios.post('http://localhost:8080/register', userData)
            console.log('user info:', res)
            return res.data.user
        } catch (err) {
            toast.error('Произошла ошибка: ' + err.message)
        }
    }
)

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userInfo) => {
        try {
            const res = await axios.post(`http://localhost:8080/login`, userInfo)
            console.log(res.data)
            if (res.data.user) {
                toast.success('Вход выполнен!')
                return res.data.user
            } else {
                toast.warning('Неверные данные!')
                return false
            }
        } catch (err) {
            if (err.response.status === 400) {
                toast.warning('Неверные данные!')
            } else {
                toast.error('Произошла ошибка: ' + err.message)
            }
        }
    }
)

export const googleLogin = createAsyncThunk(
    'user/googleLogin',
    async(userData) => {
        try {
            const res = await axios.post('http://localhost:8080/googleUsers', userData)
            if (res.data) {
                toast.success('Вход через Google выполнен!')
                return res.data
            } else {
                toast.warning('Неверные данные!')
                return false
            }
        } catch (err) {
            toast.error('Произошла ошибка: ' + err.message)
        }
    }
)

export const facebookLogin = createAsyncThunk(
    'user/facebookLogin',
    async(userData) => {
        try {
            const res = await axios.post('http://localhost:8080/facebookUsers', userData)
            if (res.data) {
                toast.success('Вход через Facebook выполнен!')
                return res.data
            } else {
                toast.warning('Неверные данные!')
                return false
            }
        } catch (err) {
            toast.error('Произошла ошибка: ' + err.message)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        loading: false,
        error: null,
    },
    reducers: {
        logoutUser: (state) => {
            state.currentUser = null
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.currentUser = action.payload
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.currentUser = action.payload
        })
        builder.addCase(googleLogin.fulfilled, (state, action) => {
            state.currentUser = action.payload
        })
        builder.addCase(facebookLogin.fulfilled, (state, action) => {
            state.currentUser = action.payload
        })
    }
})

export const {logoutUser} = userSlice.actions

export default userSlice.reducer