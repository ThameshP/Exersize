import { Input, Text } from '@nextui-org/react';


const SignUp = () => {






    return(
        <div className="SignupContainer">
            <Text h1 b > Sign up!</Text>
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

export default SignUp