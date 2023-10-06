import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home';
import CreateBooks from '../Pages/CreateBooks';
import EditBooks from '../Pages/EditBooks';
import DeleteBooks from '../Pages/DeleteBooks';
import ShowBooks from '../Pages/ShowBooks';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/books/create' element= {<CreateBooks/>}></Route>
      <Route path='/books/delete/:id' element= {<DeleteBooks/>}></Route>
      <Route path='/books/edit/:id' element= {<EditBooks/>}></Route>
      <Route path='/books/details/:id' element= {<ShowBooks/>}></Route>
    </Routes>
  )
}

export default App