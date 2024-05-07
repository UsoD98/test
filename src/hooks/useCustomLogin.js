// 로그인을 하면 ~~님 반갑습니다 같은 메세지를 띄우고 싶을 때 사용
// 로그인하는 경로로 이동 / 로그인 성공 시 수행할 수 있는 기능을 위해 커스텀 훅을 만들어 사용



import {Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginPostAsync, logout} from "../slices/loginSlice";

const useCustomLogin = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const loginState = useSelector(state => state.loginSlice)

    const isLogin = loginState.email ? true :false // 로그인 여부를 판단

    const doLogin = async (loginParam) => {

        const action = await dispatch(loginPostAsync(loginParam))

        return action.payload

    }

    const doLogout = () => {

        dispatch(logout())

    }

    const moveToPath = (path) => {

        navigate({pathname: path}, {replace:true})

    }

    const moveToLogin = () => {

        navigate({pathname: '/member/login'}, {replace:true})

    }

    const moveToLoginReturn = () => {

        return <Navigate replace to="/member/login"/>

    }

    return {loginState, isLogin, doLogin, doLogout, moveToPath, moveToLogin, moveToLoginReturn}

}

export default useCustomLogin;