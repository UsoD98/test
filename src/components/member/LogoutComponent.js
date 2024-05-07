import React from 'react';
import useCustomLogin from "../../hooks/useCustomLogin";

function LogoutComponent(props) {
    const { doLogout, moveToPath } = useCustomLogin();

    const handleClickLogout = () => {
        doLogout();
        moveToPath("/");
    };

    return (
        <div className="mt-60 fixed flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">로그아웃 되었습니다</h1>
                <p className="text-gray-600">안전하게 로그아웃 되었습니다.</p>
                <p className="text-gray-600 mb-6">다음에 다시 방문해주세요.</p>
                <button
                    className=" bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleClickLogout}
                >
                    메인화면으로 이동
                </button>
            </div>
        </div>
    );
}

export default LogoutComponent;