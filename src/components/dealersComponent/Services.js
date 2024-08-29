import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from 'react-bootstrap/Card';
function Services() {
    const cardsItem = [
        {
            title: "Wheel Balancing",
            image: <img src='https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100' alt='icon' />
        },
        {
            title: "Wheel Alignment",
            image: <img src='https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100' alt='icon' />
        }
    ]
    const items = [
        <div className='m-3 flex flex-col justify-center items-center py-3 bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.17),0_1px_1px_rgba(0,0,0,0.18)] '>
            <img src='https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100' alt='icon' />
            <span className='text-center pt-3 pb-4 font-semibold'>
                <h5>Wheel Balancing</h5>
            </span>
            <button className='rounded bg-red-600 text-white p-3'>Book Now</button>
        </div>,
        <div className=' m-3 flex flex-col justify-center items-center py-3 bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.17),0_1px_1px_rgba(0,0,0,0.18)] make-featured'>
            <img src='https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100' alt='icon' />

            <span className='text-center pt-3 pb-4 font-semibold'>
                <h5>Wheel Alignment</h5>
            </span>
            <button className='rounded bg-red-600 text-white p-3'>Book Now</button>
        </div>
    ]

    const responsive = {
        0: {
            items: 1, // Display 1 item on screens 0px and up
        },
        600: {
            items: 3, // Display 2 items on screens 600px and up
        },
        900: {
            items: 4, // Display 3 items on screens 900px and up
        },
        1200: {
            items: 5, // Display 4 items on screens 1200px and up
        },
        1500: {
            items: 6, // Display 5 items on screens 1500px and up
        }
    };
    return (
        <div className='absolut bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.17),0_1px_1px_rgba(0,0,0,0.18)] p-3 mt-4'>

            <h1 className='font-bold mb-4'>Services offered by this dealer</h1>
            <div className='flex gap-2'>

                {
                    cardsItem.map((item, idx) => {
                        return (
                            <Card style={{ width: '14rem' }} key={idx}>
                                <Card.Header className='bg-white border-0 self-center'>
                                    {item.image}
                                </Card.Header>
                                <Card.Body className='self-center text-center'>
                                    <Card.Title className='text-base font-semibold'>
                                        <span>{item.title}</span></Card.Title>
                                    <button className='rounded bg-red-600 text-white px-3 py-2'>Book Now</button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
            {/* <AliceCarousel disableButtonsControls={true} disableDotsControls={true} mouseTrackspan infinite={true} responsive={responsive} items={items} /> */}


        </div>
    )
}

export default Services