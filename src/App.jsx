import './App.css'
import StudentList from './components/StudentList'
import ClassInfo from './components/ClassInfo';

function App() {
  const studentData = [
    {
      nameData: 'Ada',
      emailData: 'ada@dev.org'
    },
    {
      nameData: 'Soo-ah',
      emailData: 'sooah@dev.org'
    },
    {
      nameData: 'Chrissy',
      emailData: 'chrissy@dev.org'
    }
  ];
  return (
    <>
      <h1>Attendance</h1>
      <ClassInfo count={studentData.length}></ClassInfo>
      <StudentList students={studentData}></StudentList>
    </>
  );
}

export default App;
