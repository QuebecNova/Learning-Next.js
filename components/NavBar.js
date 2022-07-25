import CLink from "./CLink"
import styles from '../styles/nav.module.css'

export default function NavBar() {
  return (
    <nav className={styles.nav}>
        <CLink href='/' text='Index'/>
        <CLink href='/users' text='Users'/>
    </nav>
  )
}
