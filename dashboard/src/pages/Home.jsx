import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import Menu from '../components/Menu'
import Watchlist from '../components/Watchlist'
import Summary from '../components/Summary'
import Cookies from 'js-cookie';


const Home = () => {
  let [user, setUser] = useState("User");  
  let [itemDataName, setItemDataName] = useState("");
  let [itemDataMode, setItemDataMode] = useState("");
  let [isCancelBuyBtn, setIsCancelBuyBtn] = useState(false);
  let [isCancelSellBtn, setIsCancelSellBtn] = useState(false);

  let mediaBuyBtn = () => {
    setIsCancelBuyBtn(true);
  }

  let mediaSellBtn = () => {
    setIsCancelSellBtn(true);
  }

  let mediaCancelBuyBtn = () => {
    setIsCancelBuyBtn(false)
  }

  let mediaCancelSellBtn = () => {
    setIsCancelSellBtn(false)
  }


  let getItemData = (name, option) => {
    setItemDataName(name);
    setItemDataMode(option);
  }

  useEffect(() => {
    const userName = Cookies.get('user');
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
          <Watchlist sendDataToParent={getItemData} mediaBuyBtn={mediaBuyBtn} mediaSellBtn={mediaSellBtn}/>
        </div>
      </div>
      <div className='innerHomeDiv2'>
        <div className='innerMostHomeDiv3'>
          <Menu user={user}/>
        </div>
        <div className='innerMostHomeDiv4'>
          <Summary user={user} itemName={itemDataName} itemMode={itemDataMode} isCancelBuyBtn={isCancelBuyBtn} isCancelSellBtn={isCancelSellBtn} mediaCancelBuyBtn={mediaCancelBuyBtn} mediaCancelSellBtn={mediaCancelSellBtn}/>
        </div>
      </div>
    </div>
  )
}

export default Home
