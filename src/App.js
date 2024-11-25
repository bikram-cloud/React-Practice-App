import './styles/index.css';
import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/mainPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="textContent">
        <h1>Our Best Sellers for 2024</h1>
        <p>Join us on our trending adventure this year.</p>
      </div>
      <div className="card">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
