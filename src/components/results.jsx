import { Link } from "react-router-dom"

export function Result(props){

    const {show} = props.details
    
    return (
    <div>
        <h2>{show.name}</h2>
        <div><img src={show.image?.medium || 'http://vignette3.wikia.nocookie.net/lego/images/a/ac/No-Image-Basic.png/revision/latest?cb=20130819001030' } /></div>
        <Link to={'show/'+show.id}>Dig it</Link>
    </div>
    )
}