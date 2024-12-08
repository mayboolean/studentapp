/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Student from "./Student";

const StudentList = (props) => {
  const studentComponents = props.students.map(student => {
    return (
      <li><Student name={student.nameData} email={student.emailData}></Student></li>
    )
  })

  return (
    <>
      <h2>Student List</h2>
      <ul>
        {studentComponents}
      </ul>
    </>
    
  );
};

export default StudentList;