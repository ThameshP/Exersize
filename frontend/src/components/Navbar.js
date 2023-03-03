import {Link} from 'react-router-dom'
import { Card, Grid, Text, Button, Row, Popover, Input, Navbar, Image} from "@nextui-org/react";
import { useState } from "react"
import {useWorkoutsContext} from '../hooks/useWorkoutsContext'
import { useRefresh } from 'react-admin';





const Navbar1 = () => {
    const {dispatch} = useWorkoutsContext 
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
        window.location.reload()
        setError(null)
        setTitle('')
        setWeight('')
        setSet('')
        setRep('')
        console.log('New workout added', json)
        dispatch({type: 'CREATE_WORKOUT', payload: json})
       
    }

    


    }

    return (
        <header>
            <div className="container">
                <Navbar isHoverable variant="floating">
                    <Navbar.Brand> 
                        <Image
                        css={{ marginTop: "2px"}}
                        width={40}
                        height={40}
                        src="https://cdn-icons-png.flaticon.com/512/1401/1401482.png"

                        />
                        <Text css={{ marginLeft: "35px"}}
                         color="inherit" hideIn="xs">
                            Exersize
                        </Text>
                    </Navbar.Brand>
                 <Navbar.Content hideIn="xs" variant="highlight-rounded">
                <Popover >
                    <Popover.Trigger>
                        <Button flat color="primary" auto css={{ background: "White"}}>
                            
                            <Image
                                css={{ marginTop: "0px"}}
                                width={25}
                                height={25}
                                src="https://www.flaticon.com/svg/vstatic/svg/3914/3914248.svg?token=exp=1677633921~hmac=e0b1c4e7424784ba6aa5bb81322fd1b8"
                            />
                            
                        </Button>
                    </Popover.Trigger>
                    <Popover.Content css={{ background: "LightCyan", padding: "20px"}}>
                        <form className= "create" onSubmit={handleSubmit}>
                         <Input underlined  type= "String" onChange={(e) => setTitle(e.target.value)} value={title} required={true} clearable label="Add Exersize" placeholder="Name" css={{display: "flex", padding: "5px"}}/>
                         <Input underlined  type= "Number" onChange={(e) => setWeight(e.target.value)} value={weight}  label="Add Weight" placeholder="Weight"css={{display: "flex", padding: "5px"}}/>
                         <Input underlined type= "Number" onChange={(e) => setSet(e.target.value)} value={set}  label="Add Set" placeholder="Sets"css={{display: "flex", padding: "5px"}}/>
                         <Input underlined  type= "Number" onChange={(e) => setRep(e.target.value)} value={rep}  label="Add Rep" placeholder="Reps"css={{display: "flex", padding: "5px"}}/>
                         
                         <button><Image
                        css={{ marginTop: "2px"}}
                        width={19}
                        height={19}
                        src="https://www.flaticon.com/svg/vstatic/svg/3917/3917749.svg?token=exp=1677633710~hmac=fdc57ed01f8029c3ad9355303904b192"

                        /> 
                        </button>
                         
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