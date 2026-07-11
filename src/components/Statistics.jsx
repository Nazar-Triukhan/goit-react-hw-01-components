function Statistics ({title, stats}) {
    return (
        <section >
            {title? <h2 >{title}</h2>: ''}
  {/* <h2 >{title}</h2> */}

  <ul >
    {stats.map((e, i) => {
        return (
              <li key={i}>
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