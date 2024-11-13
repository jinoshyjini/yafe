import React from 'react';
import '../Assets/CSS/Gallery.css';
import Gallery1 from '../Assets/Images/gallery1.png';
import Gallery2 from '../Assets/Images/gallery2.png';
import Gallery3 from '../Assets/Images/gallery3.png';
import Gallery4 from '../Assets/Images/gallery4.png';
import Gallery5 from '../Assets/Images/gallery5.png';
import Gallery6 from '../Assets/Images/gallery6.png';
import Gallery7 from '../Assets/Images/yafe3.png';
import Gallery8 from '../Assets/Images/gallery7.png';
import Gallery9 from '../Assets/Images/gallery8.png';
import Gallery10 from '../Assets/Images/gallery9.png';
import Gallery11 from '../Assets/Images/gallery10.png';
import Gallery12 from '../Assets/Images/yafe10.png';
import Gallery13 from '../Assets/Images/gallery11.png';
import Gallery14 from '../Assets/Images/gallery12.png';
import Gallery15 from '../Assets/Images/gallery13.png';
import Gallery16 from '../Assets/Images/gallery14.png';
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
        value: 'Hammers & Chisels'
    },
    {
        id: 3,
        image: Gallery3,
        value: 'Wrenches & Sockets'
    },
    {
        id: 4,
        image: Gallery4,
        value: 'Measuring Tools'
    },
    {
        id: 5,
        image: Gallery5,
        value: 'Abrasive & Adhesive'
    },
    {
        id: 6,
        image: Gallery6,
        value: 'Lifting Tools'
    },
    {
        id: 7,
        image: Gallery7,
        value: 'Building Materials'
    },
    {
        id: 8,
        image: Gallery8,
        value: 'Power Tools'
    },
    {
        id: 9,
        image: Gallery9,
        value: 'Agriculture Tools'
    },
    {
        id: 10,
        image: Gallery10,
        value: 'Wheel & Trolley'
    },
    {
        id: 11,
        image: Gallery11,
        value: 'Door Locks'
    },
    {
        id: 12,
        image: Gallery12,
        value: 'Safety Wears'
    },
    {
        id: 13,
        image: Gallery13,
        value: 'Welding Accessories'
    },
    {
        id: 14,
        image: Gallery14,
        value: 'Playwoods'
    },
    {
        id: 15,
        image: Gallery15,
        value: 'Sanitary Wears'
    },
    {
        id: 16,
        image: Gallery16,
        value: 'Tools Bags'
    },
    ]
    return (
        <div className='container mt-2'>
            <div className='row'>
                {Gallery?.map((item, index) => (


                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 col-12 mb-4'>
                        <div className="card text-center mb-3">
                            <img alt={item?.value} src={item?.image} className='.yafe-gallery-img img-fluid' />
                            <p className="yafe-gal-text">{item?.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Gallaries;