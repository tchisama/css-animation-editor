"use client"
import React,{useEffect, useState} from 'react'
import {Tabs, Tab} from "@nextui-org/react";

type Props = {}


function TimeLinee({}: Props) {
  return (
    <div className=' h-[300px]'>
        <div className="flex w-full h-full flex-col">
            <Tabs variant='underlined' aria-label="Options">
                <Tab key="timeline" title="Timeline"></Tab>
            </Tabs>
        </div>  
    </div>
  )
}

export default TimeLinee