import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='border' style={{fontSize:'30px'}}>
      <h1>The Shoe Lord</h1>
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
