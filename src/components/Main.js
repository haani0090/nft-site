import React from 'react';
import instagramLogo from "../assets/owner/instagram.png"
import twitterLogo from "../assets/owner/twitter.png"
import moreIcon from "../assets/owner/more.png"
import "./Main.css"


const Main = () => {
    return (
        <div className='main'>
            <div className='mainContnet'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img 
                        className='selectedPunk'
                        src={activePunk.image_original_url}
                        alt=''
                        />
                    </div>
                </div>
                <div className='punkDetails' style={{color:'#fff'}}>
                    <div className='title'>
                        {activePunk.name}
                    </div>
                    <span className='itemNumber'></span>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img 
                        src={''}
                        alt=''
                        />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'></div>
                        <div>0xbDdD28527a009eC19202FFEF785f7E6930Df2015</div>
                        <div className='ownerHandle'>@hANii</div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt=''/>
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} alt=''/>
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
