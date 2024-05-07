import React from 'react';
import {getKakaoLoginLink} from "../../api/kakapApi";
import {Link} from "react-router-dom";
import kakaoLoginImage from "../../assets/images/KakaoLogin.png";

const link = getKakaoLoginLink()

function KakaoLoginComponent(props) {



    return (
        <div className="flex flex-col">
            {/*<div className="text-center text-blue-500 mt-5">로그인 시에 자동 가입처리 됩니다</div>*/}
            <div className="flex justify-center w-full mt-5">
                {/*<div*/}
                {/*    className="flex-3xl text-center m-6 text-[#1A1A1C] font-extrabold w-3/4 bg-[#FEE500] shadow-sm rounded p-2">*/}
                {/*    <Link to={link}>KAKAO LOGIN</Link>*/}
                {/*</div>*/}
                <Link to={link}>
                    <img
                        src={kakaoLoginImage}
                        alt="Kakao Login"
                        width={200}
                        style={{cursor: 'pointer'}} // 마우스 커서를 포인터로 변경
                    />
                </Link>
            </div>
        </div>
    );
}

export default KakaoLoginComponent;