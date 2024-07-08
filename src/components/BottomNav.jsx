import React from 'react'

function BottomNav() {
  return (
    <div className=' bg-slate-900 py-1 px-4 flex items-center justify-between rounded-md gap-4'>
        <div className="bg-black inline-block p-2 rounded-lg hover:bg-white text-white hover:text-black transition-all duration-200 cursor-pointer">
          <h1 className="ga-maamli-regular text-lg font-semibold ">Hsk</h1>
        </div>
        <span className='text-white font-thin'>About</span>
        <span className='text-white font-thin'>Work</span>
        <span className='text-white font-thin'>Contact</span>
        <span className='text-white font-thin'>Resume</span>
    </div>
  )
}

export default BottomNav