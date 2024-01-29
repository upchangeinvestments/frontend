import React from 'react'

function ExploreMoreButton(props) {
  return (
    <a href="#" className="bg-[#A474E2] opacity-[.70] px-4 py-2 rounded-full">
            <button className='text-black'>
                {props.Text} 
            </button>
        </a>
  )
}

export default ExploreMoreButton;