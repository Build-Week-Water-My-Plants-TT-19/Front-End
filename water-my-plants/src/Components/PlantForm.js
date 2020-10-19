import React,{useState} from 'react'
import axios from 'axios'

const initialPlantValues = {
    id: `{Math.floor(Math.random() * 2000)}`,
    nickname: '',
    species:'',
    last_water: '',
    schedule: [],

}



const Plant = () =>{
    const [plantValues, setPlantValues] = useState(initialPlantValues)

    const updateForm = (inputName, inputValue) =>{
        setPlantValues({...plantValues, [inputName]: inputValue})
    }

   //event handlers
   const handlePlantInput = (event) => {
       const {name, value} = event.target
       updateForm(name, value)
   }

   const plantAction = (event)=>{
       event.preventDefault()
       //axios code will go here
       axios.get('https://reqres.in/api/register')
       .then(response =>{
           console.log(response)
       })
       .catch(error =>{
           console.log('THIS IS YOUR ERROR----->', error)
       })
   }
    return(
        <form onSubmit={plantAction} className ='plant-form'>
            <label>Plant Name {' '}</label>
            <input
            name='input'
            type='text'
            placeholder='Please enter a Plant name'
            defaultValue={plantValues.nickname}
            onChange={handlePlantInput}
            />

            <label>Plant Species {' '}</label>
            <input
            name='input'
            type='text'
            placeholder='Plant Species'
            defaultValue={plantValues.species}
            onChange={handlePlantInput}
            />

            <label>Last Water {' '}</label>
            <input
            name='input'
            type='text'
            placeholder='When was the plant watered last?'
            defaultValue={plantValues.last_water}
            onChange={handlePlantInput}
            />

            <label>Plant Schedule {' '}</label>
            <input
            name='input'
            type='text'
            placeholder='Plant Schedule'
            defaultValue={plantValues.schedule}
            onChange={handlePlantInput}
            />
        </form>
    )
}

export default Plant