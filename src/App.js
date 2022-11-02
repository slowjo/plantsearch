// import Container from '@mui/material/Container';
import MyAppBar from "./layout/MyAppBar";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MyAppBar />
      {/* <Container> */}
        <Outlet />
      {/* </Container> */}
    </div>
  );
}

export default App;
