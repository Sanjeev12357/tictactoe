import React from 'react'

const Icon = ({name}) => {
  
    switch (name){
        case 'cross':
            return (
                <div>
                    <h1>X</h1>
                </div>
            )
        case 'circle':
            return (
                <div>
                    <h1>O</h1>
                </div>
            )
        default:
            return (
                <div>
                    <h1>nil</h1>
                </div>
            )
    }

}

export default Icon