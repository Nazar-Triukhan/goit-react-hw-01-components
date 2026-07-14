import style from './TransactionHistory.module.css'

function TransactionHistory({ transaction }) {
  return (
    <table className={style.table}>
      <thead className={style.head}>
        <tr className={style.headerRow}>
          <th className={style.headerCell}>Type</th>
          <th className={style.headerCell}>Amount</th>
          <th className={style.headerCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transaction.map((e, i) => {
          return (
            <tr key={i} className={i % 2 === 0 ? style.rowEven : style.rowOdd}>
              <td className={style.cell}>{e.type}</td>
              <td className={style.cell}>{e.amount}</td>
              <td className={style.cell}>{e.currency}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TransactionHistory