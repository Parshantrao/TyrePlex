import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavConst from '../../../constant/nav_constant';

function MobileNav() {
    const navigate = useNavigate();

    // State to manage which dropdown is active
    const [showDropdownCanvas, setShowDropdownCanvas] = useState(null);
    const [showMainCanvas, setShowMainCanvas] = useState(false);

    // Handle opening of secondary off-canvas
    const handleDropdownClick = (idx) => {
        setShowDropdownCanvas(idx);
    };

    // Handle closing of secondary off-canvas
    const handleCloseDropdownCanvas = () => {
        setShowDropdownCanvas(null);
    };

    // Handle screen size changes to close offcanvas when screen size is greater than 'md'
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // 768px is the default 'md' breakpoint
                setShowMainCanvas(false);
                handleCloseDropdownCanvas();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='md:hidden flex justify-center h-full pl-2 py-2 pr-2.5 w-full bg-white drop-shadow-md'>
            <div className="flex justify-between w-full gap-4">
                <div className="flex justify-center items-center gap-2">
                    <Navbar expand={'lg'} className="p-0">
                        <Container fluid className='p-0'>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} className='flex items-center border-none ring-0 outline-none py-0 pl-0 pr-1 text-lg'
                                onClick={() => setShowMainCanvas(true)}
                            />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-lg`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                                placement="start"
                                show={showMainCanvas}
                                onHide={() => setShowMainCanvas(false)}
                                className="md:hidden !w-[60%] sm:!w-[40%]  bg-white"

                            >
                                <Offcanvas.Header closeButton className='bg-blue-100'>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                        <img
                                            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
                                            alt="icon"
                                            className="max-w-24 h-auto"
                                        />

                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='py-0'>
                                    <Nav className="flex flex-col gap-1">
                                        {NavConst.map((item, idx) => (
                                            <React.Fragment key={idx}>
                                                {item.menu ? (
                                                    <Nav.Link
                                                        className="flex items-center"
                                                        onClick={() => handleDropdownClick(idx)}
                                                    >
                                                        <div className="flex items-center gap-2 font-semibold">
                                                            {item.icon}
                                                            <span>{item.title}</span>
                                                        </div>
                                                    </Nav.Link>
                                                ) : (
                                                    <Nav.Link
                                                        as={Link}
                                                        to={item.link}
                                                        className="flex items-center"
                                                    >
                                                        <div className="flex items-center gap-2 font-semibold">
                                                            {item.icon}
                                                            <span>{item.title}</span>
                                                        </div>
                                                    </Nav.Link>
                                                )}
                                            </React.Fragment>
                                        ))}
                                        <Nav.Link
                                            as={Link}
                                            to={'/login'}
                                            className="flex items-center"
                                        >
                                            <div className="flex items-center gap-2 font-semibold">
                                                <img src="./user.png" alt="icon" className="w-6 ml-1 mr-1 opacity-70 h-6"></img>
                                                <span>Login/Sinup</span>
                                            </div>
                                        </Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>

                            {NavConst.map((item, idx) => (
                                <Offcanvas
                                    key={idx}
                                    show={showDropdownCanvas === idx}
                                    onHide={handleCloseDropdownCanvas}
                                    placement="start"
                                    className="md:hidden !w-[60%] sm:!w-[40%]  bg-white"
                                >
                                    <Offcanvas.Header closeButton className='py-2 pb-3'>
                                        <Offcanvas.Title className='font-normal text-lg'>
                                            {item.text || item.title}
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body className='py-0 px-6'>
                                        <Nav className="flex flex-col gap-0">
                                            {item.menu && item.menu.map((subItem, subIdx) => (
                                                <Nav.Link
                                                    key={subIdx}
                                                    as={Link}
                                                    to={subItem.link}
                                                    onClick={handleCloseDropdownCanvas}
                                                    active={subItem.active}
                                                    className='font-semibold'
                                                >
                                                    {subItem.title}
                                                </Nav.Link>
                                            ))}
                                        </Nav>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            ))}
                        </Container>
                    </Navbar>

                    <img
                        src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
                        alt="icon"
                        className="max-w-24 h-auto"
                    />
                </div>
                <div className="flex items-center justify-end">
                    <div className='flex gap-2 bg-blue-100 px-2 py-0.5 rounded-2xl'>
                        <span><i className="bi bi-search text-gray-400 text-xl"></i></span>
                        <input
                            className='bg-transparent focus:ring-0 selection:ring-0 focus:outline-none w-full min-w-12'
                            placeholder='Search For CEAT Car Tyres, Goodyear Car Tyres, Apollo Car Tyres'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileNav;
