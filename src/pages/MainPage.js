import React, {useState} from 'react';
import axios from "axios";
import BasicHeader from "../layouts/BasicHeader";
import BasicFooter from "../layouts/BasicFooter";
import {Link} from "react-router-dom";

const MainPage = () => {


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

            <BasicHeader
                // toggleSidebar={toggleSidebar}
                // isSidebarOpen={isSidebarOpen}
            />

            {/* Content */}
            <main className="flex-grow py-6 px-4">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-3xl font-semibold mb-4">Welcome to Code</h2>
                    <p className="text-gray-700 mb-4">
                        어제보다 나은 오늘을 위해
                        <br/>
                        오늘보다 나은 내일을 위해
                    </p>
                    <Link to={'/sitemap'}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"

                    >
                        문제 풀러 가기
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <BasicFooter/>


        </div>
    );
}

export default MainPage;