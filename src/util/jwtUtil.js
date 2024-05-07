//Before : 문제가 있거나 할 때 동작하는 기능 설계
// accessToken을 써야 하는 애들은 JWT axios.post/get을 사용
// 그게 아닌 경우에는 그냥 axios. ~ 를 사용

import axios from "axios";
import {getCookie, setCookie} from "./cookieUtil";
import {API_SERVER_HOST} from "../api/todoApi";

const jwtAxios = axios.create()

// accessToken이 만료되었을 때, refreshToken을 이용해서 새로운 accessToken을 발급받는다.
const refreshJWT = async (accessToken, refreshToken) => {

    const host = API_SERVER_HOST

    const header = {headers:{'Authorization':`Bearer ${accessToken}`}}

    // token에 문제가 있으니 jwtAxios가 아닌 axios를 사용
    const res = await axios.get(`${host}/api/member/refresh?refreshToken=${refreshToken}`, header)

    // res.data는 새로 발급받은 accessToken과 refreshToken이다.
    console.log(res.data)

    return res.data
}

const beforeReq = (config) => {

    console.log('before request..........')

    // 설명 : 로그인이 필요한 경우에는 accessToken을 헤더에 넣어줘야 한다.
    const memberInfo = getCookie("member")

    // 쿠키 정보가 없으면 로그인이 필요하다.
    if (!memberInfo) {
        console.log("Member NOT FOUND")
        return Promise.reject(
            {
                response:
                    {
                        data:
                            {error: "REQUIRE_LOGIN"}
                    }
            }
        )
    }

    // 쿠키 정보가 있으면 accessToken을 헤더에 넣어준다.
    const {accessToken} = memberInfo

    console.log("--------------------" + accessToken)

    // http 헤더에다가 Authorization이라는 이름으로 accessToken을 넣어준다.
    config.headers.Authorization = `Bearer ${accessToken}`

    return config

}

const requestFail = (err) => {
    console.log("request error..........")

    return Promise.reject(err)
}

const beforeRes = async (res) => {
    console.log("before return response..........")

    const data = res.data

    if(data && data.error === 'ERROR_ACCESS_TOKEN'){

        console.log("--------------------1111")

        const memberCookieValue = getCookie('member')

        const result = await refreshJWT(memberCookieValue.accessToken, memberCookieValue.refreshToken)

        //새로운 accessToken과 refreshToken을 받아서 쿠키에 저장
        memberCookieValue.accessToken = result.accessToken
        memberCookieValue.refreshToken = result.refreshToken

        setCookie('member', JSON.stringify(memberCookieValue), 1)

        const originalRequest = res.config

        originalRequest.headers.Authorization = `Bearer ${result.accessToken}`

        return await axios(originalRequest)

    }

    return res
}

const responseFail = (err) => {
    console.log("response fail error..........")
    return Promise.reject(err);
}

//request를 보내기 전에 해야할 것, 뭔가 잘못됐을 때 해야할 것
jwtAxios.interceptors.request.use(beforeReq, requestFail)

//response를 받고 처리하기 전에 해야할 것, 실패했을 때 해야할 것
jwtAxios.interceptors.response.use(beforeRes, responseFail)


export default jwtAxios;