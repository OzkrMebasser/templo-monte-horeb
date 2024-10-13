import React from 'react'

const Title = ({color, title, }) => {
  return (
    <div  className={`p-[1.5rem]}`}>

           <h3 className={`titles uppercase text-3xl font-bold text-center   `}>
     {    title}
        </h3>
    </div>
  )
}

export default Title