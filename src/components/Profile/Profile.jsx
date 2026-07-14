import style from'./Profile.module.css'
function Profile ({username, tag, location, avatar, stats}) {
    return (
        <div className={style.profile}>
  <div >
    <img
    className={style.avatar}
      src={avatar}
      alt="User avatar"
     
    />
    <p className={style.title}>{username}</p>
    <p >@{tag}</p>
    <p >{location}</p>
  </div>

  <ul className={style.list}>
    <li className={style.item}>
      <span >Followers</span>
      <span className={style.stats}>{stats.followers}</span>
    </li>
    <li className={style.item}>
      <span >Views</span>
      <span className={style.stats}>{stats.views}</span>
    </li>
    <li className={style.item}>
      <span >Likes</span>
      <span className={style.stats}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

export default Profile