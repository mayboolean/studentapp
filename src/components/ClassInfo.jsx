const ClassInfo = (props) => {
  console.log(props)
  return (
    <>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of members:{props.count}</li>
      </ul>
    </>
  );
};
export default ClassInfo;