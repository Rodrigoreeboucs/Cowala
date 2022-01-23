import React from 'react'
import logo from './assets/Logo.png'
import name from './assets/Cowala Software.png'

import { Headerr } from './style'

const index = () => {
    return (
        <Headerr>
            <img src={logo} alt='logo' />
            <img src={name} alt='name' />
          
        </Headerr>
    )
}

export default index
