// test/src/layouts/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen }) => {
    return (
        <div
            className={`fixed opacity-90 inset-y-0 left-0 z-40 w-64 bg-gray-800 transition-transform duration-300 transform ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className="py-4 px-6">
                {/* Sidebar content */}
                <div className="flex flex-col space-y-4">
                    <Link to="/" className="text-white hover:text-gray-300">
                        Main
                    </Link>
                    <Link to="/about" className="text-white hover:text-gray-300">
                        Study
                    </Link>
                    <Link to="/community" className="text-white hover:text-gray-300">
                        Community
                    </Link>
                    <Link to="/todo" className="text-white hover:text-gray-300">
                        Todo
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;