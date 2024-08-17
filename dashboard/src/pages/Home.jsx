import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import Menu from '../components/Menu'
import Watchlist from '../components/Watchlist'
import Summary from '../components/Summary'
import Cookies from 'js-cookie';


const Home = () => {
  let [user, setUser] = useState("User");  

  useEffect(() => {
    const userName = Cookies.get('user');
    // console.log(userName);
    if (userName) {
      setUser(userName || "User");
    }
  }, []);
  

  return (
    <div className='outerHomeDiv'>
      <div className='innerHomeDiv1'>
        <div className='innerMostHomeDiv1'>
          <Topbar />
        </div>
        <div className='innerMostHomeDiv2'>
          <Watchlist />
        </div>
      </div>
      <div className='innerHomeDiv2'>
        <div className='innerMostHomeDiv3'>
          <Menu user={user}/>
        </div>
        <div className='innerMostHomeDiv4'>
          <Summary user={user} />
        </div>
      </div>
    </div>
  )
}

export default Home
