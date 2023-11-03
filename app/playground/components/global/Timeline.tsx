"use client";

import { Divider } from '@nextui-org/react';
import { after } from 'node:test'
import React from 'react'

type Props = {}

const Timeline = (props: Props) => {
  return (
    <div>
        <div className='w-full h-10 overflow-x-scroll' style={{display: 'flex', flexDirection: 'row'}} >
            {
                new Array(200).fill("").map((_, index) => (
                    <div className=' w-[2px] ml-3 h-10 bg-gray-300' key={index} ></div>
                ))
            }
        </div>
    </div>
  )
}

export default Timeline