"use client";
import React, {useState, useEffect} from 'react'

function Intro() {
  const tags = [
    "Full-Stack dev",
    "Especialista en optimizacion de procesos",
    "System Engineering"
  ];

  const [index, setIndex] = useState(0);

  const changeIndex = () =>{
    const isLastIndex = index === tags.length - 1;
    const newIndex = isLastIndex ? 0 : index + 1;
    setIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(changeIndex, 2600);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className='observer flex flex-col h-screen justify-center items-center'>
      <h1 className="text-center text-6xl font-bold"> Hello, I´m  <br /> Cristian Machado</h1>
      <div className="flex flex-row items-center m-6">
        <h2 className='text-2xl font-bold'>Just a </h2>
        <div className='mx-2 px-2 py-1 border-blue-500 border rounded-lg text-2xl font-bold'>
          {
            tags[index]
          }
        </div>
      </div>
    </div>
  )
}

export default Intro