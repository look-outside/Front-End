import axios from 'axios';
import { BASE_URL } from '../utils/proxy';

export const AllList = (curPage :number) => { //전체 글목록
    return axios.get(`${BASE_URL}/manager/article`, {
        params: {page: curPage} 
    })
}

export const CateList = (selected :string, curPage :number) => { //카테고리별 글목록
    return axios.get(`${BASE_URL}/manager/article/${selected}`, {
        params: {page: curPage} 
    })
}

export const TypeUser = (role :string, curPage :number) => { //회원or관리자 목록
    return axios.get(`${BASE_URL}/manager/user`, {
        params: {
            Role: role,
            page: curPage,
        }
    })
}

export const DeleteUser = (dels :number[]) => { //회원삭제
    return axios.delete(`${BASE_URL}/manager/user/${dels}`)
}

export const AdminUser = (admins :number[]) => { //관리자 임명, 해임
    return axios.put(`${BASE_URL}/manager/user/${admins}`)
}