import React from 'react'
interface buttonProps{
    inTextBtn:string
    klassAdi:string,
    img:string
}
const Button:React.FC<buttonProps> = ({inTextBtn,klassAdi,img}) => {
  return (
    <div className="button">
        <button className={klassAdi}>{inTextBtn} <img src={img} alt="" /></button>
    </div>
  )
}

export default Button