import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import authStore from '../store/authStore'

const PublicRoutes = () => {
    const {token} = authStore()
    //  로그인 유저이면 홈으로
    return token?<Navigate to="/"/>: <Outlet/>
}

export default PublicRoutes