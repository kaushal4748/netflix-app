import React from 'react'
import Card from './Card';
import sdata from './Sdata';

 const App =()=>(
  <>
<h1 className="heading-style">List of top 5 netflix series </h1>

{sdata.map((val) => {
  return (
    <Card
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
})}
</>
)
export default App;