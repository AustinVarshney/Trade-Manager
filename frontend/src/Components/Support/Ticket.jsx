import React from 'react'
import "./Ticket.css"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import TollIcon from '@mui/icons-material/Toll';

const Ticket = () => {
  return (
    <div className='container outerTicketDiv'>
      <p>To create a ticket, select a relevant topic</p>
      <div className='innerTicketDiv1'>
        <div className='innerMostTicketDiv1'>
            <p><ControlPointIcon style={{fontSize: "25px", color: "#222222"}}/>Account Opening</p>
            <a>Getting started</a>
            <a>Online</a>
            <a>Offline</a>
            <a>Charges</a>
            <a>Company, Partnership and HUF</a>
            <a>Non Resident Indian (NRI)</a>
        </div>
        <div className='innerMostTicketDiv2'>
            <p><PermIdentityIcon style={{fontSize: "25px", color: "#222222"}}/>Your Zerodha Account</p>
            <a>Login credentials</a>
            <a>Your Profile</a>
            <a>Account modification and segment addition</a>
            <a>CMR & DP ID</a>
            <a>Nomination</a>
            <a>Transfer and conversion of shares</a>
        </div>
        <div className='innerMostTicketDiv3'>
            <p><SignalCellularAltIcon style={{fontSize: "25px", color: "#222222"}}/>Trading and Markets</p>
            <a>Trading FAQs</a>
            <a>Kite</a>
            <a>Margins</a>
            <a>Product and order types</a>
            <a>Corporate actions</a>
            <a>Kite features</a>
        </div>
      </div>
      <div className='innerTicketDiv2'>
        <div className='innerMostTicketDiv4'>
            <p><CreditCardIcon style={{fontSize: "25px", color: "#222222"}}/>Funds</p>
            <a>Fund withdrawal</a>
            <a>Adding funds</a>
            <a>Adding bank accounts</a>
            <a>eMandates</a>
        </div>
        <div className='innerMostTicketDiv5'>
            <p><ContactPhoneIcon style={{fontSize: "25px", color: "#222222"}}/>Console</p>
            <a>IPO</a>
            <a>Portfolio</a>
            <a>Funds statement</a>
            <a>Profile</a>
            <a>Reports</a>
            <a>Referral program</a>
        </div>
        <div className='innerMostTicketDiv6'>
            <p><TollIcon style={{fontSize: "25px", color: "#222222"}}/>Coin</p>
            <a>Understanding mutual funds and Coin</a>
            <a>Coin app</a>
            <a>Coin web</a>
            <a>Transactions and reports</a>
            <a>National Pension Scheme (NPS)</a>
        </div>
      </div>
    </div>
  )
}

export default Ticket
