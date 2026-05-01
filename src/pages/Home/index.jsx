import api from '../../services/api';
import Header from '../../components/Header';
import { Background, Info, Poster, Container } from './styles';
import { useState } from 'react';
import { useEffect } from 'react';


function Home() {
    const [movie, setMovie] = useState();

    useEffect(() => {
        async function getMovies() {
            const { data: { results } } = await api.get('/movie/popular');
            setMovie(results[5]);

        }
        getMovies();

    }, []);

    // https://image.tmdb.org/t/p/original/p8777bPIlyFYcjqP2hU8htoz1RG.jpg

    return (
        <>
            {movie && (
                <Background img={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}>
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                        </Info>
                        <Poster>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                        </Poster>

                    </Container>

                </Background>
            )}
        </>
    )
}

export default Home;