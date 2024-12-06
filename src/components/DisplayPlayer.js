import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DisplayPlayer() {
    const [player, setPlayer] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllTeam()
    },[])

    const getAllTeam = () => {
        let T = localStorage.getItem('player') || []
        T = JSON.parse(T)
        setPlayer(T)
    }

    // const deleteMatch = (id) => {
    const deleteMatch = (pos) => {
        let T = localStorage.getItem('player')
        T = JSON.parse(T)
        // T = T.filter(match => match.id !== id)
        T.splice(pos, 1)
        localStorage.setItem('player', JSON.stringify(T))
        setPlayer(T)
    }
  return (
    <div>


<div className="hero overlay" style={{ backgroundImage: 'url("images/addMatche.jpeg")' }}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-9 mx-auto text-center">
                    <h1 className="text-white">DisplayTeam</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="widget-next-match container mt-5 mb-5">
        <table className="table custom-table">
            <thead>
                <tr>    
                    <th>Id</th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Post</th>
                    <th>Team</th>
                </tr>
            </thead>
            <tbody>
                {player.map((p, index) => (
                    <tr key={index}>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.post}</td>
                        <td>{p.team}</td>
                        <td className='d-flex justify-content-center btn-group'>
                            <button type="button" className="btn btn-danger" onClick={() => deleteMatch(index)}>Delete</button>
                            <button type='button' className='btn btn-warning' onClick={()=>navigate(`/EditPlayer/${p.id}`)}>Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>
  )
}
