import React, { useState ,useEffect} from 'react'
import { Navigate, useParams } from 'react-router-dom';
import Banner from "./Banner";
export default function Editmatches() {

    const[teamOne, setTeamOne]=useState('');
    const[teamTwo, setTeamTwo]=useState('');
    const[scoreOne, setScoreOne]=useState('');
    const[scoreTwo, setScoreTwo]=useState('');


    const params=useParams();
    useEffect(()=>{
    console.log(params);
    getMatchById();
    },[]);

    const getMatchById = () =>{
         let T=JSON.parse(localStorage.getItem('matches')||'[]');
         for(let i=0 ;i< T.length ;i++){
            if(T[i].id === Number(params.id)){
                console.log(T[i])
                setTeamOne(T[i].teamOne);
                setTeamTwo(T[i].teamTwo);
                setScoreOne(T[i].scoreOne);
                setScoreTwo(T[i].scoreTwo);
            }
         }
         

        }
        const handleSubmit =() => {
            let T=JSON.parse(localStorage.getItem('matches')||'[]');

            for(let i=0 ;i< T.length ;i++){
                if(T[i].id === Number(params.id)){
                    T[i].teamone=teamOne;
                    T[i].teamtwo=teamTwo;
                    T[i].scoreOne=scoreOne;
                    T[i].scoretwo=scoreTwo;
                    break;
                }
             }

        localStorage.setItem('matches', JSON.stringify(T));
             Navigate('/Table-Matches')
          
        }
  return (
    <div>
        <div>
        <Banner title="Edit-matches" url="images/bg_3.jpg"/>
  <div className="container site-section">
    <div className="site-section">
      <div className="row">
        <div className="col-6 title-section">
          <h2 className="heading"> ADD MATCH</h2>
        </div>
      </div>
      <div className="container">
        <form action="#">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <strong className="text-primary">Team one:</strong>
                <input type="text" className="form-control" placeholder="Team 2" value={teamOne || ''} onChange={(event) =>{ setTeamOne(event.target.value)}} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <strong className="text-primary">score one:</strong>
                <input type="text" className="form-control" placeholder="score 1" value={scoreOne || ''} onChange={(event) =>{ setScoreOne(event.target.value)}} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <strong className="text-primary">Team Two:</strong>
                <input type="text" className="form-control" placeholder="Team 2" value={teamTwo || ''} onChange={(event) =>{ setTeamTwo(event.target.value)}} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <strong className="text-primary">scpre Two :</strong>
                <input type="text" className="form-control" placeholder="score 2"  value={scoreTwo || ''} onChange={(event) =>{ setScoreTwo(event.target.value)}}/>
              </div>
            </div>
          </div>
          
          <div className="form-group text-center">
            <input type="button"  onClick={handleSubmit} className="btn btn-primary py-3 px-5" defaultValue=" edit Match" />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
