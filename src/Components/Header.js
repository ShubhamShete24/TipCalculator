import React from 'react'
import { Card } from 'react-bootstrap'

function Header() {

    return (
        <div>
            <Card>
                <Card.Header style={{textAlign:"center", fontSize:"30px",fontFamily:"Times New Roman', Times, serif",fontWeight:"bolder" , backgroundColor:"black",color:"white"}}>TipCalculator<br></br><p style={{fontSize:"20px"}}>Build In REACT</p></Card.Header>
            </Card>
            <br></br>
        </div>
    )
}

export default Header
