import React from 'react'
import { Activities } from '../components/Activities'
import { ColumnNav } from '../components/ColumnNav'
import { Dashboard } from '../components/Dashboard'
import { Events } from '../components/Events'
import { Nav } from '../components/Nav'
import { Progress } from '../components/Progress'


export const PlatformScreen = () => {
    return (
        <div className = 'platform__main-content'>
         <Nav/>
         <ColumnNav/>
        
         <div className ='platform-container'>
         <h3 className = 'h-subtitle'>Dashboard</h3>
            <Dashboard/>
            <h3 className = 'h-subtitle mt-30'>Events</h3>
            <Events/>
            <div className = 'flex-wrap  mt-30'>
            <h3 className = 'h-subtitle'>Activity</h3>
            <div className = 'line-act ' >
            </div>
            </div>
            <Activities/>

         <div className = 'flex-wrap  '>
         <Progress></Progress>
           </div>
        </div>
        </div>
    )
}