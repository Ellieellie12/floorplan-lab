const FloorPlan = () => {
  return (  
  <div>
    <h1>Floor Plan</h1>
    <Kitchen/>
    <LivingRoom/>
    <Bedroom bedNum={1}/>
    <Bedroom bedNum={2}/>
    <Bedroom bedNum={3}/>
    <Bath size='Half Bath'/>
    <Bath size='Full Bath'/>
  </div>
  
  )
}

export default FloorPlan