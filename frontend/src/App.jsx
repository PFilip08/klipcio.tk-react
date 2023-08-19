import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom';
import './styles/style.css';
import Home from './pages/Home';
import Bots from './pages/ads/Bots';
import Sites from './pages/ads/Sites';
import Servers from './pages/ads/Servers';
import Banners from './pages/ads/Banners';
import NotFound from './pages/404';
import { Layout } from './components/UI/Layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="*" element={<NotFound />} />
            <Route index element={<Home />} />
            <Route path="/reklamy/bots" element={<Bots />} />
            <Route path="/reklamy/sites" element={<Sites />} />
            <Route path="/reklamy/servers" element={<Servers />} />
            <Route path="/reklamy/banners" element={<Banners />} />
        </Route>
    )
);

export const App = () => {
    return <RouterProvider router={router} />;
};
