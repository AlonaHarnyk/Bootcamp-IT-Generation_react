import PropTypes from 'prop-types';
import {Text, Span} from './User.styled'

export const User = ({ user: { name, email } }) => {
  const isEndsBiz = email.endsWith('biz')
  console.log(isEndsBiz)
  return (
    <>
          <Text>Name: <Span>{name}</Span></Text>
          <Text>Email: <Span isRed={isEndsBiz}>{email}</Span></Text>
    </>
  );
};


// export const User = ({ user: { name, email } }) => {
//   return (
//     <li>
//           <p>Name: {name}</p>
//           <p>Email: {email}</p>
//     <li/>
//   );
// };

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
}

