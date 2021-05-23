
const MovieItem = props => {
    return (
        <li>
            <h2>{props.title}</h2>
            <h3>{props.director}</h3>
            <h4>{props.year}</h4>
            <p>{props.description}</p>      
        </li>
    )
}

export default MovieItem;