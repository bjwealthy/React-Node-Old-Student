import React, {useState, useEffect} from 'react';
import axios from 'axios';
import OldieForm from './OldieForm';

const CreateOldie = () => {
    const [formValues, setFormValues] = useState({name: '', email: '', gradYear: ''});
    
    const onSubmit = oldieObject => {
        axios.post('http://localhost:4000/oldies/create-oldie',
        oldieObject)
            .then(res => {
                if(res.status === 200) alert('Oldie created successfully')
                else Promise.reject()
            })
            .catch(err => alert('Something went wrong!'))
    }

    return(
        <OldieForm 
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
        >
            Create Old Student
        </OldieForm>
    )

}
export default CreateOldie