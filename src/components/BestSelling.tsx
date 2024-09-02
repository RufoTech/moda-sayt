import React from 'react'
import Button from './Button'

const BestSelling:React.FC = () => {
  return (
    <>
    <div className='best-selling py-4 my-5'>
        <div className="container">
            <div className="text-selling">
            <h2 className='roboto-slab'>Best selling</h2>
            <h5 className='py-3'>Get in on the trend with our curated selection of best-selling styles.</h5>
            <div className="row">
              <div className="col-12 col-md-4 my-5 kart-mehsul">
                <div className="mehsul-1">
                <img src="/assets/images/mehsullar/mehsul1.svg" alt=""  className='w-100'/>

                </div>
                <h4 className='text-center poppins-semibold my-4'>Regular Fit Long Sleeve Top</h4>
                <div className="price-and-raiting d-flex align-items-center">
                  <h4>$38.99</h4>
                  <div className="orta-div px-4"></div>
                  <h4>5.0</h4>
                  <h4> <img src="/assets/images/mehsullar/ulduz.svg" alt=""  className='px-3'/></h4>

                </div>


              </div>
              <div className="col-12 col-md-4  my-5 kart-mehsul ">
                <div className="mehsul-1">
                <img src="/assets/images/mehsullar/mehsul2.svg" alt=""  className='w-100'/>

                </div>
                <h4 className='text-center poppins-semibold my-4'>Black Crop Tailored Jacket</h4>
                <div className="price-and-raiting d-flex align-items-center">
                  <h4>$28.99</h4>
                  <div className="orta-div px-4"></div>
                  <h4>4.0</h4>
                  <h4> <img src="/assets/images/mehsullar/ulduz.svg" alt=""  className='px-3'/></h4>

                </div>


              </div>
              <div className="col-12 col-md-4 my-5 kart-mehsul ">
                <div className="mehsul-1">
                <img src="/assets/images/mehsullar/mehsul3.svg" alt=""  className='w-100'/>

                </div>
                <h4 className='text-center poppins-semibold my-4'>Textured Sunset Shirt</h4>
                <div className="price-and-raiting d-flex align-items-center">
                  <h4>$34.99</h4>
                  <div className="orta-div px-4"></div>
                  <h4>4.5</h4>
                  <h4> <img src="/assets/images/mehsullar/ulduz.svg" alt=""  className='px-3'/></h4>

                </div>


              </div>
            
            </div>

            </div>
        </div>
    </div>

    <div className="container">
      <div className="button-mehsul d-flex justify-content-center align-items-center">
      <Button inTextBtn={'See All'} klassAdi={'see-all-button'} img="/assets/images/mehsullar/right-arrows.png" />

      </div>
    </div>

    <div className="text-selling my-5 py-5">
        <h2 className='roboto-slab'>Best selling</h2>
        <h5 className='py-3'>Get in on the trend with our curated selection of best-selling styles.</h5>

        </div>
    </>
  )
}

export default BestSelling