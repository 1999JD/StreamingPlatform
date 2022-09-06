import Navbar from './Navbar'
import SubNav from './SubNav'
import Footer from './Footer'
import styled from '@emotion/styled'

const PlaceComponent = styled('div')(
  props => ({
    height: props.height
  })
)


export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <PlaceComponent height="42px" />
      <SubNav />
      <main>{children}</main>
      <PlaceComponent />
      <Footer />
    </div >
  )
}
