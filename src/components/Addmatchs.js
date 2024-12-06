import React, { useState } from 'react'
export default function Addmatchs() {
    
  const[teamOne, setTeamOne]=useState('');
  const[teamTwo, setTeamTwo]=useState('');
  const[scoreOne, setScoreOne]=useState('');
  const[scoreTwo, setScoreTwo]=useState('');



    const handlesubmit=()=>{
        let T=JSON.parse(localStorage.getItem('matches')|| '[]');
        let matchId=JSON.parse(localStorage.getItem('matchId')|| '0')
         let data={
            id:matchId,
             teamone:teamOne,
             scoreOne:scoreOne,
             teamtwo:teamTwo,
             scoretwo:scoreTwo,
            
       }
         T.push(data);
         localStorage.setItem('matchId',JSON.stringify(matchId+1));
         localStorage.setItem('matches',JSON.stringify(T));
     }





  return (
    <div className="site-wrap">
  <div className="site-mobile-menu site-navbar-target">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close">
        <span className="icon-close2 js-menu-toggle" />
      </div>
    </div>
    <div className="site-mobile-menu-body" />
  </div>
  <header className="site-navbar py-4" role="banner">
    <div className="container">
      <div className="d-flex align-items-center">
        <div className="site-logo">
          <a href="index.html">
            <img src="images/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="ml-auto">
          <nav className="site-navigation position-relative text-right" role="navigation">
            <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
              <li><a href="index.html" className="nav-link">Home</a></li>
              <li><a href="matches.html" className="nav-link">Matches</a></li>
              <li><a href="players.html" className="nav-link">Players</a></li>
              <li><a href="blog.html" className="nav-link">Blog</a></li>
              <li className="active"><a href="contact.html" className="nav-link">Contact</a></li>
            </ul>
          </nav>
          <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"><span className="icon-menu h3 text-white" /></a>
        </div>
      </div>
    </div>
  </header>
  <div className="hero overlay" style={{backgroundImage: 'url("images/bg_3.jpg")'}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-9 mx-auto text-center">
          <h1 className="text-white">Add Match</h1>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <form action="#">
            <div className="form-group">
              <input type="text" onChange={(event)=>{setTeamOne(event.target.value)}} className="form-control" placeholder="Equipe1" />
            </div>
            <div className="form-group">
              <input type="text" onChange={(event)=>{setScoreOne(event.target.value)}}className="form-control" placeholder="score 1" />
            </div>
            <div className="form-group">
              <input type="text" onChange={(event)=>{setTeamTwo(event.target.value)}} className="form-control" placeholder="equipe2" />
            </div>
            <div className="form-group">
            <input type="text" onChange={(event)=>{setScoreTwo(event.target.value)}} className="form-control" placeholder="score2" />
            </div>
            <div className="form-group">
              <button type='button' onClick={handlesubmit} className="btn btn-primary py-3 px-5" > ADD match </button>
            </div>
          </form>  
        </div>
        
      </div>
    </div>
  </div>
</div>

  )
}
