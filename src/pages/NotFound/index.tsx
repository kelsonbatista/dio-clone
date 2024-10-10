import { Link } from 'react-router-dom';
import { NotFoundContainer } from './styles';

function NotFound() {
  return (
    <NotFoundContainer>
      <h1>NotFound</h1>
      <Link to="/login">Login</Link>
    </NotFoundContainer>
  )
}

export default NotFound;
