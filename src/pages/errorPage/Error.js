import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-screen flex items-center justify-center">
            <div className="text-center text-white p-8 sm:p-12 border-2 border-purple-700 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
                <p className="text-lg mb-6">
                    An unexpected error occurred. Please try refreshing the page, or click below to go back to the homepage.
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handleRefresh}
                        className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
                    >
                        Refresh
                    </button>
                    <Link
                        to="/"
                        className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Error;
