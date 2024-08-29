import React from 'react'
import { Container } from 'react-bootstrap'
import NavConst from '../../../constant/nav_constant'
import { Link, useNavigate } from 'react-router-dom'

function DesktopNav() {
    const navigate = useNavigate();

    return (
        <div className='hidden md:flex md:justify-center md:h-full md:py-2 md:w-full bg-white drop-shadow-md relative z-30'>
            <Container className="flex justify-between md:gap-0 w-full p-0 m-0">
                <div className="flex justify-start items-center gap-10 md:gap-4 w-4/12">
                    <div className='w-5/12'>
                        <img
                            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
                            alt="icon"
                            className="w-28 lg:w-36 h-auto"
                        />
                    </div>
                    <div className='flex gap-2 bg-blue-100 px-2.5 py-1 rounded-2xl md:w-4/12 lg:w-5/12'>
                        <span><i className="bi bi-search text-gray-400 text-xl"></i></span>
                        <input className='bg-transparent focus:ring-0 selection:ring-0 focus:outline-none w-full' placeholder='Search tyres for your Vehicle' />
                    </div>
                </div>
                <div className="flex items-center justify-end w-8/12">
                    <div className='flex items-center justify-center w-10/12 md:mr-8 lg:mr-0'>
                        <div className="w-full flex gap-3 items-start justify-evenly">
                            {NavConst.map((elem, idx) => (
                                <div className="relative group" key={idx}>
                                    <button
                                        className="inline-flex justify-center rounded-md hover:shadow-sm text-sm font-bold text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-offset-0 w-min h-full p-1 text-left lg:w-full lg:text-base"
                                        onClick={() => {
                                            navigate(elem.link);
                                            console.log(elem.link);
                                        }}
                                    >
                                        {elem.title}
                                    </button>
                                    {elem.menu && (
                                        <div className="hidden group-hover:block absolute left-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-40">
                                            <div className="py-1">
                                                {elem.text && (
                                                    <p className="px-4 py-2 text-gray-700 font-semibold">{elem.text}</p>
                                                )}
                                                {elem.menu.map((item, idx) => (
                                                    <Link key={idx} to={item.link}>
                                                        <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                                                            {item.title}
                                                        </button>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex items-center justify-end w-2/12  lg:ml-0'>
                        <button className='flex items-center justify-center hover:rounded-md hover:shadow-sm hover:bg-gray-50 px-1 py-2 font-bold text-sm gap-0.5' onClick={() => navigate("/login")}>
                            <span><i className="bi bi-person text-2xl"></i></span>
                            <span>Login</span>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
}


export default DesktopNav