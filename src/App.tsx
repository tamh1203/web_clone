import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import './styles/App.scss';
import { Outlet } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app-container">
      <main className="header-container">
        <Header />
        <HomePage />
      </main>
      <div className="homepage-container">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
