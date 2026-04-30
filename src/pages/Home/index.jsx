import api from '../../services/api';
import Header from '../../components/Header';
import { Background } from './styles';


function Home() {

    async function getMovies() {
        const data = await api.get('/movie/popular');
        console.log(data);

    }
    getMovies();

    // https://image.tmdb.org/t/p/original/p8777bPIlyFYcjqP2hU8htoz1RG.jpg

    return (


        <Background img="https://image.tmdb.org/t/p/original/qnTdOizsXBzYu3uIbfhHSfE29TE.jpg">
            <h1>Zero800movies</h1>
            <p>Bem-vindo ao zero800movies!</p>
        </Background>

    )
}

export default Home;