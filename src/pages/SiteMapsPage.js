import React from 'react';
import BasicHeader from "../layouts/BasicHeader";
import BasicFooter from "../layouts/BasicFooter";

function SiteMapsPage(props) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <BasicHeader/>

            <main className="flex-grow py-6 px-4">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
                    <div className="text-4xl mb-8 font-bold">
                        알고리즘 사이트
                    </div>
                    <div className="grid grid-cols-1 gap-8 w-1/2">
                        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                            <h2 className="text-3xl font-bold mb-4">한국</h2>
                            <ul className="space-y-2 text-xl">
                                <li><a href="https://www.acmicpc.net/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">백준</a></li>
                                <li><a href="https://programmers.co.kr/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">프로그래머스</a></li>
                                <li><a href="https://swexpertacademy.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">SWEA</a></li>
                                <li><a href="https://softeer.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">SOFTEER</a></li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                            <h2 className="text-3xl font-bold mb-4">외국</h2>
                            <ul className="space-y-2 text-xl">
                                <li><a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">LeetCode</a></li>
                                <li><a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">HackerRank</a></li>
                                <li><a href="https://www.codewars.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">CodeWars</a></li>
                                <li><a href="https://codeforces.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">CodeForces</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <BasicFooter/>
        </div>
    );
}

export default SiteMapsPage;