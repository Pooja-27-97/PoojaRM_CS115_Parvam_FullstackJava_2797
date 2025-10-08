import React from 'react'
import { useState } from 'react'

export const CharLength = () => {
    const [userInput, setUserInput] = useState(0);
    return (
        <>
            <textarea name="address" id="address" rows={5} cols={15} onChange={(e) => setUserInput(e.target.value)}></textarea>
            <div>Character count: {userInput.length}</div>
        </>
    )
}
