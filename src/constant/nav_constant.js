const NavConst = [
    {
        title: "Car Tyres",
        text: "Popular Car Tyre Brands",
        icon:<img src="./sedan.png" alt="icon" className="w-8 opacity-60"></img>,
        menu: [
            {
                title: "MRF Tyres",
                link: "/car-tyres/mrf",
                active: window.location.pathname.includes('/car-tyres/mrf')
            },
            {
                title: "CEAT Tyres",
                link: "/car-tyres/ceat",
                active: window.location.pathname.includes('car-tyres/ceat')
            },
            {
                title: "Goodyear Tyres",
                link: "/car-tyres/goodyear",
                active: window.location.pathname.includes('car-tyres/goodyear')
            },
            {
                title: "Apollo Tyres",
                link: "/car-tyres/apollo",
                active: window.location.pathname.includes('car-tyres/apollo')
            },
            {
                title: "Bridgestone Tyres",
                link: "/car-tyres/bridgestone",
                active: window.location.pathname.includes('car-tyres/bridgestone')
            },
            {
                title: "JK Tyres",
                link: "/car-tyres/jk",
                active: window.location.pathname.includes('car-tyres/jk')
            },
            {
                title: "Michelin Tyres",
                link: "/car-tyres/michelin",
                active: window.location.pathname.includes('car-tyres/michelin')
            },
            {
                title: "All Car Tyres",
                link: "/car-tyres",
            },

        ]
    },
    {
        title: "Bike Tyres",
        text: "Popular Bike Tyre Brands",
        icon:<img src="./motorcycle.png" alt="icon" className="w-8 opacity-60"></img>,
        menu: [
            {
                title: "MRF Tyres",
                link: "/bike-tyres/mrf",
                active: window.location.pathname.includes('bike-tyres/mrf')
            },
            {
                title: "CEAT Tyres",
                link: "/bike-tyres/ceat",
                active: window.location.pathname.includes('bike-tyres/ceat')
            },
            {
                title: "Apollo Tyres",
                link: "/bike-tyres/apollo",
                active: window.location.pathname.includes('bike-tyres/apollo')
            },
            {
                title: "Bridgestone Tyres",
                link: "/bike-tyres/bridgestone",
                active: window.location.pathname.includes('bike-tyres/bridgestone')
            },
            {
                title: "JK Tyres",
                link: "/bike-tyres/jk",
                active: window.location.pathname.includes('bike-tyres/jk')
            },
            {
                title: "Michelin Tyres",
                link: "/bike-tyres/michelin",
                active: window.location.pathname.includes('bike-tyres/michelin')
            },
            {
                title: "All Bike Tyres",
                link: "/bike-tyres",
            },

        ]
    },
    {
        title:"Tyre Pressure",
        link:"/tyre-pressure",
        icon:<img src="./gauge.png" alt="icon" className="w-8 opacity-60 h-8"></img>
    },
    {
        title:"Commercial Tyres",
        icon:<img src="./truck.png" alt="icon" className="w-8 opacity-60"></img>,
        menu:[
            {
                title:"All Commercial Tyres",
                link:"/commercial-tyres"
            }
        ]
    },
    {
        title:"Accessories",
        icon:<img src="./car-service.png" alt="icon" className="w-8 opacity-60 h-8"></img>,
        menu:[
            {
                title:"Accessories",
                link:'/accessories'
            },
            {
                title:"Batteries",
                link:"/batteries"
            },
            {
                title:"Alloys Wheels",
                link:"/alloy"
            }
        ]
    },
    {
        title:"More",
        icon:<img src="./more.png" alt="icon" className="w-8 opacity-70 h-6"></img>,
        menu:[
            {
                title:"CashBack Offer",
                link:'offers-terms-conditions'
            },
            {
                title:"Find Tyre Dealers",
                link:"tyre-dealers-in-india"
            },
            {
                title:"Compare Tyre",
                link:"compare-tyres"
            },
            {
                title:"Are You A Tyre Dealer",
                link:"dealer-details"
            },
            {
                title:"Wheel Balancing",
                link:"wheel-balancing"
            },
            {
                title:"Wheel Alignment",
                link:"wheel-alignment"
            },
        ]
    }
]

export default NavConst