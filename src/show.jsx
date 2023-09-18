import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export function Show() {
  const { id } = useParams();
  const [show, setShow] = useState("");
  const [actors, setActors] = useState([]);


  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
      .then((response) => response.json())
      .then((data) => { 
          setShow(data)
          setActors(data._embedded.cast)
      })
  }, [show]);

  return (
    <div>
      <h1>{show.name}</h1>
      <div>
        <img
          src={
            show.image?.medium ||
            "http://vignette3.wikia.nocookie.net/lego/images/a/ac/No-Image-Basic.png/revision/latest?cb=20130819001030"
          }
          alt={show.name}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      <h2>Actors :</h2>
      {actors.map((actor)=>
        <div><Link to= {"/actor/"+ actor.person.id}>{actor.person.name}</Link></div>
      )}
      <h2>Infos :</h2>
      <h4>{show.genres?.join(" / ")}</h4>
      <h4>Rating : {show.rating?.average}/10</h4>
      <h4>Premiered : {show.premiered}</h4>
      <h4>Ended : {show.ended}</h4>
      <h4>Country : {show.network?.country.name}</h4>
    </div>
  );
}
