import React from 'react'
import AliceCarousel from 'react-alice-carousel';

function TyreBrands() {
    const items = [
        <div className=' m-3 flex flex-col justify-center items-center py-3 bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.17),0_1px_1px_rgba(0,0,0,0.18)] make-featured'>
            <span
                className="bg-no-repeat bg-[url('https://cdn.tyreplex.net/themes/moonlight/images/make_logo_sprite@2x.png?v=2300&tr=q-60')] h-[34px] w-[90px] md:w-[123px]"
                alt=""
                style={{
                    backgroundPositionY: '-481px',
                    backgroundSize: '85px',
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none'
                }}
            />

            <span className='text-center pt-3'>
                <h5>JK Tyre</h5>
            </span>
        </div>,
        <div className='m-3 flex flex-col justify-center items-center py-3 bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.17),0_1px_1px_rgba(0,0,0,0.18)] '>
            <span
                className="border-none outline-none ring-0 bg-no-repeat bg-[url('https://cdn.tyreplex.net/themes/moonlight/images/make_logo_sprite@2x.png?v=2300&tr=q-60')] h-[34px] w-[90px] md:w-[123px]"
                alt=''
                style={{ backgroundPositionY: '-831px', backgroundSize: '85px', maxHeight: 'inherit' }}
            ></span>
            <span className='text-center pt-3'>
                <h5>MRF</h5>
            </span>
        </div>,
        <div className='m-3 flex flex-col justify-center items-center py-3 bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.17),0_1px_1px_rgba(0,0,0,0.18)] '>
            <span
                className="border-none outline-none ring-0 bg-no-repeat bg-[url('https://cdn.tyreplex.net/themes/moonlight/images/make_logo_sprite@2x.png?v=2300&tr=q-60')] h-[34px] w-[90px] md:w-[123px]"
                alt=''
                style={{ backgroundPositionY: '-252px', backgroundSize: '85px', maxHeight: 'inherit' }}
            ></span>
            <span className='text-center pt-3'>
                <h5>CEAT</h5>
            </span>
        </div>,
        <div className='m-3 flex flex-col justify-center items-center py-3 bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.17),0_1px_1px_rgba(0,0,0,0.18)] '>
            <span
                className="border-none outline-none ring-0 bg-no-repeat bg-[url('https://cdn.tyreplex.net/themes/moonlight/images/make_logo_sprite@2x.png?v=2300&tr=q-60')] h-[34px] w-[90px] md:w-[123px]"
                alt=''
                style={{ backgroundPositionY: '-69px', backgroundSize: '85px', maxHeight: 'inherit' }}
            ></span>
            <span className='text-center pt-3'>
                <h5>Goodyear</h5>
            </span>
        </div>,
        <div className='m-3 flex flex-col justify-center items-center py-3 bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.17),0_1px_1px_rgba(0,0,0,0.18)] '>
            <span
                className="border-none outline-none ring-0 bg-no-repeat bg-[url('https://cdn.tyreplex.net/themes/moonlight/images/make_logo_sprite@2x.png?v=2300&tr=q-60')] h-[34px] w-[90px] md:w-[123px]"
                alt=''
                style={{ backgroundPositionY: '3px', backgroundSize: '85px', maxHeight: 'inherit' }}
            ></span>
            <span className='text-center pt-3'>
                <h5>Apollo</h5>
            </span>
        </div>,
        <div className='m-3 flex flex-col justify-center items-center py-3 bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.17),0_1px_1px_rgba(0,0,0,0.18)] '>
            <span
                className="border-none outline-none ring-0 bg-no-repeat bg-[url('https://cdn.tyreplex.net/themes/moonlight/images/make_logo_sprite@2x.png?v=2300&tr=q-60')] h-[34px] w-[90px] md:w-[123px]"
                alt=''
                style={{ backgroundPositionY: '-35px', backgroundSize: '85px', maxHeight: 'inherit' }}
            ></span>
            <span className='text-center pt-3'>
                <h5>Bridgestone</h5>
            </span>
        </div>,
    ]

    const responsive = {
        0: {
            items: 3, // Display 1 item on screens 0px and up
        },
        768: {
            items: 4, // Display 2 items on screens 600px and up
        },
        900: {
            items: 5, // Display 3 items on screens 900px and up
        },
        1200: {
            items: 5, // Display 4 items on screens 1200px and up
        },
        1500: {
            items: 6, // Display 5 items on screens 1500px and up
        }
    };
    return (
        <div className='absolut bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.17),0_1px_1px_rgba(0,0,0,0.18)] py-3 mt-4'>

            <h1 className='font-bold px-3'>Deals in</h1>
            <AliceCarousel disableButtonsControls={true} disableDotsControls={true} mouseTrackspan infinite={true} responsive={responsive} items={items} autoPlay={true} autoPlayInterval={8000} />

           
        </div>
    )
}

export default TyreBrands