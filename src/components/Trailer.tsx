import React from 'react'

const Trailer:React.FC = () => {
  return (
    <div className="trailer py-5">
        <div className="container">
            <div className="trailer-text">
            <h1 className=' roboto-slab  text-center'>Designer Clothes For You</h1>
            <h5 className='text-center py-4'> Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</h5>
                </div>
            <div className="row">

                <div className="col-12 col-md-4 trailer">
                    <img src="/assets/images/timer/girl1.svg" alt="" />
                    <h2 className='text-center roboto-slab py-2 my-2'>Accessories</h2>
                    <p className='text-center'>Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.</p>
                </div>
                <div className="col-12 col-md-4 trailer">
                    <img src="/assets/images/timer/girl2.svg" alt="" />
                    <h2 className='text-center roboto-slab py-2 my-2'>Dresses</h2>
                    <p className='text-center'>Explore a stunning range of designer dresses, including evening gowns and chic day dresses.</p>
                </div>
                <div className="col-12 col-md-4 trailer">
                    <img src="/assets/images/timer/girl3.svg" alt="" />
                    <h2 className='text-center roboto-slab py-2 my-2'>Outerwear</h2>
                    <p className='text-center'>Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Trailer