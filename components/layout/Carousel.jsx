import Image from "next/image"
import styles from '../../styles/Carousel.module.css'
import { useState } from "react"

export default function Carousel() {
  const fakeImages = [
    {
      id: 'slid1',
      url: "https://picsum.photos/1200/600?random=1",
      alt: 'slide1'
    },
    {
      id: 'slid2',
      url: "https://picsum.photos/1200/600?random=2",
      alt: 'slide2'
    },
    {
      id: 'slid3',
      url: "https://picsum.photos/1200/600?random=3",
      alt: 'slide3'
    },
    {
      id: 'slid4',
      url: "https://picsum.photos/1200/600?random=4",
      alt: 'slide4'
    },
    {
      id: 'slid5',
      url: "https://picsum.photos/1200/600?random=5",
      alt: 'slide5'
    },
    {
      id: 'slid6',
      url: "https://picsum.photos/1200/600?random=6",
      alt: 'slide6'
    },
  ]

  const middleImageIndex = Math.round(fakeImages.length / 2)
  const [offset, setOffset] = useState(middleImageIndex * -100)
  const [current, setCurrent] = useState(middleImageIndex)
  async function handleCurrent(method) {
    if (method === 'previous' && current) {
      console.log('before', current)
      setCurrent(current - 1)
      console.log('after', current)
      setOffset((current - 1) * -100)
    }
    else if (method === 'next' && current !== fakeImages.length - 1) {
      console.log('next')
      setCurrent(current + 1)
      setOffset((current + 1) * -100)
    }
  }

  return (
    <div>
      <section className={styles.slideSection}>
        <div className={styles.slideWrapper} style={{ transform: `translateX(${offset}%)` }}>
          {fakeImages.map(image => {
            return (
              <div key={image.id} className={styles.slideItem}>
                <Image src={image.url} alt={image.alt} layout="fill" />
              </div>
            )
          })}
        </div>
      </section >
      <button onClick={() => { handleCurrent('previous') }}>previous</button>
      <button onClick={() => { handleCurrent('next') }}>next</button>
    </div >
  )
}