import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../../styles/Layout.module.css'


export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Navbar className={styles.navbar} />
      <main>{children}</main>
      <Footer className={styles.footer} />
    </div>
  )
}
