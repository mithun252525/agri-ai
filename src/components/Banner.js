import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import "../styles/Banner.css"

function Banner() {

    let history = useHistory()

    const cropRedirect = () => {
        history.push("/crop")
    }

    const fertRedirect = () => {
        history.push("/fertilizer")
    }
    
    return (
        <div className="banner">
            <div className="banner__title">
                <div className="banner__title_head">
                    M3Dhun<font>AGRI</font>
                </div>
                <div className="banner__title_tail">
                    <div className="typing">Effective Crop Selection</div>
                    <div className="banner__buttons">
                        <Button onClick={cropRedirect} className="banner__button cropButton">Crop Selection</Button>
                        <Button onClick={fertRedirect} className="banner__button fertilizerButton">fertilizer Selection</Button>
                    </div>
                    
                    <div className="banner__socialMedia">
                     
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner
