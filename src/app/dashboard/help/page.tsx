'use client';

import { useState } from "react";
import Faqs from "@/app/components/faqs";
import axios from "axios";

export default function HelpPage() {
    const [activeTab, setActiveTab] = useState("faqs");

    return (
        <div className="w-full flex flex-col overflow-y-auto">
            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mb-6">
                <button
                    onClick={() => setActiveTab("faqs")}
                    className={`px-4 py-2 text-lg font-semibold ${activeTab === "faqs" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"} rounded-lg`}
                >
                    FAQs
                </button>
                <button
                    onClick={() => setActiveTab("contact")}
                    className={`px-4 py-2 text-lg font-semibold ${activeTab === "contact" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"} rounded-lg`}
                >
                    Contact Us
                </button>
            </div>

            {/* Conditional Rendering of FAQ or Contact Us Form */}
            <div className="flex-auto">
                {activeTab === "faqs" ? (
                    <Faqs />
                ) : (
                    <form className="space-y-6 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold text-gray-800 text-center">Contact Us</h1>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Message (i.e., I need help with My Portfolio?)
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 sm:text-sm"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
