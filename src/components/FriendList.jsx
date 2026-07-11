import './friends.css'
function FriendList ({friends}) {
    return (
        <ul >
  {friends.map(e => {
    return (
        <li key={e.id}>
  <span className={e.isOnline?'true':'false'}></span>
  <img  src={e.avatar} alt="User avatar" width="48" />
  <p >{e.name}</p>
</li>
    )
  })}
</ul>
    )
}

export default FriendList