import PropTypes from 'prop-types'
import Student from "./Student";

const StudentList = (props) => {
  const studentComponents = props.students.map((student, index) => {
      return (
          <li key={index}>
              <Student
                  id={student.id}
                  name={student.nameData}
                  email={student.emailData}
                  isPresent={student.isPresentData}
                  onPresenceToggle={props.onStudentPresenceToggle}
              ></Student>
          </li>
      );
  });
  return (
    <>
      <h2>Student List</h2>
      <ul>
        {studentComponents}
      </ul>
    </>
    
  );
};

StudentList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameData: PropTypes.string.isRequired,
      emailData: PropTypes.string.isRequired,
      isPresentData: PropTypes.bool.isRequired,
  })),
  onStudentPresenceToggle: PropTypes.func.isRequired,
};

export default StudentList;