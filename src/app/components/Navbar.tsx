import Signin from './Signin'

const Navbar = () => {

  return (
    <div>
      <ul className='flex flex-row space-x-6 '>
        <li><a href='/'>Home page</a></li>
        <li>Dark Mode</li>
        <li><Signin/></li>
      </ul>
    </div>
  )
}

export default Navbar