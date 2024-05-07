import React from 'react';
import useCustomLogin from "../../hooks/useCustomLogin";
import KakaoLoginComponent from "./KakaoLoginComponent";


const initStates = {
    email: "",
    pw: ""
}

function LoginComponent(props) {
    const [loginParam, setLoginParam] = React.useState(initStates)
    const { doLogin, moveToPath } = useCustomLogin()

    const handleChange = (e) => {
        loginParam[e.target.name] = e.target.value
        setLoginParam({ ...loginParam })
    }

    const handleClickLogin = (e) => {
        doLogin(loginParam).then(data => {
            if (data.error) {
                alert("이메일과 패스워드를 확인해 주세요")
            } else {
                moveToPath("/")
            }
        })
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">LOGIN</h2>
            <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-2">Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    value={loginParam.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block font-bold mb-2">Password</label>
                <input
                    id="password"
                    name="pw"
                    type="password"
                    value={loginParam.pw}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="flex justify-center grid-rows-2 items-end">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold h-full py-3 px-4 mr-6 rounded"
                    onClick={handleClickLogin}
                >
                    로그인
                </button>
                <KakaoLoginComponent />
            </div>
        </div>
    );
}

export default LoginComponent;