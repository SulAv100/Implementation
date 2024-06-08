import React from 'react'
import './Featured.css'
import grid1 from '../../assets/Category/grid1.jpg'
import grid2 from '../../assets/Category/grid2.jpg'
import grid3 from '../../assets/Category/grid3.jpg'
import grid4 from '../../assets/Category/grid4.jpg'
import grid5 from '../../assets/Category/grid5.jpg'
import grid6 from '../../assets/Category/grid6.jpg'


function Featured() {
  return (
    <>
        <section className='featured-category'>
            <h1>Featured Category</h1>

            <div className="grid-container">
                <div className="single-grid-item">
                    <h2>Laptops</h2>
                    <figure>
                        <img src={grid1} alt="" />
                    </figure>
                    <p className='discover-bottom'>Discover Now</p>
                </div>
                <div className="single-grid-item">
                    <h2>Keyboard</h2>
                    <figure>
                        <img src={grid2} alt="" />
                    </figure>
                    <p className='discover-bottom'>Discover Now</p>
                </div>
                <div className="single-grid-item">
                    <h2>Audio</h2>
                    <figure>
                        <img src={grid3} alt="" />
                    </figure>
                    <p className='discover-bottom'>Discover Now</p>
                </div>
                <div className="single-grid-item">
                    <h2>Mouse</h2>
                    <figure>
                        <img src={grid4} alt="" />
                    </figure>
                    <p className='discover-bottom'>Discover Now</p>
                </div>
                <div className="single-grid-item">
                    <h2>Monitor</h2>
                    <figure>
                        <img src={grid3} alt="" />
                    </figure>
                    <p className='discover-bottom'>Discover Now</p>
                </div>
                <div className="single-grid-item">
                    <h2>Printer</h2>
                    <figure>
                        <img src={grid2} alt="" />
                    </figure>
                    <p className='discover-bottom'>Discover Now</p>
                </div>
            </div>
        </section>
    </>
)
}

export default Featured