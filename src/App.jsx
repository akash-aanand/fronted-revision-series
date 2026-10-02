import React from 'react'

const App = () => {
  const info = new Map([['name', 'akash'],
  ['role', 'fronted developer'],
  ['skill', 'JavaScript']]);
  const otherSkill = ['c++','react','javaScrift'];
  return (
    <div>
      <h1>Name : {info.get('name')}</h1>
      <h1>Role : {info.get('role')}</h1>
      <h1>Skill: {info.get('skill')}</h1>
      <h1>OtherSkill:</h1>
           <ul>
                   {otherSkill.map((otherskill) => { return <li key={otherskill}>{otherskill}</li>;})}
           
      </ul>
    </div>
  )
}

export default App 
