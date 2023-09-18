import {useEffect , useState } from "react";
import {useParams, Link } from "react-router-dom";
import { Result } from './components/results';

export function Actor(){
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/people/${id}?embed=castcredits`)
        .then((response) => response.json())
        .then((data) => setDetails(data))
    }, [details])

    useEffect(() => {
        fetch(`https://api.tvmaze.com/people/${id}/castcredits?embed[]=show&embed[]=character`)
        .then((response) => response.json())
        .then((data) => setCredits(data))
    }, [credits])

    return(
        <>
            <img src={details.image?.medium} />
            <h1>{details.name}</h1>
            <h3>Also played in :</h3>
            <div>
                {credits.map((credit, index) => (
                    <div key={index}>
                        <Link to={`/show/${credit._embedded.show.id}`}>
                            {credit._embedded.show.name}
                        </Link> ({credit._embedded.character.name})
                    </div>
                ))}
            </div>
        </>  
    )
}