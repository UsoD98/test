import React, { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakapApi";
import { useDispatch } from "react-redux";
import { login } from "../../slices/loginSlice";
import useCustomLogin from "../../hooks/useCustomLogin";

function KakaoRedirectPage(props) {
    const [searchParams] = useSearchParams();
    const { moveToPath } = useCustomLogin();
    const authCode = searchParams.get('code');
    const error = searchParams.get('error')
    const dispatch = useDispatch();

    useEffect(() => {

        if(error){

            moveToPath("/member/login")
        }else if(authCode){
            getAccessToken(authCode).then(accessToken => {
                getMemberWithAccessToken(accessToken)
                    .then(memberInfo => {
                        console.log("--------------------");
                        console.log(memberInfo);
                        dispatch(login(memberInfo));

                        // 로그인 성공 시 메인 페이지로 이동
                        if(memberInfo && memberInfo.social){
                            moveToPath("/")
                        }
                        // 로그인 실패 시 로그인 페이지로 이동
                        else{
                            moveToPath("/member/login")
                        }
                    })
                    // 로그인 실패 시 로그인 페이지로 이동
                    .catch(error => {
                        console.error("Error getting member info:", error);
                        moveToPath("/member/login");
                    });
            });
        }
        // getAccessToken(authCode).then(accessToken => {
        //     getMemberWithAccessToken(accessToken)
        //         .then(memberInfo => {
        //             console.log("--------------------");
        //             console.log(memberInfo);
        //             dispatch(login(memberInfo));
        //
        //             if (memberInfo && memberInfo.social) {
        //                 moveToPath("/");
        //             } else {
        //                 moveToPath("/");
        //             }
        //         })
        //         .catch(error => {
        //             console.error("Error getting member info:", error);
        //             moveToPath("/login"); // 오류 발생 시 로그인 페이지로 이동
        //         });
        // });
    }, [authCode]);

    return (
        <div>
            <div>Kakao Login Redirect</div>
        </div>
    );
}

export default KakaoRedirectPage;