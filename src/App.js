import './App.css';
import ReferencePage from './pages/referencePage/ReferencePage';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Error from './pages/errorPage/Error';
import Header from './components/header/Header';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-alice-carousel/lib/alice-carousel.css';

import Footer from './components/footer/Footer';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<>
          <Header />
          <Outlet />
          <Footer />
        </>}>

          <Route path='/' element={<ReferencePage />} errorElement={<Error />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
