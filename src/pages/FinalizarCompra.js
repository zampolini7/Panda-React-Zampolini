import {Input} from '../components/input/input'
import {useState, useEffect} from 'react'

export const FinDeCompra =()=>{
    
    const [form, setForm] = useState({
        name:'',
        surname: '',
        age:''
    });

    const [isDisabledButon, setisDisabledButon] = useState(true);

    const formFields= [
        {
            id: "name",
            label:"nombre",
            value: form.name
           
        },
        {
            id: "surname",
            label:"apellido",
            value: form.surname
           
        },
        {
            id: "age",
            label:"Edad",
            value: form.edad
           
        }
    ]

    const handleForm = (id, value)=>{
        const newForm = {...form, [id]:value}
        setForm(newForm)
        }

    const handleSubmit= ()=>{
        alert(`your name is ${form.name} ${form.surname}, and you have ${form.age} years  `);
    }   


    useEffect(() => {
        const formFieldsValue = Object.values(form)
        const isSomeFieldEmpty =  formFieldsValue.some(field => !field )
        setisDisabledButon(isSomeFieldEmpty )
    }, [form.name, form.surname, form.age]);
    return(
        <div>

            {
                formFields.map (
                    ({id, label, value})=>(
                    <Input 
                        key={id} 
                        id= {id} 
                        label={label} 
                        value={value} 
                        onChange={handleForm} 
                    />)
                    
                )
            }

            {
                <button disabled={isDisabledButon} onClick={handleSubmit}> 
                    Hacer compra
                </button>
            }
            
        </div>
    )
}