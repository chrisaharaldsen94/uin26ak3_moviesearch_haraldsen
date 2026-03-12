import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Movie(){
    const {movie} = useParams()
    const [movieDetails, setMovieDetails] = useState()

    const apiKey = import.meta.env.VITE_APP_API_KEY

    console.log(movie)


//Her innhentet jeg informasjon fra routing som vi har gjort i forelesning, hvor vi hentet bilder, typer, damage, health etc fra pokemon.
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?i=${movie}&apikey=${apiKey}`)
                const data = await response.json()
                setMovieDetails(data)
            } catch (err) {
                console.error(err)
            }
        }

        if (movie) {
            fetchMovieDetails()
        }
    }, [movie, apiKey])

    if (!movieDetails) return

    return (
        <main classname="moviemain">
            <h1>{movieDetails.Title}</h1>
            <img src={movieDetails.Poster} alt={movieDetails.Title} />
            <section className="movieinfo">
                {/*La til strong for å få year, rating, genre, about & actors til å stikke seg frem.*/}
                <p><strong>Year:</strong> {movieDetails.Year}</p>
                <p><strong>Rating:</strong> {movieDetails.imdbRating} / 10</p>
                <p><strong>Genre:</strong> {movieDetails.Genre}</p>
                <p><strong>About:</strong> {movieDetails.Plot}</p>
                <p><strong>Actors:</strong> {movieDetails.Actors}</p>
            </section>
        </main>
    )
}

