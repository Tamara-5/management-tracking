import React from "react"
import { BrowserRouter } from "react-router-dom"

import { PageLayout } from "./components/layout"
import { Provider } from "react-redux"
import { store } from "./store"

import "./styles/index.global.scss"

const App = () => (
   <Provider store={store}>
      <BrowserRouter>
         <PageLayout />
      </BrowserRouter>
   </Provider>
)

export default App
