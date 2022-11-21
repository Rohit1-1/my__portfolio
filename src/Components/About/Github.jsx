import React from "react";
import GitHubCalendar from "react-github-calendar"
export const Github = () => {
  return (
    <>
      <div className="section" data-aos="fade-up">
        <h2 className="section__title">
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
