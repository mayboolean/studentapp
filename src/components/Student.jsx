/* eslint-disable react/prop-types */
const Student = props => {
  return (
    <ul>
      <li>Name:{props.name}</li>
      <li>email:{props.email}</li>
    </ul>
  )
};

export default Student;