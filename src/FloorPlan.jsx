import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

const FloorPlan = () => {
  return (  
  <div>
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