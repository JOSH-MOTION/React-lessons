import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

 


function UserForms(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');




  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newestUser = {
      name: name,
      email: email,
      id: uuid(),

      };
      
      props.newPerson(newestUser);
  };

  return (
     <Card color="transparent" shadow={false} >
      <Typography variant="h4" color="blue-gray">
        User Form
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            User Name
          </Typography>
          <Input
          value={name}
          onChange={handleNameChange}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            User Email
          </Typography>
          <Input
          value={email}
          onChange={handleEmailChange}
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        
        </div>
        
        <Button className="mt-6" fullWidth type='submit'>
          sign up
        </Button>
        
      </form>
    </Card>
  );
}


export default UserForms