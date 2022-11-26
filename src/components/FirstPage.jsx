import React,{Fragment} from 'react'
import FirstPageComponent from './FirstPageComponent'
import NavbarComponent from './NavbarComponent'

const FirstPage = () => {
  return (
    <Fragment>
        <NavbarComponent/>
        <FirstPageComponent/>   
    </Fragment>
  )
}

export default FirstPage