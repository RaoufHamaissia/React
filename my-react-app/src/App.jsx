import Student from "./Student.jsx";


function App() {
  return(
    <>
      
      <Student name="Bob" age={30} isStudent={true}/>
      <Student name="Alice" age={25} isStudent={false}/>
      <Student name="Charlie" age={22} isStudent={true}/>
      <Student name="David" age={28} isStudent={false}/>
      <Student name="Eve" age={26} isStudent={true}/>
      <Student />
      
      
      
    </>
  );
}

export default App
