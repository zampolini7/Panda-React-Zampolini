import './input.css'


export const Input = ({id, value, onChange, label})=>{
    return(
        <div className="input">
            <label className="label" >{label}</label>
            
            <input 
            type="text" 
            onChange={({  target  }) => onChange(id, target.value) } 
            value={value}
            />
        </div>

    )
}