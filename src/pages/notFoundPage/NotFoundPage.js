import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <h2 className="mt-4 text-3xl font-semibold text-gray-600">Page Not Found</h2>
                <p className="mt-2 text-gray-500">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link to="/" className="mt-6 inline-block px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
