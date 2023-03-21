import { Routes, Route } from 'react-router-dom';

/* Layout: Pages ---------------------------*/
import PagesLayout from './Common/PagesLayout/PagesLayout';

/* Pages: Primary ---------------------------*/
import PrimaryLayout from './Pages/Primary/PrimaryLayout';
import Home from './Pages/Primary/Home/Home';
import Albums from './Pages/Primary/Albums/Albums';
import Tour from './Pages/Primary/Tour/Tour';
import Merch from './Pages/Primary/Merch/Merch';
import Video from './Pages/Primary/Video/Video';

const App = () => {
    return (
        <Routes>
            <Route element={ <PagesLayout /> }>
                <Route element={ <PrimaryLayout /> } path="">
                    <Route element={ <Home /> } path="" />
                    <Route element={ <Albums /> } path="albums" />
                    <Route element={ <Tour /> } path="tour" />
                    <Route element={ <Merch /> } path="merch" />
                    <Route element={ <Video /> } path="video" />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
