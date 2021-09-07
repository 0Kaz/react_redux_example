import React from 'react'

const Home = ({changeAuth, auth}) => {
    return (
        <div>
            Home

            <button onClick={changeAuth}>{auth ? 'You got it ' : 'Get it now !'}</button>
        </div>
    )
}

export default Home
