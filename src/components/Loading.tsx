import React from 'react'

const Loading = () => {
  return (
    <div
      className="
    fixed
    inset-0 
    bg-[#a35f37]
    opacity-80
    z-10"
    >
      <div
        className="
      flex 
      justify-center 
      items-center 
      min-h-screen"
      >
        <div
          className="
        absolute 
        w-[200px] 
        h-[200px] 
        rounded-full 
        animate-ring 
        before:content-none 
        before:absolute 
        before:top-0
        before:left-0
        before:w-full
        before:h-full
        before:rounded-full
        before:shadow-[0_0_5px_rgba(255,255,255,0.3)]
        "
        ></div>
        <span
          className="
        text-white
        text-xl
        uppercase
        tracking-[1px]
        leading-[200px]
        animate-text
        "
        >
          loading...
        </span>
      </div>
    </div>
  )
}

export default Loading;
