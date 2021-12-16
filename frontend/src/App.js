import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ImageIndex from './components/ImageIndex'
import NavBar from './components/NavBar'
import Register from './components/Register'
import Login from './components/Login'
import ImageShow from './components/ImageShow'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/main.scss'
import Affirmations from './components/Affirmations'
import UploadImage from './components/UploadImage'
import AddAndDeleteComment from './components/AddAndDeleteComment'
import UserProfile from './components/UserProfile'
import UpdateImage from './components/UpdateImage'


function App() {


  return (
    
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/register/" component={Register}/>
        <Route exact path="/login/" component={Login}/>
        <Route exact path="/images/" component={ImageIndex}/>
        <Route exact path="/images/:id/" component={ImageShow}/>
        <Route exact path="/images/:id/edit" component={UpdateImage}/>
        <Route exact path="/images/:id/comments/" component={AddAndDeleteComment}/>
        <Route exact path="/images/:id/comments/edit" component={UpdateImage}/>
        <Route exact path="/affirmations/" component={Affirmations}/>
        <Route exact path="/upload/" component={UploadImage}/>
        <Route exact path="/userprofile/:id" component={UserProfile}/>
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
