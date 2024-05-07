import { Link } from "react-router-dom";
import React from "react";

const BasicFooter = () => {
    return (
        <nav id='navbar' className="min-h-full bg-gray-100 flex flex-col justify-end">

            <div className="bg-white shadow-md py-4 px-6">
                <div className="flex items-center justify-between">
                    <ul className="flex items-center justify-between">
                        <li className="text-xl font-bold text-gray-800 pr-2">
                            <Link to={'/'}>Main</Link>
                        </li>
                        <li className="text-xl font-bold text-gray-800 pr-2">
                            <Link to={'/about'}>Study</Link>
                        </li>
                        <li className="text-xl font-bold text-gray-800 pr-2">
                            <Link to={'/community'}>Community</Link>
                        </li>
                        <li className="text-xl font-bold text-gray-800">
                            <Link to={'/todo/'}>Todo</Link>
                        </li>
                    </ul>


                </div>

            </div>
            <footer className="bg-gray-800 py-4 px-6">
                <p className="text-sm text-gray-300">
                    &copy; 2024 My App. All rights reserved.
                </p>
            </footer>

        </nav>
    );
}

export default BasicFooter;