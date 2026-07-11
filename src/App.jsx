import userInfo from '../user.json'
import './App.css'
import Profile from './components/Profile'
import Statistics from './components/Statistics'
import friends from '../friends.json'
import data from '../data.json'
import FriendList from './components/FriendList'
import transaction from '../transactions.json'
import TransactionHistory from './components/TransactionHistory'
// console.log(transaction)
function App() {


  return (
    <>
      <Profile username={userInfo.username} tag={userInfo.tag} location={userInfo.location} avatar={userInfo.avatar} stats={userInfo.stats}/>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory transaction={transaction}/>
    </>
  )
}

export default App
