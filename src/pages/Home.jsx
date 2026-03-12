import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import { Link } from "react-router-dom"

export default function Home(){
    const [search, setSearch] = useState("James Bond")
    const [mo, setMo] = useState([])


    
    const baseUrl = `http://www.omdbapi.com/?s=${search}&type=movie&apikey=`
    const apiKey = import.meta.env.VITE_APP_API_KEY

    const getMovies = async()=>{
        try
        {
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()
            setMo(data.Search)
            
            console.log(data)

        }
        catch(err){
            console.error(err);
        }
    }

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        e.target.reset()

    }
    //Her fikk jeg hjelp av medelev Ole Bovolden til å lage useEffect. 
    useEffect(()=>{
        if (search) {
            getMovies();
        }
    }, [])
  
    return (
    <main>
        <h1>Forside</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Søk etter film
                <input minLength={3} type="search" placeholder="F.eks: James Bond" onChange={handleChange}></input>
            </label>
            <button onClick={getMovies}>Søk</button>
        </form>
            <section>
                {mo?.map((mo) => (<Link to={mo.imdbID}><MovieCard  key={mo.imdbID} mo = {mo} /></Link>))}
            </section>
    </main>       
    )
}