import Link  from 'next/link';
import styles from '../styles/link.module.css'

export default function CLink({text, href}) {
  return (
    <Link href={href}>
        <a className={styles.link}>{text}</a>
    </Link>
  )
}
