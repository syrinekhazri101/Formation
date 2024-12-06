import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DisplayTeam() {
    const [team, setTeam] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllTeam()
    }, [])

    const getAllTeam = () => {
        // Get team data from localStorage, if it's null or empty, set an empty array
        let teamData = localStorage.getItem('team');
        if (teamData) {
            try {
                // Attempt to parse the JSON string
                let parsedTeam = JSON.parse(teamData);
                setTeam(Array.isArray(parsedTeam) ? parsedTeam : []); // Ensure it's an array
            } catch (error) {
                console.error("Error parsing team data:", error);
                setTeam([]); // Set to empty array if parsing fails
            }
        } else {
            setTeam([]); // If no data, set to empty array
        }
    }

    const deleteMatch = (pos) => {
        let teamData = localStorage.getItem('team');
        if (teamData) {
            try {
                let T = JSON.parse(teamData);
                if (Array.isArray(T)) {
                    T.splice(pos, 1);  // Remove the item at the specified position
                    localStorage.setItem('team', JSON.stringify(T));  // Save updated team back to localStorage
                    setTeam([...T]);  // Update the state with the new team array
                }
            } catch (error) {
                console.error("Error deleting match:", error);
            }
        }
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
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.map((t, index) => (
                            <tr key={index}>
                                <td>{t.id}</td>
                                <td>{t.Name}</td>
                                <td>{t.Date}</td>
                                <td>{t.Desc}</td>
                                <td className='d-flex justify-content-center btn-group'>
                                    <button type="button" className="btn btn-danger" onClick={() => deleteMatch(index)}>Delete</button>
                                    <button type='button' className='btn btn-warning' onClick={() => navigate(`/EditTeam/${t.id}`)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}