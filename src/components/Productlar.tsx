import React from 'react'
import Paltarlar from  "../components/MehsullarBaza.json"
import OurProduct from './OurProduct'

const Productlar:React.FC = () => {
  return (
    <>

<div className="container">
<div className="row">
{
    Paltarlar.map((birMelumat)=>(

        <div className="col-12 col-lg-3 col-md-6">
                    <OurProduct paltarImage={birMelumat.image} paltarTitle={birMelumat.title} paltarPrice={birMelumat.price} paltarRaiting={birMelumat.raiting}/>

        </div>

    ))
}
</div>
</div>
    </>
  )
}

export default Productlar