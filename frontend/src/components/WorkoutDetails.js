import { Card, Grid, Text, Button, Row, Popover, Image } from "@nextui-org/react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
    method: 'DELETE'
  })

  const json = await response.json()
    if (response.ok){
      //test
      window.location.reload()
    }
  }

return(
  <div className="cards">
    <Card isHoverable variant="flat" css={{ background: "LightCyan", mw: "250px", margin: "10px"}}>
        
      <Card.Header>
        <Text b>{workout.title}</Text>
        <Button flat color="primary" size="xs" auto css={{marginTop: "3px", marginLeft: "auto", marginRight: "15px",background: "LightCyan"}} onClick={handleClick}>                             
        <Image
          css={{}}
          width={16}
          height={16}
          src="https://cdn-icons.flaticon.com/svg/3917/3917378.svg?token=exp=1677634147~hmac=01dd4a2795f4925bcf2b254108513665"
        /> </Button>
      </Card.Header>
        <Card.Divider />
        <Text css={{ marginLeft: "10px"}}> Weight: {workout.weight}</Text>
        
        <Text css={{ marginLeft: "10px"}}> Set: {workout.set}</Text>
        
        <Text css={{ marginLeft: "10px"}}> Rep: {workout.rep}</Text>
        
        <Text weight="hairline" css={{ marginLeft: "10px"}}>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}...</Text>

    </Card>
</div>
)


}





export default WorkoutDetails