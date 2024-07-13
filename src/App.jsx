// import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import View from './components/View'
import Add from './components/Addcandidate'
import Post from './components/Createpost'
import Navigation from './components/Navigation'
// import Header from './components/header'
function App(){
  return(
    <>
    <Navigation></Navigation>
    <BrowserRouter>
     <Routes>
      <Route path='/' element ={<Navigation/>}/>
      <Route path='/view'  element ={<View/>}/>
      <Route path='/add'  element ={<Add/>}/>
      <Route path='/post'  element ={<Post/>}/> 
        
      
       
    </Routes>
    </BrowserRouter>
    
    </>

    
    

  )
}
export default App
