import {Link} from 'react-router-dom'
import { Card, Grid, Text, Button, Row, Popover, Input, Navbar} from "@nextui-org/react";
import { useState } from "react"


const Navbar1 = () => {

    const [title, setTitle] = useState('')
    const [weight, setWeight] = useState('')
    const [set, setSet] = useState('')
    const [rep, setRep] = useState('')
    const [error, setError] = useState('null')


    const handleSubmit = async (e) => {
        e.preventDefault()
    

    const workout = {title, weight, set, rep}
    const response = await fetch('http://localhost:4000/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const json = await response.json()

    if(!response.ok){
        setError(json.error)
    }

    if(response.ok){
        setError(null)
        setTitle('')
        setWeight('')
        setSet('')
        setRep('')
        console.log('New workout added', json)
    }


    }

    return (
        <header>
            <div className="container">
                <Navbar isHoverable variant="floating">
                    <Navbar.Brand> 
                        <Text b color="inherit" hideIn="xs">
                            Exersize
                        </Text>
                    </Navbar.Brand>
                 <Navbar.Content hideIn="xs" variant="highlight-rounded">
                <Popover>
                    <Popover.Trigger>
                        <Button flat color="primary" auto css={{ background: "LightCyan"}}>
                            <Link>
                                <Text size="$2xl"> + </Text>
                            </Link>
                        </Button>
                    </Popover.Trigger>
                    <Popover.Content css={{ background: "LightCyan", padding: "20px"}}>
                        <form className= "create" onSubmit={handleSubmit}>
                         <Input underlined  type= "String" onChange={(e) => setTitle(e.target.value)} value={title} required={true} clearable label="Add Exersize" placeholder="Name" css={{display: "flex", padding: "5px"}}/>
                         <Input underlined  type= "Number" onChange={(e) => setWeight(e.target.value)} value={weight}  label="Add Weight" placeholder="Weight"css={{display: "flex", padding: "5px"}}/>
                         <Input underlined type= "Number" onChange={(e) => setSet(e.target.value)} value={set}  label="Add Set" placeholder="Sets"css={{display: "flex", padding: "5px"}}/>
                         <Input underlined  type= "Number" onChange={(e) => setRep(e.target.value)} value={rep}  label="Add Rep" placeholder="Reps"css={{display: "flex", padding: "5px"}}/>
                         <Button flat color="primary" auto css={{ margin: "auto", background: "LightCyan"}}> <Text size="$2xl">+</Text> </Button>
                         <button>Add</button>
                         {error && <div className="error">{error}</div> }
                        </form>
                    </Popover.Content>
                </Popover>
                </Navbar.Content>
                </Navbar>
            </div>
        </header>
    )
}

export default Navbar1