import React, { useEffect, useState } from 'react'

export default function Palindrome() {

    const ul = {
        listStyle: "none",
        marginTop: "60px"
    }

    const cont = {
        marginTop:"80px",
       marginLeft:"300px"
    }




    const [pal, setpal] = useState("");
    const [result, setresult] = useState("Enter Text to Check Palindrome");


    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!pal) {
            alert("Text Can't be empty");
        }
        else{
            
            if (pal === pal.split("").reverse().join("")) {
                setresult("Palindrome");
            }
            else if (pal !== pal.split("").reverse().join("")){
                setresult("Not Palindrome");
            }
            
           
        }
    }

    const handleClear=(e)=>{
        e.preventDefault();
        setpal("");
        setresult("Enter Text to Check Palindrome");
    }


    return (
        <>
            <ul style={ul}>
                <li><textarea style={{ width: "280px", height: "100px" }}
                    placeholder='Enter Text'
                    value={pal}
                    onChange={(event) => setpal(event.target.value)}
                ></textarea></li>

                <li>
                    <button className="btn btn-primary my-3" type="submit" onClick={handleSubmit}>Check</button>
                    <button type="button" className="btn btn-danger mx-3" onClick={handleClear}>Clear</button>
                </li>
            </ul>

            <div style={cont}>
                <h3>{result}</h3>
            </div>
        </>
    )
}

