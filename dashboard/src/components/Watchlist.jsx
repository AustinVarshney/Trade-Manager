import React, { useState } from "react";
import "./Watchlist.css";
import SearchIcon from "@mui/icons-material/Search";
import { watchlist } from "../assets/assets";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Tooltip } from "react-tooltip";
import DoughnutChart from "./DoughnutChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const Watchlist = () => {
  let [content, setContent] = useState("");

  let userInput = (event) => {
    setContent(event.target.value);
  }

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const data = {
    labels: watchlist.map((star1) => star1.name),
    datasets: [
      {
        label: "Stock Price",
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(201, 203, 207, 0.6)'
        ],
        hoverOffset: 4,
        data: watchlist.map((star1) => star1.price),
      },
    ],
  };

  return (
    <div className="outerWatchlistDiv1">
      <div className="innerWatchlistDiv1">
        <SearchIcon style={{ color: "#616161" }} />
        <input type="text" placeholder="Search eg: infy, bse, nifty fut, nifty weekly, gold mcx" value={content} onChange={userInput} />
        {content == "" ?
          <p>{watchlist.length}/20</p>
          :
          <p>
            {watchlist.filter((item) => {
              return item.name.toLowerCase().includes(content.toLowerCase());
            }).length}/20
          </p>
        }

      </div>

      {content == "" ?
        <div className="outerWatchlistDiv2">
          {watchlist.map((item, index) => (
            <div key={item.id} className="innerWatchlistDiv2" onMouseOver={() => handleMouseOver(index)} onMouseOut={handleMouseOut}>
              <div className="innerMostWatchlistDiv1">
                <p style={item.isDown ? { color: "#DF4949" } : { color: "#67C988" }}>{item.name}</p>
              </div>
              <div className="innerMostWatchlistDiv2">
                <p className="innerMostWatchlistPara1">{item.percent}</p>
                <p className="innerMostWatchlistPara2" style={item.isDown ? { color: "#DF4949" } : { color: "#67C988" }}>{item.isDown ? (<KeyboardArrowDownIcon />) : (<KeyboardArrowUpIcon />)}</p>
                <p className="innerMostWatchlistPara3" style={item.isDown ? { color: "#DF4949" } : { color: "#67C988" }}>{item.price}</p>
              </div>
              <div className="innerMostWatchlistDiv3" style={hoveredIndex === index ? {} : { display: "none" }}>
                <button style={{ backgroundColor: "#0070ff", color: "white" }}>
                  <a data-tooltip-id="my-tooltip-1" data-tooltip-content="Buy (B)">Buy</a>
                </button>
                <button style={{ backgroundColor: "#ff4600", color: "white" }}>
                  <a data-tooltip-id="my-tooltip-1" data-tooltip-content="Sell (S)">Sell</a>
                </button>
                <button style={{ backgroundColor: "white", color: "gray", border: "0.5px solid gray", }}>
                  <a data-tooltip-id="my-tooltip-2" data-tooltip-content="Analytics (A)"><BarChartIcon style={{ display: "flex" }} /></a>
                </button>
                <button style={{ backgroundColor: "white", color: "gray", border: "0.5px solid gray" }}>
                  <a data-tooltip-id="my-tooltip-1" data-tooltip-content="More">
                    <MoreHorizIcon style={{ display: "flex" }} />
                  </a>
                </button>
                <Tooltip id="my-tooltip-1" style={{ height: "0.25rem", display: "flex", alignItems: "center", width: "2.2rem", fontSize: "0.7rem", backgroundColor: "gray", textAlign: "center", }} />
                <Tooltip id="my-tooltip-2" style={{ height: "0.25rem", display: "flex", alignItems: "center", width: "4rem", fontSize: "0.7rem", backgroundColor: "gray", textAlign: "center", }} />
              </div>
            </div>
          ))}
        </div>
        :
        <div className="outerWatchlistDiv2">
          {
            watchlist.filter((item) => {
              return item.name.toLowerCase().includes(content.toLowerCase());
            }).map((item, index) => (
              <div key={item.id} className="innerWatchlistDiv2" onMouseOver={() => handleMouseOver(index)} onMouseOut={handleMouseOut}>
                <div className="innerMostWatchlistDiv1">
                  <p style={item.isDown ? { color: "#DF4949" } : { color: "#67C988" }}>{item.name}</p>
                </div>
                <div className="innerMostWatchlistDiv2">
                  <p className="innerMostWatchlistPara1">{item.percent}</p>
                  <p className="innerMostWatchlistPara2" style={item.isDown ? { color: "#DF4949" } : { color: "#67C988" }}>{item.isDown ? (<KeyboardArrowDownIcon />) : (<KeyboardArrowUpIcon />)}</p>
                  <p className="innerMostWatchlistPara3" style={item.isDown ? { color: "#DF4949" } : { color: "#67C988" }}>{item.price}</p>
                </div>
                <div className="innerMostWatchlistDiv3" style={hoveredIndex === index ? {} : { display: "none" }}>
                  <button style={{ backgroundColor: "#0070ff", color: "white" }}>
                    <a data-tooltip-id="my-tooltip-1" data-tooltip-content="Buy (B)">Buy</a>
                  </button>
                  <button style={{ backgroundColor: "#ff4600", color: "white" }}>
                    <a data-tooltip-id="my-tooltip-1" data-tooltip-content="Sell (S)">Sell</a>
                  </button>
                  <button style={{ backgroundColor: "white", color: "gray", border: "0.5px solid gray", }}>
                    <a data-tooltip-id="my-tooltip-2" data-tooltip-content="Analytics (A)"><BarChartIcon style={{ display: "flex" }} /></a>
                  </button>
                  <button style={{ backgroundColor: "white", color: "gray", border: "0.5px solid gray" }}>
                    <a data-tooltip-id="my-tooltip-1" data-tooltip-content="More">
                      <MoreHorizIcon style={{ display: "flex" }} />
                    </a>
                  </button>
                  <Tooltip id="my-tooltip-1" style={{ height: "0.25rem", display: "flex", alignItems: "center", width: "2.2rem", fontSize: "0.7rem", backgroundColor: "gray", textAlign: "center", }} />
                  <Tooltip id="my-tooltip-2" style={{ height: "0.25rem", display: "flex", alignItems: "center", width: "4rem", fontSize: "0.7rem", backgroundColor: "gray", textAlign: "center", }} />
                </div>
              </div>
            ))
          }
        </div>
      }

      <div>
        <DoughnutChart chartData={data} />
      </div>

    </div>
  );
};

export default Watchlist;
