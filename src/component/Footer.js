import React from 'react'
import MediaQuery, { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router'

function Footer() {
    const history = useHistory()
    const GetDoller =()=>{
        history.push('/freedoller')
    }

    return ( 
    <MediaQuery maxWidth={460} minWidth={320}>
        <div className="footer-main">
           
            <footer>
                <div className="footer">
                    <div className="footer-in">
                        <div className="footer-image" >
                            <img src="https://preapp.eusandbox.com/static/media/home-active-icon.0041faf4.svg" alt="home icon not found" />
                        </div>
                        <div className="footer-text">Home</div>
                    </div>
                    <div className="footer-in">
                        <div className="footer-image">
                            <img src="https://preapp.eusandbox.com/static/media/support-icon.90dee6d4.svg" alt="suport icon not found" />
                        </div>
                        <div className="footer-text">Support</div>
                    </div >
                    <div className="footer-in">
                        <div className="footer-image">
                            <img src="https://preapp.eusandbox.com/static/media/arrows-icon.b002466d.svg" alt="arrow icon not found" />
                        </div>
                        <div className="footer-text">Send/Request</div>
                    </div>
                    <div className="footer-in" onClick={GetDoller} >
                        <div className="footer-image">
                            <img src="https://preapp.eusandbox.com/static/media/free-dollar.f4ea9204.svg" alt="dollar icon not found" />
                        </div>
                        <div className="footer-text">Free dollar</div>
                    </div>
                    <div className="footer-in" >
                        <div className="footer-image">
                            <img src="https://preapp.eusandbox.com/static/media/user-icon.c625c7b8.svg" alt="user icon not found" />
                        </div>
                        <div className="footer-text" >Me</div>
                    </div>
                </div>
            </footer>
        </div>
        </MediaQuery>
    )
}

export default Footer
