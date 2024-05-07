import React from 'react';
import LoginComponent from "../../components/member/LoginComponent";
import BasicHeader from "../../layouts/BasicHeader";
import BasicFooter from "../../layouts/BasicFooter";


function LoginPage(props) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <BasicHeader/>

            <main className="flex-grow py-6 px-4">
                <LoginComponent/>
            </main>

            <BasicFooter/>


        </div>

    );
}

export default LoginPage;