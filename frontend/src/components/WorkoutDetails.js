import { Card, Grid, Text, Button, Row, Popover } from "@nextui-org/react";

const WorkoutDetails = ({ workout }) => {

return(

    <Card isHoverable isPressable variant="flat" css={{ background: "LightCyan", mw: "300px", margin: "10px"}}>
        
      <Card.Header>
        <Text b>{workout.title}</Text>
      </Card.Header>
        <Card.Divider />
        <Text css={{ marginLeft: "10px"}}> Weight: {workout.weight}</Text>
        
        <Text css={{ marginLeft: "10px"}}> Set: {workout.set}</Text>
        
        <Text css={{ marginLeft: "10px"}}> Rep: {workout.rep}</Text>
    </Card>

)


}





export default WorkoutDetails