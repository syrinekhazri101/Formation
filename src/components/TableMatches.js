import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TableMatches() {
    const [matches, setMatches] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllMatches()
    },[])

    const getAllMatches = () => {
        let T = localStorage.getItem('matches')
        T = JSON.parse(T)
        setMatches(T)
    }

    // const deleteMatch = (id) => {
    const deleteMatch = (pos) => {
        let T = localStorage.getItem('matches')
        T = JSON.parse(T)
        // T = T.filter(match => match.id !== id)
        T.splice(pos, 1)
        localStorage.setItem('matches', JSON.stringify(T))
        setMatches(T)
    }

    return (
        <div>
            <div className="hero overlay" style={{ backgroundImage: 'url("images/addMatche.jpeg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">Table Matches</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="widget-next-match container mt-5 mb-5">
                <table className="table custom-table">
                    <thead>
                        <tr>    
                            <th>Id</th>
                            <th>Team One</th>
                            <th>Team Two</th>
                            <th>Score One</th>
                            <th>Score Two</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matches.map((match, index) => (
                            //index is used as the unique key for each row
                            <tr key={index}>
                                <td>{match.id}</td>
                                <td>{match.teamOne}</td>
                                <td>{match.teamTwo}</td>
                                <td>{match.scoreOne}</td>
                                <td>{match.scoreTwo}</td>
                                <td className='d-flex justify-content-center btn-group'>
                                    <button type="button" className="btn btn-danger" onClick={() => deleteMatch(index)}>Delete</button>
                                    <button type='button' className='btn btn-warning' onClick={()=>navigate(`/editmatch/${match.id}`)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
