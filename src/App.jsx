import { useState } from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import { Provider } from 'react-redux'
import  { store } from './Redux/Store/Store'

function App() {
  let routes=createHashRouter([
    {path:'',element:<Layout></Layout> ,errorElement:<NotFound></NotFound>,children:[
      {index:true,element:<Home></Home>},
      {path:'/about',element:<About></About>},
      {path:'/Contact',element:<Contact></Contact>}
    ]}
  ])
 return <>
<Provider store={store}>
<RouterProvider router={routes}></RouterProvider>
</Provider>
 </>
}

export default App
