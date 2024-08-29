import React from 'react'

function QueryComponent() {
    return (
        <div className='row m-0 absolut rounded-md rounded-b-none shadow-[0_1px_3px_rgba(0,0,0,0.17),0_1px_1px_rgba(0,0,0,0.18)] p-3 mt-4 bg-yellow-200 py-8'>
            <div className='col w-7/12 flex flex-col  justify-start'>
                <h1 className='font-bold mb-3 text-[18px] text-gray-700'>Have a question about Tyres?</h1>
                <h2 className='text-slate-600'>Get an answer in 24 hours from our expert</h2>
                <input className='mt-4 px-3 py-2 rounded-3xl shadow-[-1px_6px_2px_4px_#996b193b] border-yellow-400 border-2 focus:ring-0 focus:outline-none' placeholder='Ask or search your question' />
            </div>
            <div className='col w-5/12 flex items-center justify-center'>
                <img src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60" alt='img' className='w-20 h-20' />
            </div>

        </div>
    )
}

export default QueryComponent