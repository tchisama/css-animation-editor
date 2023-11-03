"use client"
import React from 'react'
import {Tabs, Tab} from "@nextui-org/react";
import TimelineCom from './global/Timeline';

type Props = {}

function TimeLine({}: Props) {
  return (
    <div className=' h-[300px]'>
        <div className="flex w-full flex-col">
            <Tabs variant='underlined' aria-label="Options">
                <Tab key="timeline" title="Timeline"></Tab>
            </Tabs>
            <TimelineCom duration={200} keyframes={[{time: 10, value: 0}, {time: 100, value: 100}]} />
        </div>  
    </div>
  )
}

export default TimeLine