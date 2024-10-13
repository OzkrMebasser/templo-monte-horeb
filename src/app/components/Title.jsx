import React from 'react'

const Title = ({color, title, marginTop}) => {
  return (
    <div  className={`${marginTop} p-[1.5rem]}`}>

           <h3 className={`uppercase text-2xl font-bold text-center text-[#a09a6a] `}>
     {    title}
        </h3>
    </div>
  )
}

export default Title