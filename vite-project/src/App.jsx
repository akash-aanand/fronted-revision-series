import React from 'react'

const App = () => {
  //istead of this 
  // const User= (props)=>{
  //   return <h2>{props.name}</h2> 
  // }

  // // we can write this 
  // const User=({name,age,role})=>{
  //   return <div><h2>{name}</h2>
  //   <p>age: {age}</p>
  //   <p>role: {role}</p></div>
  // }
const user={
  name :"akash",
  role: "developer",
  age :309
};
const skill=[
  "cpp", "js","c"
];

const User=({user})=>{
  return <>
  <h2>Name: {user.name}</h2>
  <p>role: {user.role}</p>
  <p>age : {user.age}</p>
  </>
}
const Skill=({skill})=>{
  return<>
    <h1>Skill:</h1>
    <ul>
      {skill.map((skill)=>{return <li key={skill}>{skill}</li>;})}
    </ul>
  </>
}


  return (
    
    <div>
      {/* < User name="akash" age= {290} role="frontented develpor"/>
      < User name="rohit"age= {290} role="frontented develpor"/>
      < User name="atul"age= {290} role="frontented develpor"/>*/}
      <User user={user}/>
      <Skill skill={skill}/>
    </div> 



  )
}

export default App
