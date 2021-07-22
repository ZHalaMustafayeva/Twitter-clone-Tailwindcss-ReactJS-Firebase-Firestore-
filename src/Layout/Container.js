import React from 'react'

function Container({children}) {
    return (
        <div className=" flex w-1265 max-w-7xl min-h-screen mx-auto">
            {children}
        </div>
    )
}

export default Container
