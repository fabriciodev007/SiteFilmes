import{Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Filmes from '../pages/Filmes'
import Series from '../pages/Series'
import DefaultLayout from '../layout/DefoutLayout'


function Rotas() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/filmes' element={<Filmes />} />
                <Route path='/series' element={<Series />} />
            </Route>
        </Routes>
    )
}   
export default Rotas;





