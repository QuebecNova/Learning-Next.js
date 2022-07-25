import Head from 'next/head';
import NavBar from './../components/NavBar';
import MainContainer from './../components/MainContainer';

export default function Index() {
  return (
    <MainContainer keywords={'main page'}>
        <div>
            <h1>index</h1>
        </div>
    </MainContainer>
  )
}
