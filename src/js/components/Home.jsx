import React, { useState } from 'react';

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [Mistareas, setMistareas] = useState([]);

    return (
        <div className="container">
            <h1>Mis tareas </h1>
            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyDown={(e) => {
                            console.log(e.key);
                            if (e.key === "Enter") {
                                console.log("Enter was pressed");
                                setMistareas(Mistareas.concat(inputValue));
                                setInputValue("");
                            }
                        }}
                        placeholder="¿Qué necesitas hacer?"
                    />
                </li>
                {Mistareas.map((item, index) => (
                    <li key={index}>
                        {item} {""}
                        <button
                            className="fa-solid fa-trash"
                            onClick={() =>
                                setMistareas(
                                    Mistareas.filter(
                                        (_, currentIndex) => index !== currentIndex
                                    )
                                )
                            }
                        >eliminar</button>
                    </li>
                ))}
            </ul>
            <div>{Mistareas.length} tareas</div>
        </div>
    );
};

export default Home;