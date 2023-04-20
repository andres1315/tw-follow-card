import { useState } from "react";

export function TwitterFollowCard({userName, name, initIsFollowing}: Props){

  const [isFollowing, setIsFollowing] = useState(initIsFollowing)
  
  const changeFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header '>
        <img className='tw-followCard-avatar' alt="avater name" src={`https://unavatar.io/${userName}`}/>
        <div className='tw-followCard-info '>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button onClick={()=>changeFollow()} className={`tw-followCard-button ${isFollowing ? 'is-following':''}`}>{isFollowing ? 'Dejar de Seguir' : 'Seguir'}</button>
      </aside>
    </article>
  )
}

 
interface Props{
  userName: string;
  name: string;
  initIsFollowing: boolean;

}