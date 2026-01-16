import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { NewsTicker } from './components/NewsTicker';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './components/HomePage';
import { SearchPage } from './components/SearchPage';
import { StatusPage } from './components/StatusPage';
import { NewsPage } from './components/NewsPage';
import { BookDetailPage } from './components/BookDetailPage';
import { RecommendedPage } from './components/RecommendedPage';
import { BorrowPage } from './components/BorrowPage';
import { ActivitiesPage } from './components/ActivitiesPage';
import { LoginPage } from './components/LoginPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <NewsTicker />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/status" element={<StatusPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/book/:id" element={<BookDetailPage />} />
            <Route path="/recommended" element={<RecommendedPage />} />
            <Route path="/borrow" element={<BorrowPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}