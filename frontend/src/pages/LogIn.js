import { Input, Text } from '@nextui-org/react';


const LogIn = () => {






    return(
        <div className="LogInContainer">
            <Text h1 b > Login! </Text>
            <Input
                css= {{marginTop: "30px", marginBottom: "10px"}}
                clearable
                underlined
                labelPlaceholder="Email"
            
            />
            <Input.Password
                css= {{marginTop: "30px"}}
                clearable
                underlined
                labelPlaceholder="Password"
                
            />
        </div>
    )

}

export default LogIn