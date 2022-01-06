import React from 'react'

export const Activities = () => {
    return (
        <div className = "flex-ctn">
            <div className ="activity-card">
                <div className =" activity-icon aci-1"></div>
                <p className ="p-activity">You have new 5 followers including <span className="color-primary">Katheryn Crawford </span>and <span className="color-primary">Piper Shaw</span> </p>
            </div>
            <div className ="activity-card">
                <div className ="activity-icon aci-2"></div>
                <p className ="p-activity">3 new events were added to your calendar</p>
            </div>
            <div className ="activity-card">
                <div className = "activity-icon aci-3"></div>
                <p className ="p-activity">You have 3 pending readings to complete 🤓</p>
            </div>
        </div>
    )
}
