import { Button } from '@nextui-org/react'
import React from 'react'

type Props = {}

function View({}: Props) {
  return (
    <div className='border-b flex-1 bg-foreground-100 flex items-center justify-center'>
        <div className='w-[500px] drop-shadow-sm flex items-center justify-center border bg-white h-[500px]'>
            <Button>hello world</Button>
        </div>
    </div>
  )
}

export default View