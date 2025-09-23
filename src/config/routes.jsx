import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {CAREERS, COMPANY, INNOVATION, METICULOUS_DETAIL, SUSTAINABILITY, AUDI_IN_SPORT} from '../Screen'
import allPaths from './paths'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path={allPaths.HOME} element={<METICULOUS_DETAIL />} />
                <Route path={allPaths.CAREERS} element={<CAREERS />}/>
                <Route path={allPaths.COMPANY} element={<COMPANY />}/>
                <Route path={allPaths.INNOVATION} element={<INNOVATION />}/>
                <Route path={allPaths.SUSTAINABILITY} element={<SUSTAINABILITY />}/>
                <Route path={allPaths.AUDI_IN_SPORT} element={<AUDI_IN_SPORT />}/>
            </Routes>
        </Router>
    )
}

export { AppRoutes }