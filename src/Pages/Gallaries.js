import React from 'react';
import '../Assets/CSS/Gallery.css';
import Gallery1 from '../Assets/Images/gallery1.jpg';
import Gallery2 from '../Assets/Images/gallery2.avif';
import Gallery3 from '../Assets/Images/gallery3.webp';
import Gallery4 from '../Assets/Images/gallery4.jpg';
import Gallery5 from '../Assets/Images/gallery5.jpg';
import Gallery6 from '../Assets/Images/gallery6.jpg';
import Gallery7 from '../Assets/Images/yafe3.png';
import Gallery8 from '../Assets/Images/gallery7.webp';
import Gallery9 from '../Assets/Images/gallery8.jpg';
import Gallery10 from '../Assets/Images/gallery9.jpg';
import Gallery11 from '../Assets/Images/gallery10.jpg';
import Gallery12 from '../Assets/Images/yafe10.jpg';
import Gallery13 from '../Assets/Images/gallery11.jpg';
import Gallery14 from '../Assets/Images/gallery12.jpg';
import Gallery15 from '../Assets/Images/gallery13.jpg';
import Gallery16 from '../Assets/Images/gallery14.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Gallaries() {

    const Gallery = [{
        id: 1,
        image: Gallery1,
        value: 'Hand Tools'
    },
    {
        id: 2,
        image: Gallery2,
        value: 'HAMMERS & CHISELS'
    },
    {
        id: 3,
        image: Gallery3,
        value: 'WRENCHES & SOCKETS'
    },
    {
        id: 4,
        image: Gallery4,
        value: 'MEASURING TOOLS'
    },
    {
        id: 5,
        image: Gallery5,
        value: 'ABRASIVE & ADHESIVE'
    },
    {
        id: 6,
        image: Gallery6,
        value: 'LIFTING TOOLS'
    },
    {
        id: 7,
        image: Gallery7,
        value: 'BUILDING MATERIALS'
    },
    {
        id: 8,
        image: Gallery8,
        value: 'POWER TOOLS'
    },
    {
        id: 9,
        image: Gallery9,
        value: 'AGRICULTURE TOOLS'
    },
    {
        id: 10,
        image: Gallery10,
        value: 'WHEEL & TROLLEY'
    },
    {
        id: 11,
        image: Gallery11,
        value: 'DOOR LOCKS'
    },
    {
        id: 12,
        image: Gallery12,
        value: 'SAFETY WEARS'
    },
    {
        id: 13,
        image: Gallery13,
        value: 'WELDING ACCESSORIES'
    },
    {
        id: 14,
        image: Gallery14,
        value: 'PLYWOODS'
    },
    {
        id: 15,
        image: Gallery15,
        value: 'SANITARY WARES'
    },
    {
        id: 16,
        image: Gallery16,
        value: 'TOOLS BAGS'
    },
    ]
    return (
        <div className='container mt-2'>
            {/* <h1>Collections</h1> */}
            <div className='row'>
                {Gallery?.map((item, index) => (
                    <div className='col-lg-3 col-md-4 col-sm-6 co-xs-12 mt-2'>
                        <img alt="Building Materials" src={item?.image} className='yafe-gallery-img' />
                        <p className="yafe-gal-text">{item?.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Gallaries;