import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'



// --------------- basic styling -----------------------------

const FormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50vh;

`

const PlantForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: mistyrose;
    height: 27vh;
    width: 35%;
    padding-left: 5%;
    padding-right: 5%;
    box-shadow: 5px 5px 5px 5px darkgray;

    h2{
        text-align: center;
    }

    input{
        margin-top: 1.5%;
        margin-bottom: 1.5%;
        padding: 1%;
    }

    button{
        width: 25%;
        align-self: center;
        margin-top: 1%;
        margin-bottom: 4%;
        border-radius: 12px;
        
    }
`







// --------------- Initial Values -------------------------------
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

    //------------------ helpers ------------------------------------

    const history = useHistory()

    const routeToPlantCards = () =>{
        history.push('/PlantCard')
    }

   // ----------------- event handlers -------------------------------
   const handlePlantInput = (event) => {
       const {name, value} = event.target
       updateForm(name, value)
   }

   const handlePlantAction = (event)=>{
       event.preventDefault()
       //axios code will go here
       axios
       .post('https://reqres.in/api/register')
       .then(response =>{
           routeToPlantCards()
           console.log(response)
       })
       .catch(error =>{
           console.log('THIS IS YOUR ERROR----->', error)
       })
   }

   // ---------------------- Form Layout ----------------------------------
    return(
        <FormWrapper>
            <PlantForm onSubmit={handlePlantAction}>
                <h2>Add your favorite plant</h2>
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
                <button onClick={handlePlantAction}>Add your favorite plants</button>
            </PlantForm>
        </FormWrapper> 
    )
}

export default Plant