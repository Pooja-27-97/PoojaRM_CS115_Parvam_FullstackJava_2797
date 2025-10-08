import React from 'react'

export default function FirstComponent(props) {
    console.log(props.count);
    console.log(props.data);
    const styles = {
        border: "2px solid purple",
        margin: "5px",
        textAlign: "center",
        backgroundColor: "floralwhite"
    }
    return (
        <>
            <div style={styles}>
                <h2>List of Animes</h2>
                <i>Jujutsukaisen</i><br />
                <i>Demon Slayer</i><br />
                <i>Attack on titan</i><br />
                <i>Spy*Family</i><br />
                <i>Pokemon Horizons</i><br />
            </div>

            <div style={styles}>
                <h2>Characters</h2>
                <i>Gojo Satoru</i><br />
                <i>Ryomrn Sukuna</i><br />
                <i>Muzan Jackson</i><br />
                <i>Amethio</i><br />
                <i> Yuta</i><br />
            </div>
        </>
    )
}
