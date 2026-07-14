import style from'./friendList.module.css'
function FriendList ({friends}) {
    return (
        <ul className={style.list}>
  {friends.map(e => {
    return (
        <li className={style.item} key={e.id}>
  <span className={e.isOnline? `${style.true}`:`${style.false}`}></span>
  <img  src={e.avatar} alt="User avatar" width="48" />
  <p >{e.name}</p>
</li>
    )
  })}
</ul>
    )
}

export default FriendList