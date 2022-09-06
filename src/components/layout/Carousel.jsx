import Image from "next/image"
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react"
import { styled } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';


const SlideSection = styled('section')({
  position: 'relative',
  width: '100%',
  height: 0,
  paddingBottom: '40%',
  overflow: 'hidden',
})

const SlideWrapper = styled('ul')({
  display: 'flex',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  margin: 0,
  height: '100%',
  transition: 'transform .5s ease-in-out'
})

const SlideItem = styled('li')({
  position: 'relative',
  flexShrink: 0,
  width: '100%',
})

const arrowStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  height: 'fit-content',
  margin: 'auto',
  cursor: 'pointer',
  color: 'primary.light',
}




export default function Carousel() {
  const fakeImages = [
    {
      id: 'slid1',
      url: "https://picsum.photos/1200/300?random=1",
      alt: 'slide1'
    },
    {
      id: 'slid2',
      url: "https://picsum.photos/1200/300?random=2",
      alt: 'slide2'
    },
    {
      id: 'slid3',
      url: "https://picsum.photos/1200/300?random=3",
      alt: 'slide3'
    },
    {
      id: 'slid4',
      url: "https://picsum.photos/1200/300?random=4",
      alt: 'slide4'
    },
    {
      id: 'slid5',
      url: "https://picsum.photos/1200/300?random=5",
      alt: 'slide5'
    },
    {
      id: 'slid6',
      url: "https://picsum.photos/1200/300?random=6",
      alt: 'slide6'
    },
  ]

  const middleImageIndex = Math.round(fakeImages.length / 2)
  const [offset, setOffset] = useState(middleImageIndex * -100)
  const [current, setCurrent] = useState(middleImageIndex)
  async function handleCurrent(method) {
    if (method === 'previous' && current) {
      setCurrent(current - 1)
      setOffset((current - 1) * -100)
    }
    else if (method === 'next' && current !== fakeImages.length - 1) {
      setCurrent(current + 1)
      setOffset((current + 1) * -100)
    }
  }

  return (
    <SlideSection>
      <SlideWrapper style={{ transform: `translateX(${offset}%)` }}>
        {fakeImages.map(image => {
          return (
            <SlideItem key={image.id}>
              <Image src={image.url} alt={image.alt} layout="fill" />
            </SlideItem>
          )
        })}
      </SlideWrapper>
      <IconButton aria-label="delete" size="large" sx={{ left: 4, ...arrowStyle }} onClick={() => { handleCurrent('previous') }}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <MobileStepper
        variant="dots"
        steps={6}
        position="static"
        activeStep={current}
        sx={{ position: 'absolute', bottom: 0, width: '100%', justifyContent: 'center', backgroundColor: 'transparent'}}
      />
      <IconButton aria-label="delete" size="large" sx={{ right: 4, ...arrowStyle }} onClick={() => { handleCurrent('next') }}>
        <ArrowForwardIosIcon />
      </IconButton>
    </SlideSection >
  )
}