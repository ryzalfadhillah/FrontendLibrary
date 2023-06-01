import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';
import ManageBooks from './pages/ManageBooks/ManageBooks';
import ManageMembership from './pages/ManageMembership/ManageMembership';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/' 
          element={
            <Layout>
              <Home />
            </Layout>
          } 
        />
        <Route 
          path='/manage-books' 
          element={
            <Layout>
              <ManageBooks />
            </Layout>
          } 
        />
        <Route 
          path='/manage-membership' 
          element={
            <Layout>
              <ManageMembership />
            </Layout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
