import axios from "axios";

export const API_SERVER_HOST = "http://223.130.161.148:8080"

const host = `${API_SERVER_HOST}/api/member`

export const loginPost = async (loginParam) => {

    const header = {headers: {"Content-Type": "x-www-form-urlencoded"}}

    const form = new FormData()
    form.append("username", loginParam.email)
    form.append("password",loginParam.pw)

    const res = await axios.post(`${host}/login`, form, header)

    return res.data
}

export const modifyMember = async (member) => {

    const res = await axios.put(`${host}/modify`, member)

    return res.data
}

export const registerMember = async(member) => {
    const memberData = {
        email: member.email,
        pw: member.password,
        nickname: member.nickname,
        social: false, // 수정이 필요할 수 있습니다.
        roleNames: ['USER'] // 수정이 필요할 수 있습니다.
    }

    const res = await axios.post(`${host}/register`, memberData)

    return res.data
}