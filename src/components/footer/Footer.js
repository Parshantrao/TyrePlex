import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
    return (
        <Container className='mb-2 p-0'>
            <div className='shadow-[0_1px_3px_rgba(0,0,0,0.17),0_1px_1px_rgba(0,0,0,0.18)] bg-white'>
                <div className='p-4  border-b'>
                    <div className='row space-y-4 sm:space-y-0'>
                        <div className='sm:w-4/12 '>
                            <div className='flex justify-center items-center flex-col gap-3'>
                                <img
                                    src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
                                    alt="icon"
                                    className="w-28 lg:w-36 h-auto"
                                />
                                <div>
                                    <ul className='flex gap-4'>
                                        <li>
                                            <button>
                                                <img src='https://cdn.tyreplex.net/themes/moonlight/images/fb-icon.png?v=526&tr=w-24,q-40' alt='facebook-icon' className='w-[15px] h-[22px] '/>
                                            </button>
                                        </li>
                                        <li>
                                            <button>
                                                <img src='https://cdn.tyreplex.net/themes/moonlight/images/insta-icon.png?v=526&tr=w-24,q-40' alt='facebook-icon' className='w-[23px] h-[22px] '/>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='row w-8/12 flex flex-col sm:flex-row gap-2'>
                            <div className='col flex flex-col gap-2 px-3 sm:p-0'>
                                <span className='text-gray-500 text-sm md:text-base '>Who We Are</span>
                                <span className='text-gray-500 text-sm md:text-base '>Are you a Tyre Dealer?</span>
                            </div>
                            <div className='col flex flex-col gap-2 px-3 sm:p-0'>
                                <span className='text-gray-500 text-sm md:text-base '>Privacy Policy </span>
                                <span className='text-gray-500 text-sm md:text-base '>Terms of use </span>
                            </div>
                            <div className='col flex flex-col gap-2 px-3 sm:p-0'>
                                <span className='text-gray-500 text-sm md:text-base '>Contact Us</span>
                                <span className='text-gray-500 text-sm md:text-base '>Career</span>
                                <span className='text-gray-500 text-sm md:text-base '>Shipping & Return Plicy</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-3 text-center'>
                    <span className='text-gray-500 text-sm md:text-base'>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</span>
                </div>
            </div>
        </Container>
    )
}

export default Footer