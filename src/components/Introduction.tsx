import React from 'react'
import Button from './Button'

const Introduction:React.FC = () => {
  return (
    <>
    <div className='introduction'>
        <div className="container">
            <div className="row">
                <div className="intro-right-side col-12 col-md-6 py-5 my-3">
                    <h1 className='rufina-bold'>Discover and Find Your Own Fashion!</h1>
                    <h4 className='my-5'>Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</h4>
                    <Button inTextBtn={'EXPLORE NOW'} klassAdi={'intro-buton'} img={""}/>
                </div>
                <div className="intro-left-side col-12 col-md-6 ">
                    <div className="right-image">
                    <img src="/assets/images/header/girl.svg" alt="" className='girl-image' />
                   

                    </div>
                    <div className="noqte-div">
                    <img src="/assets/images/header/nokta.svg" alt=""  className='noqte'/>
                    </div>
                    <div className="noqte-div-2">
                    <img src="/assets/images/header/nokta.svg" alt=""  className='noqte'/>
                    </div>


                </div>
            </div>
        </div>
    </div>

    
    </>
  )
}

export default Introduction