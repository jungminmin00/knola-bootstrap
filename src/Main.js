import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Content from './pages/Content';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import WishList from './pages/WishList';
import NotFound from './pages/NotFound';
import Brand from './pages/Brand';
import Review from './pages/Review';
import ReviewDetail from './pages/ReviewDetail';
import Login from './pages/Login';
import EventList from './pages/EventList';
import Event from './pages/Event';
// import '../public/mediaQuery.js';


export default function Main(){
    return(
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path='/' element={<Content />} />
                    <Route path='list'>
                        <Route index element={<ProductList />} />
                        <Route path=':couseSlug' element={<Product />} />
                    </Route>
                    <Route path='wishlist' element={<WishList />} />
                    <Route path='brand' element={<Brand />}/>
                    <Route path='review'>
                        <Route index element={<Review />} />
                        <Route path=':slug' element={<ReviewDetail />} />
                    </Route>
                    <Route path='event'>
                        <Route index element={<EventList />} />
                        <Route path=':slug' element={<Event />} />
                    </Route>
                    <Route path='login' element={<Login />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </App>
        </BrowserRouter>
    );
}