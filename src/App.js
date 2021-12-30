
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import {useState,useEffect} from "react";
import axios from "axios";

function App() {

  const [punlistData,setpunklistData] = useState([])
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
          <CollectionCard
            id ={0}
            name ={'iz punk'}
            traits ={[{'value': 7}]} 
            image = 'https://ipfs.thirdweb.com/ipfs/bafybeiczq5i7rjz5ddp322uz4bfvle5753n56xrnirefosues3lk5getwu'
            />

    </div>


  );
}

export default App;
