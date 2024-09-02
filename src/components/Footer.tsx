import React from 'react'

const Footer:React.FC = () => {
  return (
    <footer className=' '>
        <div className="container py-5 salam">
            <div className="row">
                <div className="col-12 col-md-4 ">
                    <img src="/assets/images/header/header.svg" alt="" />
                    <div className="footer-text">
                        <h4 className='text-light my-4'>Social Media</h4>
                        <div className="social-media-footer">
                            <img src="/assets/images/social-media/facebook.svg" alt=""  className=''/>
                            <img src="/assets/images/social-media/instagram.svg" alt="" className='px-4' />
                            <img src="/assets/images/social-media/twiter.svg" alt=""  className=''/>
                        </div>
                    </div>

                </div>

                <div className="col-12 col-md-2">
                    <h6 className='text-light roboto-slab h4'>SHOP</h6>
                    <h6 className='text-light py-2'>Products</h6>
                    <h6 className='text-light py-2'>Overview</h6>
                    <h6 className='text-light py-2'>Pricing</h6>
                    <h6 className='text-light py-2'>Releases</h6>
                </div>
                <div className="col-12 col-md-2">
                    <h6 className='text-light roboto-slab h4'>SHOP</h6>
                    <h6 className='text-light py-2'>Products</h6>
                    <h6 className='text-light py-2'>Overview</h6>
                    <h6 className='text-light py-2'>Pricing</h6>
                    <h6 className='text-light py-2'>Releases</h6>
                </div>
                <div className="col-12 col-md-4">
                    <h3 className='text-light'>Stay up to date</h3>
                    <img src="/assets/images/social-media/search.svg" alt="" className='py-4' />
                </div>
            </div>
        </div>
       <div className="container">
       <div className="footer-end d-flex align-items-center">
        <div className="footer-linear"></div>
        <h5 className='text-light px-3'>Terms</h5>
        <h5 className='text-light px-2'>Privacy</h5>
        <h5 className='text-light px-2'>Cookies</h5>
        </div>
        <div className="py-3"></div>
       </div>

    </footer>
  )
}

export default Footer