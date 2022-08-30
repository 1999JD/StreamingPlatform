import { useState } from "react"
import Image from "next/image"

export default function Gif ({fixed, anime, info}) {
  const [isHover, setIsHover] = useState(false)
  const handleMouseOver = (isOver) => {
    setIsHover(isOver)
  }

  return (
    <div onMouseOver={()=>handleMouseOver(true)} onMouseLeave={()=>handleMouseOver(false)}>
      <Image src={isHover? anime:fixed } width={300} height= {200} alt={info.title}  />
    </div>
  )
}