import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = ({heroBanner}) => {
    // const img = 'https://drive.google.com/file/d/1kfrunQ5aduLH008C9ugZf04XNGxpeTB7/view?usp=sharing'
    const img = 'https://drive.google.com/uc?id=1kfrunQ5aduLH008C9ugZf04XNGxpeTB7';

  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'> “I would rather be on my farm than be emperor of the world.”</p>
            {/* <h3>{heroBanner.midText}</h3> */}
            <h3>xyz</h3>
            {/* <h1>{heroBanner.largeText1}</h1> */}
            <h1>pqr</h1>
            <img src={img} alt='headphones' className='hero-banner-image'></img>

            <div>
                {/* <Link href={`/product/${heroBanner.product}`}>
                    <button type='button'>{heroBanner.buttonText}</button>
                </Link> */}
                {/* <div className='desc'>
                    <h5>Description</h5>
                    <p>{heroBanner.desc}</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default HeroBanner