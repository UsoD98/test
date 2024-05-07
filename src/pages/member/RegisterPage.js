import React from 'react';
import BasicHeader from "../../layouts/BasicHeader";
import BasicFooter from "../../layouts/BasicFooter";
import RegisterComponent from "../../components/member/RegisterComponent";

function RegisterPage(props) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <BasicHeader/>

            <main className="flex-grow py-6 px-4">
                <RegisterComponent/>
            </main>

            <BasicFooter/>


        </div>
    );
}

export default RegisterPage;