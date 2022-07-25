import Link from "next/link"
import MainContainer from './../components/MainContainer';

export default function Users({users}) {

    const renderedUsers = users.map(user => (
        <li key={user.id}>
            <Link href={`users/${user.id}`}>
                <a>{user.name}</a>
            </Link>
        </li>
    ))

  return (
    <MainContainer keywords={'users'}>
        <h1>users</h1>
        <ul>
            {renderedUsers}
        </ul>
    </MainContainer>
  )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: {users} 
    }
}