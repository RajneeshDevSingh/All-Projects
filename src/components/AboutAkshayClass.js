import React from "react";


class AboutAkshayClass extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state =
        {
            count1 : 1,
            count2 : 2,
            userInfo:
            {
                name:"Github Name",
                location:"Github location",
                avatar_url:"Github Img",
            },
        }
        // console.log("Hello from constructor");
    }

async componentDidMount()
{
    const data = await fetch("https://api.github.com/users/RajneeshDevSingh");
    const json =  await data.json();
    this.setState({
        userInfo:json,
    })
    // console.log("Hello from Didmount",  json);
}




    render(){
        // console.log("Hello from render");
        const {name , location} = this.props;
        const {count1 , count2} = this.state;
        
        const { avatar_url} = this.state.userInfo;
        return(
            <div>I am class Based Component 
                <h1>My name is - : {this.state.userInfo.name}</h1>
                <h1>My Location is - : {this.state.userInfo.location}</h1>
                <img src={avatar_url}    style={{height:"10rem" , width:"10rem" , borderRadius:"2rem"}}></img>
                <h2>Name:- {name}</h2>
                <h3>Location:-{location}</h3>
                <h3>Contact:- </h3>
                <button onClick={()=> {
                    this.setState({
                        count1: this.state.count1 + 1,
                        count2: this.state.count2 + 2,
                    })
                }}>Increase Count</button>
                <button onClick={()=> {
                    this.setState({
                        count1: 0,
                        count2: 0,
                    })
                }}>Reset Count</button>
                <h3>count1-: {count1}</h3>
                <h3>count-: {count2}</h3>
                
            </div>
        )
    }

}


export default AboutAkshayClass;

