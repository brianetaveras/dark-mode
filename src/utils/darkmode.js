import {useState} from 'react'

export function useDarkmode(initialValue){
    const [value, setValue] = useState(initialValue)

    const setDarkmode = (newValue) =>{
        setValue(newValue)
    }
    return [value, setDarkmode]
}