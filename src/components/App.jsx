import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';

const About = lazy(() => import('../pages/About'));
const Home = lazy(() => import('../pages/Home'));
const Products = lazy(() => import('../pages/Products'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));

const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Team = lazy(() => import('../components/Team/Team'));
const Mission = lazy(() => import('../components/Mission/Misson'));

// import Home from '../pages/Home';
// import About from '../pages/About';
// import Products from '../pages/Products';
// import NotFound from '../pages/NotFound';
// import ProductDetails from 'pages/ProductDetails';

// import { Reviews } from './Reviews/Reviews';
// import { Team } from './Team/Team';
// import { Mission } from './Mission/Misson';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>{' '}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
