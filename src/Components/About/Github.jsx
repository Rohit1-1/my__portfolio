import React from "react";
import GitHubCalendar from "react-github-calendar"
import "./Github.css"
export const Github = () => {
  return (
    <>
      <div className="github_box">
        <h2 className="github__title differentp">
          Days I <span className="different"> Code</span>
        </h2>
        
        < GitHubCalendar
          username="Rohit1-1"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </div>
    </>
  );
};
