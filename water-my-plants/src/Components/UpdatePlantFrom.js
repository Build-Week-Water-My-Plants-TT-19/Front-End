import React,{useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import {saveUsername} from '../Store/Actions'
import { connect } from 'react-redux';
import { axiosWithAuth } from './utils/axiosWithAuth'

// --------------- basic styling -----------------------------

const FormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 94vh;
`

const PlantForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: mistyrose;
    height: 32vh;
    width: 35%;
    padding-left: 5%;
    padding-right: 5%;
    box-shadow: 5px 5px 5px 5px darkgray;
    border-radius: 12px;
    @media (max-width: 480px){
        width: 70%;
    }
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

    .form-title {
        color: white;
        font-size: 1.6rem;
    }
`

// --------------- Initial Values -------------------------------
const initialPlantValues = {
    "species": '',
    "name": '',
    "location": '',
    "schedule": '',
    "user": {
        "userid": 0,
    }
}

const PlantFormComponent = (props) =>{
    const [plantValues, setPlantValues] = useState(initialPlantValues)
    const { username } = props
    const [userid, setUserid] = useState(0)
    const { id } = useParams()

    useEffect(() => {
        if(id) {
          axios.get(`https://chrisjcorbin-watermyplants.herokuapp.com/plants/plant/${id}`)
          .then(res => {
            setPlantValues(res.data)
          })
          .catch(err => console.log(err));
        }
      }, [id])

      useEffect(() => {
        axios
            .get(`https://chrisjcorbin-watermyplants.herokuapp.com/getuser/${username}`)
            .then(res => {
            setPlantValues(res.data)
            setUserid(res.data.userid)
            plantValues.user.userid = userid
            console.log(res.data.userid)
            })
            
            .catch(err => {
            console.log(err)
            })
      }, [])

    const updateForm = (inputName, inputValue) =>{
        setPlantValues({...plantValues, [inputName]: inputValue})
    }

    //------------------ helpers ------------------------------------

    const history = useHistory()

    const routeToPlantCards = () =>{
        history.push('/profile')
    }

   // ----------------- event handlers -------------------------------
   const handlePlantInput = (event) => {
       const {name, value} = event.target
       updateForm(name, value)
   }

   console.log(plantValues)

   const handlePlantAction = (event)=>{
        event.preventDefault()
    //    setPlantValues({...plantValues, username: username})
        if(id) {
            axios
                .put(`https://chrisjcorbin-watermyplants.herokuapp.com/plants/plant/${id}`, plantValues)
                .then(res => {
                history.push(`/plants/plant/${id}`);
                })
                .catch(err => console.log(err))
        }

       
   }

   // ---------------------- Form Layout ----------------------------------
    return(
        <FormWrapper>
            <PlantForm onSubmit={handlePlantAction}>
                <h2 className='form-title'>Add your favorite plant</h2>
                <label>Plant Name {' '}</label>
                <input
                name='name'
                type='text'
                placeholder='Please enter a Plant name'
                defaultValue={plantValues.name}
                onChange={handlePlantInput}
                />

                <label>Plant Species {' '}</label>
                <input
                name='species'
                type='text'
                placeholder='Plant Species'
                defaultValue={plantValues.species}
                onChange={handlePlantInput}
                />

                <label>Plant Location {' '}</label>
                <input
                name='location'
                type='text'
                placeholder='Plant Species'
                defaultValue={plantValues.location}
                onChange={handlePlantInput}
                />

                <label>Plant Schedule {' '}</label>
                <input
                name='schedule'
                placeholder='Plant Schedule'
                defaultValue={plantValues.schedule}
                onChange={handlePlantInput}
                />
                <button onClick={handlePlantAction}>Finish Editing</button>
            </PlantForm>
        </FormWrapper> 
    )
}

const mapStateToProps = state => {
    return {
      username: state.saveUsername.username
    }
  }
  
  export default connect(mapStateToProps, { saveUsername })(PlantFormComponent);