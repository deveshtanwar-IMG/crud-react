import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Styles from './home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([]);

    const getData = () => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getData();
    }, [])

    const deleteHandler = (id) => {
        console.log(id)
        axios.delete(`http://localhost:3001/deleteContact/${id}`)
            .then(res => {
                console.log(res)
                getData();
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={Styles.back_color}>
            <h2 style={{ color: "white", textAlign: 'center', paddingTop: '15px' }}>Crud App</h2>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <div className={Styles.box}>
                    <Link to='/addContact'><button className='btn btn-sm btn-success'>Add</button></Link>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((val) => {
                                return (
                                    <tr key={val._id}>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.age}</td>
                                        <td>
                                            <Link to={`/editContact/${val._id}`}><button className='btn btn-sm btn-secondary' style={{ margin: '5px' }}>Edit</button></Link>
                                            <button className='btn btn-sm btn-danger' onClick={() => { deleteHandler(val._id) }}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Home;