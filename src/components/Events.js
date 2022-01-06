import React from 'react'

export const Events = () => {

    return (
        <div className= "events-ctn">
        <div className= "arrow-icon"></div>
        <h3 className ="p-youth">Youth Talent & Education</h3>
        <h3 className ="p-date">May, 20</h3>
        <img className = 'clock-img'  src="../../3000434.png" alt="clock dec img" />
        <div className= "arrow-icon-R"></div>
        <p className="events-p" >EVENTS TODAY</p>
        <hr className = "r-events" />
        <div className  = "events-card c1">
            <img className = "m-20" src="../../thumbnail-1.svg" alt=" thumbnail" />
            <div>
            <p className = "p-cevent">10:30AM</p>               
            <p className ="course-spec">Webinar: the basics of…</p> 
            </div>
           
             
             
            
        </div>
        
        <div className  = "events-card c2">
            <img className = "m-20" src="../../thumbnail.png" alt=" thumbnail" />
             <div>
             <p className = "p-cevent">2:15 PM</p>
             <p className ="course-spec">Team Building Activity 🔥</p>
             </div>
             
        </div>
        <div></div>
        </div>
    )
}
