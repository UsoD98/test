import axios from "axios";


export const API_SERVER_HOST = "http://223.130.161.148:8080"

const prefix = `${API_SERVER_HOST}/api/todo`

export const getOne = async (tno) => {
    try {
        const res = await axios.get(`${prefix}/${tno}`);
        return res.data;
    } catch (error) {
        console.error(error);
        // Handle the error based on your application's requirement
    }
}

export const getList = async (pageParam) => {
    const {page, size} = pageParam

    const res = await axios.get(`${prefix}/list`, {params: {page, size}})

    return res.data
}

export const postAdd = async (todoObj) => {

    //JSON.stringify(obj) => JSON형태로 변환

    //axios 방식
    const res = await axios.post(`${prefix}/`, todoObj)

    return res.data
}

export const deleteOne = async (tno) => {

    const res =  await axios.delete(`${prefix}/${tno}`)

    return res.data
}

export const putOne = async (todo) => {

    const res = await axios.put(`${prefix}/${todo.tno}`, todo)

    return res.data
}