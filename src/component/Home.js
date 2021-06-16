import React from 'react'
import { useState } from 'react'
import jimage from '../images/j.png'
import cimage from '../images/cimage.svg'
import usimage from '../images/usimage.svg'
import '../App.css'
import MediaQuery from 'react-responsive'
import Footer from './Footer'


function Home() {

    const ActiveAccount = [
        {
            image: usimage,
            moneyType: 'R0.00',
            money: 'R0.00',
            apy: ' APY 0.00%',
            contryName: 'ZAR',
            currencyType: 'South African Rand'
        },
        {
            image: usimage,
            moneyType: 'R0.00',
            money: 'R0.00',
            apy: ' APY 0.00%',
            contryName: 'USD',
            currencyType: 'Us dollar'
        },
        {
            image: usimage,
            moneyType: 'R0.00',
            money: 'R0.00',
            apy: ' APY 0.00%',
            contryName: 'EUR',
            currencyType: 'Euro'
        },
        {
            image: usimage,
            moneyType: 'R0.00',
            money: 'R0.00',
            apy: ' APY 0.00%',
            contryName: 'GBP',
            currencyType: 'British Pound'
        },
        {
            image: usimage,
            moneyType: 'R0.00',
            money: 'R0.00',
            apy: ' APY 0.00%',
            contryName: 'SGD',
            currencyType: 'Singapore Doller'
        },
        {
            image: usimage,
            moneyType: 'R0.00',
            money: 'R0.00',
            apy: ' APY 0.00%',
            contryName: 'BRL',
            currencyType: 'Brazilian real'
        },
        {
            image: usimage,
            moneyType: 'R0.00',
            money: '$52.50',
            apy: ' APY 0.00%',
            contryName: 'AFD',
            currencyType: 'Emirate Dirham'
        },
        {
            image: usimage,
            moneyType: 'R0.00',
            money: 'R0.00',
            apy: ' APY 0.00%',
            contryName: 'NGN',
            currencyType: 'Nigirian Naria'
        },
        {
            image: usimage,
            moneyType: 'R0.00',
            money: 'R0.00',
            apy: ' APY 0.00%',
            contryName: 'CHF',
            currencyType: 'Swiss Franc'
        }
    ]

    let Data = ['Account', 'Wealth', 'Credit']
    const Trasaction = [
        {
            image: usimage,
            transType: 'send',
            money: '$52.50',
            treasury: '$1231.33',
            isCompleted: false
        },
        {
            image: usimage,
            transType: 'recive',
            money: '$12.00',
            treasury: '$1321.33',
            isCompleted: false
        },
        {
            image: usimage,
            transType: 'recive',
            money: '$523.00',
            treasury: '$3231.33',
            isCompleted: true
        },
        {
            image: usimage,
            transType: 'send',
            money: '$1442.50',
            treasury: '$2002.33',
            isCompleted: false
        },
        {
            image: usimage,
            transType: 'recive',
            money: '$5.50',
            treasury: '$5005.33',
            isCompleted: true
        },
        {
            image: usimage,
            transType: 'send',
            money: '$12.50',
            treasury: '$7001.90',
            isCompleted: true
        },
        {
            image: usimage,
            transType: 'send',
            money: '$1000.70',
            treasury: '$5000.00',
            isCompleted: true
        },
        {
            image: usimage,
            transType: 'send',
            money: '$450.50',
            treasury: '$5001.13',
            isCompleted: false
        },
        {
            image: usimage,
            transType: 'recive',
            money: '$5211.30',
            treasury: '$1231.33',
            isCompleted: true
        }
    ]
    let InrestedAccount = [
        {
            img: cimage,
            data: '$123.09'
        },
        {
            img: cimage,
            data: '$1273.00'
        },
        {
            img: cimage,
            data: '$313.19'
        },
        {
            img: cimage,
            data: '$80.10'
        }
    ]

    const Contact = [
        {
            images: jimage,
            name: 'Me',
            numbers: '1234312'
        },
        {
            images: jimage,
            name: 'Jhon',
            numbers: '6546323'
        },
        {
            images: jimage,
            name: 'Wood',
            numbers: '235223'
        },
        {
            images: jimage,
            name: 'Mark',
            numbers: '787854'
        },
        {
            images: jimage,
            name: 'Virat',
            numbers: '75757'
        },
        {
            images: jimage,
            name: 'ABC',
            numbers: '757575'
        },
        {
            images: jimage,
            name: 'Xyz',
            numbers: '2321123'
        },
        {
            images: jimage,
            name: 'PQR',
            numbers: '45454'
        },
        ,
        {
            images: jimage,
            name: 'Xyz',
            numbers: '2321123'
        },
        {
            images: jimage,
            name: 'PQR',
            numbers: '45454'
        },
        ,
        {
            images: jimage,
            name: 'Xyz',
            numbers: '2321123'
        },
        {
            images: jimage,
            name: 'PQR',
            numbers: '45454'
        },
        ,
        {
            images: jimage,
            name: 'Xyz',
            numbers: '2321123'
        },
        {
            images: jimage,
            name: 'PQR',
            numbers: '45454'
        },
        ,
        {
            images: jimage,
            name: 'Xyz',
            numbers: '2321123'
        },
        {
            images: jimage,
            name: 'PQR',
            numbers: '45454'
        },
        ,
        {
            images: jimage,
            name: 'Xyz',
            numbers: '2321123'
        },
        {
            images: jimage,
            name: 'PQR',
            numbers: '45454'
        },
        ,
        {
            images: jimage,
            name: 'Xyz',
            numbers: '2321123'
        },
        {
            images: jimage,
            name: 'PQR',
            numbers: '45454'
        },
        ,
        {
            images: jimage,
            name: 'Xyz',
            numbers: '2321123'
        },
        {
            images: jimage,
            name: 'PQR',
            numbers: '45454'
        }

    ]

    const [selected, setSelected] = useState("Account")

    const ChangeData = (key) => {
        setSelected(key)
    }

    const [show, setShow] = useState(false)

    const ChangeShow = () => {
        setShow(true)
    }

    const ChangeShowFalse = () => {
        setShow(false)
    }

    const [scroller, setScroller] = useState(true)

    const HandleScroll = (e) => {
        var element = e.target
        if (element.scrollTop > 0) {
            setScroller(false)
        } else {
            setScroller(true)
        }
    }


    const [searchTerm, setsearchTerm] = useState('')

    const [active, setActive] = useState(false)

    const ChangeActive = () => {
        setActive(true)
    }

    const ChangeActiveFalse = () => {
        setActive(false)
    }
    var ActiveAccounts = ActiveAccount.slice(0, 5)
    var SeeTransaction = Trasaction.slice(0, 3)
    return (
        <>
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='mx-auto p-0 col-lg-5 col-md-5 col-sm-12' >
                            <div className="col bank-account">
                                <div className="mt-20 d-flex justify-content-between">
                                    <div>
                                        <div className='bank-name'>Banking
                                    <div className='bank-balance'>NeoBenk Balance:
                                        <div className='total-balance'>₣0<sup>92</sup>
                                                    <div className="tooltiptext" style={{ height: '120px', width: '150px' }}>
                                                        <span className="dropdown-tooltips" >
                                                            <a><span style={{ color: '#848fa2' }}>Account</span>
                                                                <br />
                                                                <span>$175.00</span>
                                                            </a>
                                                        </span>
                                                        <hr style={{ height: "0.1px", color: '#e9eef7', marginTop: '20px' }} />
                                                        <span className="dropdown-tooltips" >
                                                            <a><span style={{ color: '#848fa2' }}>Wealth</span>
                                                                <br />
                                                                <span>$123.00</span>
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="ant-badge" >
                                        <span className="ant-avatar ant-avatar-circle ant-avatar-image" style={{ cursor: 'pointer' }}>
                                            <img className='user-avatar' src={jimage} alt={jimage} />
                                        </span>
                                    </span>
                                </div>
                                <div className="mt-35" >
                                    <div className="mt-10 d-flex" >
                                        {Data.map((item, index) =>
                                            <div className={`${selected === item && "btngruop"}`} key={index} id={index} style={{ padding: "4px 8px", margin: "10px", cursor: "pointer" }}>
                                                <a className="account" style={{ textDecoration: 'none' }} onClick={() => ChangeData(item)}>{item}</a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="mt-10 d-flex justify-content-between">
                                                <div className='country-name'>R0<sup>00</sup>
                                                    <div className='country-code'>South African rand <span className='country-range tooltips1 '>: APY 0.00%
                                                        <span className="tooltiptexts1"><p>The Annual Percentage Yield(APY) is the real rate of return earned on your ZAR taking into account the effect of compounding interest.</p></span>
                                                    </span>
                                                        <div className='country-num'>6802 9221 01 &nbsp;
                                                            <span className="tooltips" >
                                                                <img src={'https://preapp.eusandbox.com/static/media/copy-small.029ab05c.svg'} style={{ height: '15px', width: '15px' }} />&nbsp;
                                                                <span className="tooltiptexts">Copy Account Number</span>
                                                            </span>
                                                            <span className="tooltips">
                                                                <img src={'https://preapp.eusandbox.com/static/media/icon-bar-code.01c01b6b.svg'} style={{ height: '15px', width: '15px' }} />&nbsp;
                                                        <span className="tooltiptexts">Qr Code</span>
                                                            </span>
                                                            <span className="tooltips">
                                                                <img src={'https://preapp.eusandbox.com/static/media/reorder.557e06e9.svg'} style={{ height: '15px', width: '15px' }} />
                                                                <span className="tooltiptexts">Account Management</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="ant-badge" style={{ cursor: 'pointer' }}>
                                                    <span className="ant-avatar ant-avatar-circle ant-avatar-image tooltips1" data-toggle="modal" data-target="#exampleModalCenter">
                                                        <img className='user-avatar' src={cimage} alt={cimage} />
                                                        <span className="tooltiptexts1">select Account</span>
                                                    </span>
                                                </span>
                                            </div>

                                            
                                            <div className="mt-30">
                                                <div className="mt-10 d-flex justify-content-between btn">
                                                    <div className="btnmanage">
                                                        <div className='data-button deposite '>
                                                            <div className="data-btnimage">
                                                                <img src={'https://preapp.eusandbox.com/static/media/plus-icon.89c12ce1.svg'} />
                                                            </div>
                                                            &nbsp;<span className="elipse">Deposit/Withdraw</span>
                                                        </div>
                                                        <div className='data-button send'>
                                                            <div className="data-btnimage">
                                                                <img src={'https://preapp.eusandbox.com/static/media/request.b378a363.svg'} />
                                                            </div>
                                                            &nbsp;
                                                            <span className="elipse">Send/Request</span>
                                                        </div>
                                                        <div className='data-button exchange' >
                                                            <div className="data-btnimage">
                                                                <img src={'https://preapp.eusandbox.com/static/media/exchange-dark.26cab187.svg'} />
                                                            </div>
                                                            &nbsp;<span className="elipse">Exchange</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-40">
                                                <div className='intrested-account'>Intrested Account</div>
                                            </div>
                                            <div className="mt-25">
                                                {InrestedAccount.map((item, index) =>
                                                    <div className="intrestdata" key={index}>
                                                        <img src={item.img} style={{ width: '35px', height: '35px', marginTop: '5px' }} />
                                                        <span className="erned">Total Intrest Erned</span>
                                                        <span className="intrestrate">{item.data}</span>
                                                        <p className="compound">Compounded dailyNo fee</p>
                                                    </div>
                                                )}
                                            </div>
                                            

                                            <div className='mt-40'>
                                                <p style={{ color: '#848fa2' }}>Transactions</p>
                                                {show ?
                                                    <div className="mt-30">

                                                        {
                                                            Trasaction.map((item, index) =>
                                                                <div>
                                                                    {item.isCompleted ?
                                                                        <div className="transaction-data">
                                                                            <div className="transaction-data-one" key={index}>
                                                                                <img src={item.image} />
                                                                                <span className="erned" >{item.transType}</span>
                                                                                <span className="intrestrate data-two">{item.money}</span>
                                                                                <div className="compound">{item.treasury}
                                                                                    <span style={{ color: '#0e8dea', paddingLeft: '15px' }}>Compeleted</span>
                                                                                </div>
                                                                            </div>
                                                                        </div> :
                                                                        <div className="transaction-data">
                                                                            <div className="transaction-data-one" key={index}>
                                                                                <img src={item.image} />
                                                                                <span className="erned" >{item.transType}</span>
                                                                                <span className="intrestrate data-two">{item.money}</span>
                                                                                <div className="compound">{item.treasury}
                                                                                    <span style={{ color: 'rgb(250, 152, 60)', paddingLeft: '15px' }}>Pending</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            )
                                                        }
                                                        <div className="trasaction-one">
                                                            <a className="transaction" style={{ color: '#0e8dea', fontWeight: '450', textDecoration: 'none', cursor: 'pointer' }} onClick={() => ChangeShowFalse()} >
                                                                see less
                                                    </a>
                                                        </div>
                                                    </div>
                                                    : <div className="mt-30">
                                                        {
                                                            SeeTransaction.map((item, index) =>

                                                                <div className="transaction-data">
                                                                    <div className="transaction-data-one" key={index}>
                                                                        <img src={item.image} />
                                                                        <span className="erned" >{item.transType}</span>
                                                                        <span className="intrestrate data-two">{item.money}</span>
                                                                        <div className="compound">{item.treasury}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        <span className="seeall">
                                                            <a className="intrestrate" style={{ color: '#0e8dea', fontWeight: '450', textDecoration: 'none', cursor: 'pointer' }} onClick={() => ChangeShow()} >
                                                                see all
                                                </a>
                                                        </span>
                                                    </div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-30'>
                                    <a className="intrestrate" style={{ color: '#0e8dea', fontWeight: '450', textDecoration: 'none', cursor: 'pointer' }}>Contact List</a>
                                    <p className='sendmoney'>Send/Request Money</p>
                                </div>
                                <div class="card contact-card">
                                    <div >
                                        <div class="card-body">
                                            {Contact.map((item, index) =>
                                                <div className="contats" key={index}>
                                                    <div className='contacts-image'>
                                                        <img className="contact-avatar" src={item.images} style={{ width: '35px', height: '35px', marginTop: '5px' }} />
                                                    </div>
                                                    <div className='contacts-name'>{item.name}</div>
                                                    <div className="contacts-number">{item.numbers}</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="setmodel">
                                    <div className="setmodel">
                                        <div className="modal-dialog " role="document">
                                            <div className="modal-content">
                                                <div className="modal-header ">
                                                    <div className="header1">
                                                        <div>
                                                            <div type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">×</span>
                                                            </div>
                                                        </div>
                                                        <h5 className="modal-title" id="exampleModalLongTitle">NeoBenk Accounts</h5>
                                                        <h5 className="modal-title" id="exampleModalLongTitle" style={{ color: '#0e8dea', fontWeight: '450', fontSize: '15px', cursor: 'pointer' }} >Edit</h5>
                                                    </div>
                                                    {scroller &&
                                                        <div className="scrollingHeight">
                                                            <div className="header2" style={{ color: '#848fa2', fontSize: '13px' }}>Total Balance</div>
                                                            <div className="header3" style={{ fontWeight: '500', fontSize: '16px' }}>R28.96</div>
                                                        </div>}
                                                    <div className="searchinput" >
                                                        <input type="text" style={{ width: '100%' }} className="inputbar" placeholder="Search.." onChange={(e) => { setsearchTerm(e.target.value) }} title="Type in a category" />
                                                    </div>
                                                </div>


                                                <div className={`modal-body newscroll ${! scroller && 'body-scroll'}`} id="myDiv" onScroll={HandleScroll} >
                                                    <div className="body-head">
                                                        <span>Active Account</span>
                                                        <span>Balance in ZAR</span>
                                                    </div>
                                                    <div className="body-content mt-20" >
                                                        {active ?
                                                            <div className="body-content">

                                                                {ActiveAccount.filter((item) => {
                                                                    if (searchTerm == "") {
                                                                        return item
                                                                    } else if (item.contryName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                                        return item
                                                                    }
                                                                }).map((item, index) =>
                                                                    <div className="contats" key={index} style={{ padding: "0px" }}>
                                                                        <img className="transaction-data-one" src={item.image} style={{ width: '35px', height: '35px', marginTop: '5px' }} />
                                                                        <span className='erned'>{item.moneyType}</span>
                                                                        <span className="intrestrate data-two">{item.money}</span>
                                                                        <div >
                                                                            <span style={{ fontSize: '13px' }} className="compound">{item.contryName} &nbsp;•&nbsp;{item.currencyType}&nbsp;•&nbsp;{item.apy}</span>
                                                                            <hr style={{ marginLeft: "45px" }} />
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                <div className="trasaction-one">
                                                                    <a className="intrestrate" style={{ color: '#0e8dea', fontWeight: '450', textDecoration: 'none', cursor: 'pointer' }} onClick={() => ChangeActiveFalse()} >
                                                                        see less
                                                            </a>
                                                                </div>
                                                            </div>
                                                            :
                                                            <div className="body-content">
                                                                {ActiveAccounts.filter((item) => {
                                                                    if (searchTerm == "") {
                                                                        return item
                                                                    } else if (item.contryName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                                        return item
                                                                    }
                                                                }).map((item, index) =>

                                                                    <div className="contats" key={index} style={{ padding: "0px" }}>
                                                                        <img className="transaction-data-one" src={item.image} style={{ width: '35px', height: '35px', marginTop: '5px' }} />
                                                                        <span className='erned'>{item.moneyType}</span>
                                                                        <span className="intrestrate data-two">{item.money}</span>
                                                                        <div >
                                                                            <span style={{ fontSize: '13px' }} className="compound">{item.contryName} &nbsp;•&nbsp;{item.currencyType}&nbsp;•&nbsp;{item.apy}</span>
                                                                            <hr style={{ marginLeft: "45px" }} />
                                                                        </div>
                                                                    </div>
                                                                )}
                                                                <div className="seeall">
                                                                    <a className="intrestrate" style={{ color: '#0e8dea', fontWeight: '450', textDecoration: 'none', cursor: 'pointer' }} onClick={() => ChangeActive()} >
                                                                        see all
                                                </a>
                                                                </div>
                                                            </div>
                                                        }

                                                    </div>
                                                </div>
                                                <div class="modal-footer" style={{ backgroundColor: "black" }}>
                                                    <span> <img src={'https://preapp.eusandbox.com/static/media/request.b378a363.svg'} /></span><span className="model-text">Send/Request</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div>
            <Footer />
            <MediaQuery maxWidth={460} minWidth={320}>
                <div className="moreSpace"></div>
            </MediaQuery>
            {/* <Footer /> */}
        </>
    )
}

export default Home