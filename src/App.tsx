import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import './styles/App.scss';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <main className="header-container">
        <Header />
        <HomePage />
      </main>
      <div className="homepage-container">
        <Outlet />
      </div>
     
    </div>
  );
}

export default App;
