import React from 'react'
interface paltarProps{
paltarImage:string,
paltarPrice:string,
paltarTitle:string,
paltarRaiting:string,

}
const OurProduct:React.FC<paltarProps> = ({paltarImage,paltarPrice,paltarRaiting,paltarTitle}) => {
  return (
    <div className='best-selling py-4 my-5'>
    <div className="container">
       
        
            <div className="mehsul-1">
            <img src={paltarImage} alt=""  className='w-100'/>
            <h4 className='text-center poppins-semibold my-4'>{paltarTitle}</h4>
            <div className="price-and-raiting d-flex align-items-center">
              <h4>{paltarPrice}</h4>
              <div className="orta-div px-4"></div>
              <h4>{paltarRaiting}</h4>
              <h4> <img src="/assets/images/mehsullar/ulduz.svg" alt=""  className='px-3 ulduz'/></h4>


            </div>
          
            </div>


          </div>
        
        </div>

    

  )
}

export default OurProduct