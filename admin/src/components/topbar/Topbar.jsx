import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ebook admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">10</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">5</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://res.cloudinary.com/e-bookstore/image/upload/v1657181138/20220113_143845_jnaik8.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
