import React from 'react'

export default function Card({character, house}){

        return (
            <div className="card">
                { 
                    character.house === house 
                    ? 
                    <div>
                    <h2>{character.name}</h2>
                    <img 
                        src={character.image}
                        alt=""
                    />
                    <div> 
                        <p>{character.house}</p>
                        <p>{character.ancestry}</p>
                    </div>
                    <div>
                        <h3>Wand</h3>
                        <p>{character.wand.wood}</p>
                        <p>{character.wand.core}</p>
                        <p>{character.wand.length}"</p>
                    </div>
                    </div>
                    : null
                }           
            </div>
        )
    }
