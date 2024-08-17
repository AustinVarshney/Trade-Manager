import "./Navbar.css"
import logo from "../../assets/logo.svg"
import kiteLogo from "../../assets/kite-logo.svg"
import consoleLog from "../../assets/console.svg"
import kiteConnect from "../../assets/kite-connect.svg"
import coin from "../../assets/coin.svg"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"
import { Link } from "react-router-dom";

export default function Navbar() {
    let [showSidebar1, setShowSidebar1] = useState(true);
    let [showSidebar2, setShowSidebar2] = useState(true);

    let sidebar1 = () => {
        setShowSidebar1(!showSidebar1);
    }

    let sidebar2 = () => {
        setShowSidebar2(!showSidebar2);
    }

    return (
        <div>
            <div className="container outerNav1">
                <div className="innerNav1">
                    <a href="/"><img src={logo} alt="" /></a>
                </div>
                <div className="innerNav2">
                    <ul>
                        <li><a href="/signup">Signup</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/support">Support</a></li>
                        <li><button onClick={sidebar1}><MenuIcon /></button></li>
                    </ul>
                </div>
                <div className="innerNav3">
                    <ul>
                        <li><button onClick={sidebar2}><MenuIcon /></button></li>
                    </ul>
                </div>
            </div>
            <div className="outerNav2" style={showSidebar1 ? { display: "none" } : {}}>
                <div className="innerNav4">
                    <div>
                        <Link to="http://localhost:5173/login">
                            <img src={kiteLogo} />
                            <h4>Kite</h4>
                            <p>Trading Platform</p>
                        </Link>
                    </div>
                    <div>
                        <Link>
                            <img src={consoleLog} />
                            <h4>Console</h4>
                            <p>Backoffice</p>
                        </Link>
                    </div>
                    <div>
                        <Link>
                            <img src={kiteConnect} />
                            <h4>Kite Connect</h4>
                            <p>Trading APIs</p>
                        </Link>
                    </div>
                    <div>
                        <Link>
                            <img src={coin} />
                            <h4>Coin</h4>
                            <p>Mutual funds</p>
                        </Link>
                    </div>
                </div>
                <div className="innerNav5">
                    <div>
                        <p>Utilities</p>
                        <ul>
                            <li><a href="#">Brokerage calculator</a></li>
                            <li><a href="#">Margin calculator</a></li>
                            <li><a href="#">Holiday Calender</a></li>
                            <li><a href="#">Markets</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Updates</p>
                        <ul>
                            <li><a href="#">Z-Connect blog</a></li>
                            <li><a href="#">Pulse News</a></li>
                            <li><a href="#">Circulars/Bulletin</a></li>
                            <li><a href="#">IPOs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="outerNav3" style={showSidebar2 ? { display: "none" } : {}}>
                <div className="innerNav6">
                    <div>
                        <p><a href="/signup">Signup</a></p>
                        <p><a href="/products">Products</a></p>
                        <p><a href="/support">Support</a></p>
                    </div>
                    <div>
                        <p><a href="/about">About</a></p>
                        <p><a href="/pricing">Pricing</a></p>
                    </div>
                </div>
                <div className="innerNav7">
                    <div>
                        <p><Link to="http://localhost:5173/login"><img src={kiteLogo} />Kite</Link></p>
                        <p><a href="/"><img src={kiteConnect} />Kite Connect</a></p>
                    </div>
                    <div>
                        <p><a href="/"><img src={consoleLog} />Console</a></p>
                        <p><a href="/"><img src={coin} />Coin</a></p>
                    </div>
                </div>
                <div className="innerNav8">
                    <div>
                        <p>Utilities</p>
                        <ul>
                            <li><a href="#">Brokerage calculator</a></li>
                            <li><a href="#">Margin calculator</a></li>
                            <li><a href="#">Holiday Calender</a></li>
                            <li><a href="#">Markets</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Updates</p>
                        <ul>
                            <li><a href="#">Z-Connect blog</a></li>
                            <li><a href="#">Pulse News</a></li>
                            <li><a href="#">Circulars / Bulletin</a></li>
                            <li><a href="#">IPOs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}