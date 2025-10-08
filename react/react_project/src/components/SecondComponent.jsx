import React from 'react'

export default function SecondComponent() {
    const styles = {
        border: "2px solid aqua",
        margin: "5px",
        textAlign: "center",
        backgroundColor: "floralwhite"
    }
    return (
        <>
            <div style={styles}>
                <h2>Random Text</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi molestiae, perferendis harum reiciendis rem quidem veritatis magnam? Dolorem soluta libero facere ab dolore consectetur excepturi repellat nihil ullam laborum.
                    Magni repellat repudiandae quos nemo? Ducimus quod maiores sapiente id error quos omnis, natus nulla perspiciatis modi, in commodi reprehenderit atque. Magni quisquam non voluptatum, similique ullam repellendus autem ut?
                    Inventore ipsam possimus veniam, aspernatur cumque rerum ratione mollitia voluptates quaerat voluptatibus quasi similique ea sint culpa dolor, sequi voluptatem saepe repudiandae eos, omnis assumenda? Error voluptas cum rem vitae.</p>
                <br />
            </div>
            <div style={styles}>
                <h2>Jujutsukaisen</h2>
                <ul>
                    <li>Gojo Satoru</li>
                    <li>Geto Suguru</li>
                    <li>Megumi Fushiguro</li>
                    <li>Yuta</li>
                    <li>Ryomen Sukuna</li>
                </ul>
            </div>
        </>
    )
}
