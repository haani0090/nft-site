
import './App.css';
import Header from './components/Header';
import {useState,useEffect} from "react";
import axios from "axios";
import Punklist from './components/Punklist';

function App() {

  const [punkListData,setpunklistData] = useState([])
  useEffect(() =>{
    const getMyNfts = async ()=>{
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x768e65568d60c8b45BdD47D90BBa1bEd7026E079&order_direction=asc')    
    console.log(openseaData.data.assets)
    setpunklistData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])


  return (
    <div className='app'>
          <Header />
            <Punklist punkListData={punkListData} />
    </div>


  );
}

export default App;
