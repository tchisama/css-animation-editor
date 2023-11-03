"use client"
import { Tab, Tabs } from '@nextui-org/react'
import React from 'react'

type Props = {}

function Controlers({}: Props) {
  return (
    <div className='w-[500px] border'>
        <Tabs variant='underlined' aria-label="Options">
            <Tab key="controlers" title="Controlers"></Tab>
        </Tabs>
    </div>

  )
}

export default Controlers