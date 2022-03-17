import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style = {{textAlign: 'center'}}>
      <h1>Shoes App</h1>
      <nav
        style={{
          borderBottom:'2px solid',
          // textAlign:'center'
        }}
        >
          {/* <Link to='/home'>Home</Link> - {' '} */}
          <Link to='/shoes'>Shoes</Link> - {' '}
          <Link to='/shoes/new'>New Shoe</Link> - {' '}
          <Link to='/about'>About</Link> {' '}

          {/* <Link to='/about'>About</Link> */}
        </nav>
        <p></p>
        <Outlet />
    </div>
  );
}

export default App;
