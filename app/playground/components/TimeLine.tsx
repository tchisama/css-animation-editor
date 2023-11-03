"use client"
import React from 'react'
import {Tabs, Tab} from "@nextui-org/react";

type Props = {}

function TimeLine({}: Props) {
  return (
    <div className=' h-[300px]'>
        <div className="flex w-full flex-col">
            <Tabs variant='underlined' aria-label="Options">
                <Tab key="timeline" title="Timeline"></Tab>
            </Tabs>
        </div>  
    </div>
  )
}

export default TimeLine