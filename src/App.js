import { Route, Routes } from 'react-router-dom';

import Container from '@mui/material/Container';

import { Header } from './components';
import { Home, FullPost, Registration, AddPost, Login } from './pages';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Home /> */}
          {/*<FullPost />*/}
          {/*<AddPost />*/}
          {/*<Login />*/}
          {/*<Registration />*/}
        </Routes>
      </Container>
    </>
  );
}

export default App;
