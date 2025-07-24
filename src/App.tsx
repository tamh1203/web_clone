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
        <div className="homepage-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
