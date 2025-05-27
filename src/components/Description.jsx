import React from 'react'

function Description({ml, children, bg}) {
  return (
    <div className={`observe flex h-screen ${bg} w-3/4 justify-center items-center sm:max-w-sm md:max-w-lg lg:max-w-xl mt-28 ${ml} mr-3 xl:mr-14 text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
      {children}
    </div>
  )
}

export default Description

{/* <h2 class="w-3/4 h-screen sm:max-w-sm md:max-w-lg lg:max-w-xl mt-28 ml-auto mr-3 xl:mr-14 text-xl sm:text-2xl md:text-3xl lg:text-4xl"><p>   Hey there! I've been into coding for about 7 years now, and I    just love creating awesome, rock-solid products🚀   </p></h2> */}

// <h2 class="w-3/4 h-screen sm:max-w-sm md:max-w-lg lg:max-w-xl mt-28 ml-5 xl:ml-14  text-xl sm:text-2xl md:text-3xl lg:text-4xl"><p>   I am passionate about math, research and getting into the low-level stuff.    Knowing the roots🌴 to anticipate how the tree will grow.   </p></h2>

{/* <h1 class="mx-auto max-sm:max-w-sm sm:w-160 text-3xl sm:text-5xl text-center font-medium italic">“Be the designer of your world“ <span class="text-xl sm:text-3xl">- James Clear</span></h1> */}