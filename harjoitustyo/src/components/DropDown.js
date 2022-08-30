import React, { useState } from 'react'

const DropDown = ({data, name, setUrlParams, urlParams, title}) => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [buttonVar, setButtonVar] = useState(title)
    const [buttonClicked, setButtonClicked] = useState(false)

    
  return (
    <div>
        <button 
        onClick={() => setShowDropDown(!showDropDown)}
        className={buttonClicked ? 'relative bg-blue-600 w-48 h-10 rounded-xl mt-10 text-white text-lg shadow-lg transition-all duration-500' 
        : 'relative bg-green-600 w-48 h-10 rounded-xl mt-10 text-white text-lg shadow-lg transition-all duration-500'
        }>
            {buttonVar}</button>
            {showDropDown &&
        <div className='absolute bg-white w-48 pl-3 shadow-2xl'>
            <ul>
            {data.map((data) => {
                if(data.name === "None") {
                    return(
                        <li className="cursor-pointer" onClick={() => {
                            setButtonVar(title)
                            setShowDropDown(false)
                            setButtonClicked(false)
                            setUrlParams({...urlParams, [name]: null })
                        }}>{data.name}</li>
                    )
                }
                return(
                    <li className="cursor-pointer" onClick={() => {
                        setButtonVar(data.name)
                        setButtonClicked(true)
                        setShowDropDown(false)
                        setUrlParams({...urlParams, [name]: data.name })
                    }}>{data.name}</li>
                    )
                })}
          </ul>
        </div>
            }
    </div>
  )
}

export default DropDown