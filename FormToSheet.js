import react from 'react'

function FormToSHeet() {
    //header: {  Contect-Type: application/x-www-form-urlencoded}'

const handleSubmit = (e)=>{
    e.priventDefault()
    const url = 'https://script.google.com/macros/s/AKfycbywobQ-W9O-LZ-mUkEnxrHwG6MgKpntNCXMbCKzYTCsjioycyA48jotsAx7D2qh7fdz8w/exec'
    fetch(url,{
        method: "POST",
        headers: {" Content-Type": "application/x-www-form-urlencoded"}
    body:(Mobile number=${e.target.mobilenumber.value} &Email=${e.target.email.value})
}).then(res=>res.text()).then(data=>{
    alert(data)
}).catch(error=>console.log(error))
}

    return(
        <div>
            <h1>react to sheet</h1>
            <form  onSubmit= {handleSubmit}>
                <input name= 'mobile numbr ' placeholder='Mobile numer'/><br/>
                <input name = 'email' placeholder='Email'/> <br/>
                <button>Add</button>
                </form>
        </div>
    )}