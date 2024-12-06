import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTeam() {
  const [Name, setName] = useState("");
  const [Date, setDate] = useState("");
  const [Desc, setDesc] = useState(""); // state pour le score du premier équipe

  const params = useParams(); // permet de récupérer l'id de la match à modifier -- le paramètre est l'id de la match
  const navigate = useNavigate();

  useEffect(() => {
    console.log("aaaaaaaaaaaaa");
    getMatchById();
  }, []);

  const getMatchById = () => {
    let T = JSON.parse(localStorage.getItem("team") || "[]"); // récupérer les matchs dans le local storage
    let t = T.find((t) => t.id === Number(params.id));
    if (t) {
         // trouver la match à modifier
    setName(t.Name); // mettre à jour le state avec les valeurs de la match à modifier
    setDate(t.Date);
    setDesc(t.Desc);
    }
  };

  const handleEditTeam = () => {
    let T = JSON.parse(localStorage.getItem("team") || "[]"); // récupérer les matchs dans le local storage
    let t = T.find((t) => t.id == params.id); // trouver la match à modifier
    // console.log(match.teamOne);
    // console.log(teamOne);
    t.Name = Name; // mettre à jour la match avec les nouvelles valeurs
    t.Date = Date;
    t.Desc = Desc;
    //console.log(T)
    localStorage.setItem("team", JSON.stringify(T)); // mettre à jour le local storage avec les nouvelles valeurs
    // console.log(T);
    navigate(`/DisplayTeam`);
 
  };

  return (
    <div>
      <div>
        <div
          className="hero overlay"
          style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-9 mx-auto text-center">
                <h1 className="text-white">Edit Team</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <form action="#">
                  <div className="row">
                    <div className="form-group col-lg-6 col-md-6">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Team"
                        value={Name || ""}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                    <div className="form-group col-lg-6 col-md-6">
                      <label>Date</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Second Team"
                        value={Date || ""}
                        onChange={(event) => setDate(event.target.value)}
                      />
                    </div>
                    <div className="form-group col-lg-6 col-md-6">
                      <label>description</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Score One"
                        value={Desc || ""}
                        onChange={(event) => setDesc(event.target.value)}
                      />
                    </div>

                    <div className="form-group col-lg-12 d-flex align-items-center justify-content-center">
                      <button
                        className="btn btn-primary py-3 px-5"
                        type="button"
                        onClick={handleEditTeam}
                      >
                        Edit Team
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
