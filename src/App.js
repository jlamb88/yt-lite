import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path="/yt-lite/" element={<Feed />} />
        <Route path="/yt-lite/video/:id" element={<VideoDetail />} />
        <Route path="/yt-lite/channel/:id" element={<ChannelDetail />} />
        <Route path="/yt-lite/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App;
