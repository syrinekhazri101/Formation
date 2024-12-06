import React, { useState,useEffect } from 'react'

export default function AddPlayer() {
    const [name, setname] = useState('')
    const [number, setnumber] = useState('')
    const [post, setpost] = useState('')
    const [team, setteam] = useState('')
    const[tableTeam,setTableTeam]=useState([])
    useEffect(()=>{
        let p=JSON.parse(localStorage.getItem('player')) || [];
        setTableTeam(p)
    },[])


    const handleSubmit = () => {
        let T = localStorage.getItem('player') || '[]'
        T = JSON.parse(T)
        let PlayerId = localStorage.getItem('') || 0
        PlayerId = JSON.parse(PlayerId)
        let data ={
          
            id:T.length === 0 ? 0 : T.at(-1).id + 1,
            name: name,
            number: number,
            post: post,
            team:team,
            
        }
        T.push(data)
        localStorage.setItem('player', JSON.stringify(T))
        
        console.log(data)
    }
  return (
    <div>
        <div>
            <div className="hero overlay" style={{ backgroundImage: 'url("images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mx-auto text-center">
                            <h1 className="text-white">AddPlayers</h1>
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
                                            onChange={(event) => setname(event.target.value)}
                                        />
                                        
                                    </div>
                                   
                                    <div className="form-group col-lg-6 col-md-6">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="number"
                                            onChange={(event) => setnumber(event.target.value)}
                                        />
                                        
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="post"
                                            onChange={(event) => setpost(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group col-lg-6 col-md-6">
                                        <select
                                            className="from-select form-control"
                                            placeholder="Teams"
                                            onChange={(event) => setteam(event.target.value)}
                                        >
                                            {
                                                tableTeam.map((team,id)=>(
                                            <option value={team.id} key={id}>{team.name}</option>))
                                            }

                                        </select>
                                    </div>
                                
                                    <div className="form-group col-lg-12 d-flex align-items-center justify-content-center">
                                    <button className="btn btn-primary py-3 px-5" type='button' onClick={handleSubmit}>Add PLayer</button>
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
