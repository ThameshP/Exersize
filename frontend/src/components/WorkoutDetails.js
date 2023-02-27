import { Card, Grid, Text, Button, Row, Popover } from "@nextui-org/react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
    method: 'DELETE'
  })

  const json = await response.json()
    if (response.ok){
      window.location.reload()
    }
  }

return(

    <Card isHoverable variant="flat" css={{ background: "LightCyan", mw: "300px", margin: "10px"}}>
        
      <Card.Header>
        <Text b>{workout.title}</Text>
        <Button flat color="primary" size="xs" auto css={{marginTop: "8px", marginLeft: "auto", marginRight: "15px",background: "LightCyan"}} onClick={handleClick}> <Text h5 weight="hairline">Delete</Text> </Button>
      </Card.Header>
        <Card.Divider />
        <Text css={{ marginLeft: "10px"}}> Weight: {workout.weight}</Text>
        
        <Text css={{ marginLeft: "10px"}}> Set: {workout.set}</Text>
        
        <Text css={{ marginLeft: "10px"}}> Rep: {workout.rep}</Text>

        <Text weight="hairline" css={{ marginLeft: "10px"}}>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}...</Text>

    </Card>

)


}





export default WorkoutDetails