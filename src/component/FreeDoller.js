import React, { useState } from 'react'
import { useHistory } from 'react-router'



function FreeDoller() {
    let history = useHistory()

    const GotoHome = () => {
        history.push('/')
    }

    const [show, setshow] = useState(false)

    const DisplayShow = () => {
        setDisplay(false)
        setshow(!show)
    }

    const [display, setDisplay] = useState(false)

    const DisplayItem = () => {
        setshow(false)
        setDisplay(!display)
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='mx-auto p-0 col-lg-5 col-md-5 col-sm-12' >
                    <div className="d-flex justify-content-between ml-22 mt-20">
                        <div className="d-inline-block cursor-pointer ">
                            <div className="back-button" onClick={GotoHome}>
                                <img src='https://preapp.eusandbox.com/static/media/left-arrow.752ad333.svg' style={{ height: '18px', width: '18px' }} />
                            </div>
                        </div>
                    </div>

                    <div className="people-invite">
                        <div>
                            <div></div>
                            <div className="user-invitation container d-flex flex-column justify-content-between step2" style={{ backgroundImage: `url('https://preapp.eusandbox.com/static/media/step2_cubes_lg.918a7344.png')` }}>
                                {/* <div style={{height:'20px',width:'100%',backgroundColor:'blue'}}></div> */}
                                <div className="mt-250">
                                    <div className="fs-34 font-wotfard text-white lh-45 fw-600 text-uppercase">
                                        GIVE
                                        <span> $5</span><br />
                                        GET <span>$5</span>
                                    </div>
                                    <div className="text-white font-Inter fw-500 fs-14 invite-text">
                                        When someone signs up for NeoBenk with your link, they'll get <span>$5</span>.<br />
                                        Once they've hold $20 for 14 days or more, you'll get $5.<a className="fw-300" style={{ cursor: 'pointer' }}>Terms apply</a>
                                    </div>
                                    <div className="mt-15 dark-blue-btn ">
                                        <button type='button' className="custom-btn-container relative btn btn-dark btn-lg">
                                            <span className="btn-prepend-icon">
                                                <img src='https://preapp.eusandbox.com/static/media/right-shield-white.551bf8d4.svg' alt='icon' />
                                            </span>
                                            <span className="btn-text newtext">
                                                Get started — it's free
                                            </span>
                                        </button>
                                    </div>
                                    <div className="mt-40 mb-5 text-white font-Inter not-btn text-silver text-center pb-30" style={{ cursor: 'pointer' }} >
                                        <p style={{ color: 'silver' }}>Not Now</p>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <div className="bottom-box p-10">
                                            <div className="d-flex flex-row text-white justify-content-between">
                                                <div>
                                                    <div className="opacity-54 font-Inter fs-18">
                                                        Potential
                                                    </div>
                                                    <div className="opacity-54 font-Inter fs-14">
                                                        earnings
                                                    </div>
                                                </div>
                                                <div>
                                                    <div style={{ cursor: 'pointer' }}>
                                                        <span className={display && 'tooltipforfirst'} onClick={DisplayItem}>
                                                            <img src="https://preapp.eusandbox.com/static/media/info-light-gray.987d6990.svg" alt="img not" />
                                                            {display && <span className='tooltiptextfirst'>
                                                                {console.log('in', display)}
                                                                Any written or oral reference to specific or potential earnings are for educational purposes only and are not necessarily representative of actual income potential through participation in NeoBenk's Referral Program.
                                                            </span>}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row text-white justify-content-between">
                                                <div className="opacity-54 font-Inter fs-16 fw-500">
                                                    <span>
                                                        $35
                                                    </span>
                                                </div>
                                                <img style={{ cursor: 'pointer' }} src="https://preapp.eusandbox.com/static/media/right-arrow-light.2acfd2c3.svg" alt="not found" />
                                            </div>
                                        </div>
                                        <div className="bottom-box p-10 ml-10">
                                            <div className="d-flex flex-row text-white justify-content-between">
                                                <div>
                                                    <div className="opacity-54 font-Inter fs-16">
                                                        Finalized
                                                    </div>
                                                    <div className="opacity-54 font-Inter fs-12">
                                                        earnings
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <span className={show && 'tooltipforbottom'} onClick={DisplayShow}>
                                                            {console.log(show)}
                                                            <img src="https://preapp.eusandbox.com/static/media/info-light-gray.987d6990.svg" style={{ cursor: 'pointer' }} alt="img not" />
                                                            {show && <span className='tooltiptextbottom'>
                                                                {console.log('in', show)}
                                                                Total earnings with all invalid activity deducted.
                                                            </span>}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row text-white justify-content-between">
                                                <div className="opacity-54 font-Inter fs-16 fw-500">
                                                    <span>
                                                        $0
                                                    </span>
                                                </div>
                                                <img src="https://preapp.eusandbox.com/static/media/upload-square.78fa2665.svg" style={{ cursor: 'pointer' }} alt="not found" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeDoller
