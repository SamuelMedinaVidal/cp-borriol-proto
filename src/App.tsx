import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { ArtisticSkating } from './pages/ArtisticSkating';
import { InlineHockey } from './pages/InlineHockey';
import { Championships } from './pages/Championships';
import { Rules } from './pages/Rules';
import { Gallery } from './pages/Gallery';
import { Social } from './pages/Social';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="artistic" element={<ArtisticSkating />} />
        <Route path="inline" element={<InlineHockey />} />
        <Route path="championships" element={<Championships />} />
        <Route path="rules" element={<Rules />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="social" element={<Social />} />
      </Route>
    </Routes>
  );
}

export default App;
