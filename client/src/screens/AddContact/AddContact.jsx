import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Styles from './addContact.module.css';
import axios from 'axios';

const AddContact = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: 0
  })

  const updateData = (e) => {
    setFormData(prev => (
      {
        ...prev,
        [e.target.name]: e.target.value
      }))
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formData)
    axios.post('http://localhost:3001/addContact', formData)
      .then(result => {
        console.log(result)
        navigate('/');
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={Styles.back_color}>
      <h2 style={{ color: "white", textAlign: 'center', paddingTop: '15px' }}>Add Contact</h2>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <div className={Styles.box}>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" onChange={(e) => { updateData(e) }} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={(e) => { updateData(e) }} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
              <input type="number" className="form-control" id="exampleInputPassword1" name="age" onChange={(e) => { updateData(e) }} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddContact;