"use client"
import React,{useEffect, useState} from 'react'
import {Tabs, Tab} from "@nextui-org/react";
import Timeline from './global/Timeline';

type Props = {}


function TimeLinee({}: Props) {
  return (
    <div className=' h-[300px]'>
        <div className="flex w-full h-full flex-col">
            <Tabs variant='underlined' aria-label="Options">
                <Tab key="timeline" title="Timeline"></Tab>
            </Tabs>
            <Timeline/>
        </div>  
    </div>
  )
}

export default TimeLinee