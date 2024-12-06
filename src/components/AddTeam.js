import React, { useState } from 'react'

export default function AddTeam() {
    const [Name, setName] = useState('')
    const [Date, setDate] = useState('')
    const [Desc, setDesc] = useState('')
    //useState():its a hook to create a state variable
    //teamOne a variable to hold the current value =>' '
    //setTeamOne :its a function ussed to update the value of teamOne
    //a hook: is a special function that let's yoou use React features(like state and lifecycle methods)

    const handleSubmit = () => {
        let T = localStorage.getItem('team') || '[]'
        T = JSON.parse(T)
        let TeamId = localStorage.getItem('TeamId') || 0
        TeamId = JSON.parse(TeamId)
        let data ={
            // id:TeamId,
            id:T.length === 0 ? 0 : T.at(-1).id + 1,
            Name: Name,
            Date: Date,
            Desc: Desc,
            
        }
        T.push(data)
        localStorage.setItem('team', JSON.stringify(T))
        // localStorage.setItem('TeamId', JSON.stringify(TeamId + 1))
        console.log(data)
    }

  return (
    <div>
        
        <div>
            <div className="hero overlay" style={{ backgroundImage: 'url("images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">AddTeam</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <form >
                                <div className="row">
                                    <div className="form-group col-lg-6 col-md-6">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                        
                                    </div>
                                   
                                    <div className="form-group col-lg-6 col-md-6">
                                        <input type="Date"
                                            className="form-control"
                                            placeholder="Date"
                                            onChange={(event) => setDate(event.target.value)}
                                        />
                                        
                                    </div>
                                    <div className="form-group col-lg-6 col-md-12">
                                        <textarea type="text"
                                            className="form-control"
                                            placeholder="description"
                                            onChange={(event) => setDesc(event.target.value)}
                                        />
                                        
                                    </div>
                                
                                    <div className="form-group col-lg-12 d-flex align-items-center justify-content-center">
                                    <button className="btn btn-primary py-3 px-5" type='button' onClick={handleSubmit}>Add Team</button>
                                    </div>
                                </div>


                            </form>
                        </div>
                        <div className="col-lg-4 ml-auto">
                            <img src="images/singup.gif" alt="Image" className="img-fluid mb-5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
