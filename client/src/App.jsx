import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './screens/Home/Home';
import AddContact from './screens/AddContact/AddContact';
import EditContact from './screens/EditContact/EditContact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/addContact' exact element={<AddContact />} />
        <Route path='/editContact/:id' exact element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
