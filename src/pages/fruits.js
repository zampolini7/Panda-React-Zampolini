import { useParams } from "react-router"
import {Link} from 'react-router-dom'

export const Fruit = ()=>{
    const {fruitId} = useParams()

    const fruits =[
        {
            name: 'banana',
            image: '🍌'
        },
        {
            name: 'naranja',
            image: '🍊'
        },
        {
            name: 'apple',
            image: '🍎'
        }
    ]


    const getFruits =()=>{
        const myFruit = fruits.find((fruit) => fruit.name === fruitId)
        return myFruit
    }

    return(
        <main>
            <h1>Your fruit</h1>
            <p>{getFruits(fruitId).image}</p>

            {fruits.map((fruit)=>(
                    <button>
                        <Link to={`/fruit/${fruit.name}`}> Fruta {fruit.image} </Link>
                    </button>
            ))}

        </main>
    )
}