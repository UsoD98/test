// test/src/layouts/BasicHeader.js
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Sidebar from "./Sidebar";
import {useSelector} from "react-redux";

const BasicHeader = () => {

    const host = `http://223.130.161.148:80`

    const loginState = useSelector(state => state.loginSlice)

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Header */}
            <header className="bg-white shadow-md py-4 px-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">
                        <Link to={'/'}>Code</Link>
                    </h1>

                    <div className="flex items-center">
                        {!loginState.email ?
                            <>
                                <Link to={`${host}/member/login`}
                                      className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 px-4 rounded mr-4"
                                >
                                    로그인
                                </Link>
                                <Link to={`${host}/member/register`}
                                      className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 px-4 rounded mr-4"
                                >
                                    회원가입
                                </Link>
                            </>
                            :
                            <>
                            <Link to={`${host}/member/logout`}
                                className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4"
                            >로그아웃</Link>
                            </>
                        }

                        <button
                            className="text-gray-600 hover:text-gray-800 focus:outline-none"
                            onClick={toggleSidebar}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        </>
    );
};

export default BasicHeader;