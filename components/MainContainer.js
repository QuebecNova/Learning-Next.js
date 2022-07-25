import Head from 'next/dist/shared/lib/head';
import NavBar from './NavBar';


export default function MainContainer({children, keywords}) {
  return (
    <>
        <Head>
            <meta keywords={'quebec, next.js ' + keywords}/>
            <title>Пользователи</title>
        </Head>
        <NavBar/>
        <div>
            {children}
        </div>
    </>
  )
}
