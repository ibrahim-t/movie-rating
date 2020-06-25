import React from "react"
import { Input, Button } from "@material-ui/core"

export class Login extends React.Component {


    render() {
        return <div className="login-page">
            <Input placeholder="Enter Username" type="email" /><br/>
            <Input placeholder="Enter Password" type="password" /><br />
            <Button color="primary">Login</Button>
        </div>
    }
}