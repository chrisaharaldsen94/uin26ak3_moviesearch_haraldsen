export default function MovieCard({mo}){

    const {Title, Poster, Year} = mo

        return(
            <article>
                <h3>{Title}</h3>
                <img src={Poster} alt={Title} />
                <p>{Year}</p>
            </article>
        )
}