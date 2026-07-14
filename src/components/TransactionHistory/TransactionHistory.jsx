import style from './TransactionHistory.module.css'
function TransactionHistory ({transaction}) {
    return (
        <table >
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {/* <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    */}
    {transaction.map((e, i) => {
        return (
    <tr key={i}>
      <td>{e.type}</td>
      <td>{e.amount}</td>
      <td>{e.currency}</td>
    </tr>
        )
    })}
  </tbody>
</table>
    )
}

export default TransactionHistory