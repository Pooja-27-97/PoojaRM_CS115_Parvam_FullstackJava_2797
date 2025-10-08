import React from 'react'

export default function FirstComponent(props) {
    console.log(props.count);
    console.log(props.data);
    return (
        <div style={{ border: "2px solid orchid", margin: "5px", textAlign: "center" }}>
            This is the first component {props.count} - {props.data}
        </div>
    )
}
