import axios from 'axios'
import { useEffect, useState } from 'react'
import { AppContainer } from "./AppStyle"
import { BASE_URL } from "./constant/BASE_URL/BASE_URL"
import Router from "./Routes/Router"
import GlobalState from './Contexts/GlobalState'

/* <!-- 

  font-family: 'Inter', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Poppins', sans-serif;

--> */

function App() {   

  return (
    <AppContainer>
      <GlobalState>
        <Router/>
      </GlobalState>
    </AppContainer>
  )
}

export default App
