import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

function App () {
  const users = [
    { name: 'Andres Duque', userName: 'andres1315', isFollowing: false },
    { name: 'Miguel Angel duran', userName: 'midudev', isFollowing: false },
    { name: 'Harri', userName: 'lodeharri', isFollowing: true }
  ]

  return (
    <>
      <h1 style={{ color: '#fff' }}>Twitter Card</h1>
      <div className='App'>
        {users.map((user, index) => (
          <TwitterFollowCard key={index} name={user.name} userName={user.userName} initIsFollowing={user.isFollowing} />
        ))}

      </div>
    </>
  )
}

export default App
