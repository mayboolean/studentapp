import { useState } from 'react';
import PropTypes from 'prop-types';
import './Student.css';

const Student = props => {
  // set up the state variable and function
  const [isPresent, setIsPresent] = useState(false);
  
  // event handler function
  const togglePresence = () => {
    setIsPresent(!isPresent);
  };

  // assign class name depending on isPresent state
  const nameColor = isPresent ? 'isPresentTrue' : 'isPresentFalse'

  return (
    <div>
      <ul className={nameColor}>
        <li>Name:{props.name}</li>
        <li>email:{props.email}</li>
      </ul>
      <button onClick={togglePresence}>Toggle for {props.name}&apos;s Presence status</button>
    </div> 
    
  )
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Student;