import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Leaderboard from './Components/Leaderboard';
import Main from './Components/Main';
import News from './Components/News';
import Players from './Components/Players';
import ScrollToTop from './Components/ScrollToTop';
import Sponsor from './Components/Sponsor';
import Vision from './Components/Vision';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamPage from './Pages/TeamPage';
import VisionPage from './Pages/VisionPage';
import SponsorPage from './Pages/SponsorPage'
import NewsPage from './Pages/NewsPage';
import NewsItem from './Pages/NewsItem';

function App() {
  return (
    <>
      <div className="w-9/12 mx-auto">
        <Router>
          <Routes>
            <Route path="/team" element={<><Header /><TeamPage /><Footer /></>} />
            <Route path="/vision" element={<><Header /><VisionPage /><Footer /></>} />
            <Route path="/sponsor" element={<><Header /><SponsorPage /><Footer /></>} />
            <Route path="/news/:id" element={<><Header /><NewsItem /><Footer /></>} />
            <Route path="/news" element={<><Header /><NewsPage /><Footer /></>} />
            <Route path="/" element={<><Header /><Main /><Players /><Leaderboard /><Vision /><News /><Sponsor /><Footer /></>} />
          </Routes>
        </Router>

        <ScrollToTop />
        
      </div>
    </>
  )
}

export default App;
