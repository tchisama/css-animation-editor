import React from 'react'
import Controlers from './components/Controlers'
import View from './components/View'
import TimeLine from './components/TimeLine'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <div className='flex-1 flex'>
            <Controlers/>
            <View/>
        </div>
        <TimeLine/>
    </div>
  )
}

export default page