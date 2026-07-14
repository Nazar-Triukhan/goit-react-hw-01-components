import style from './Statistics.module.css'
function Statistics ({title, stats}) {
    return (
        <section className={title? '': `${style.dable}`}>
            {title? <h2 >{title}</h2>: ''}
  {/* <h2 >{title}</h2> */}

  <ul className={style.list}>
    {stats.map((e, i) => {
        return (
              <li className={style.item} key={i}>
      <span >{e.label}          </span>
      <span >{e.percentage}%</span>
    </li>
        )
    })}
  </ul>
</section>
    )
}

export default Statistics