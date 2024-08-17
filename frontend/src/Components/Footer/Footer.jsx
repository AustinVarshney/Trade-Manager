import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.svg"
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <div className='container outerFooterDiv'>
      <div className='innerFooterDiv1'>
        <div className='innerMostFooterDiv1'>
          <div>
            <img src={logo} />
          </div>
          <div>
            <p>&#169; 2010 - 2024, Zerodha Broking Ltd. <br /> All rights reserved.</p>
          </div>
          <div>
            <XIcon style={{fontSize: "1.5rem", color: "#666666", marginRight: "1rem"}}/>
            <FacebookIcon style={{fontSize: "1.5rem", color: "#666666", marginRight: "1rem"}}/>
            <InstagramIcon style={{fontSize: "1.5rem", color: "#666666", marginRight: "1rem"}}/>
            <LinkedInIcon style={{fontSize: "1.5rem", color: "#666666", marginRight: "1rem"}}/>
          </div>
          <hr style={{marginBottom: "1rem", border: "1px solid #eee"}}/>
          <div>
            <YouTubeIcon style={{fontSize: "1.5rem", color: "#666666", marginRight: "1rem"}}/>
            <WhatsAppIcon style={{fontSize: "1.5rem", color: "#666666", marginRight: "1rem"}}/>
            <TelegramIcon style={{fontSize: "1.5rem", color: "#666666", marginRight: "1rem"}}/>
          </div>
        </div>
        <div className='innerMostFooterDiv2'>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Products</li>
            <li>Pricing</li>
            <li>Referral programme</li>
            <li>Careers</li>
            <li>Zerodha.tech</li>
            <li>Press & media</li>
            <li>Zerodha Cares (CSR)</li>
          </ul>
        </div>
        <div className='innerMostFooterDiv3'>
          <h4>Support</h4>
          <ul>
            <li>Contact us</li>
            <li>Support portal</li>
            <li>Z-Connect blog</li>
            <li>List of charges</li>
            <li>Downloads & resources</li>
            <li>Videos</li>
            <li>Market overview</li>
            <li>How to file a complaint?</li>
            <li>Status of your complaints</li>
          </ul>
        </div>
        <div className='innerMostFooterDiv4'>
          <h4>Account</h4>
          <ul>
            <li>Open an account</li>
            <li>Fund transfer</li>
          </ul>
        </div>
      </div>
      <div className='innerFooterDiv2'>
        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a>complaints@zerodha.com</a>, for DP related to <a>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        <p>Procedure to file a complaint on <a>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
        <p><a>Smart Online Dispute Resolution</a> | <a>Grievances Redressal Mechanism</a></p>
        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        <p>Attention investors: 1- Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2- Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3- Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a>create a ticket here</a>.</p>
      </div>
      <div className="innerFooterDiv3">
        <h6><a href="">NSE</a></h6>
        <h6><a href="">BSE</a></h6>
        <h6><a href="">MCX</a></h6>
        <h6><a href="">Terms & Conditions</a></h6>
        <h6><a href="">Policies & Procedures</a></h6>
        <h6><a href="">Privacy Policy</a></h6>
        <h6><a href="">Disclosure</a></h6>
        <h6><a href="">For investor's attention</a></h6>
        <h6><a href="">Investor charter</a></h6>
      </div>
    </div>
  )
}

export default Footer
