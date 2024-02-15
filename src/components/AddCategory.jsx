import { useState } from 'react';

export const AddCategory = ({onNewCategory}) =>{
    
    const [inputValue, setInputValue] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length <= 1) return
        onNewCategory(inputValue.trim())
        setInputValue('')
    }
    
    const onChange =({target}) =>{
        setInputValue(target.value)
    }

    return(
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onChange}
            />
        </form>
    )
}
