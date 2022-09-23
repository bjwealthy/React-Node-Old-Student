import React, {useState, useEffect} from "react";
import axios from 'axios';
import OldieForm from "./OldieForm";

const EditOldie = props => {
    
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        gradYear: ''
    });

    const onSubmit = (oldieObject) => {
        axios.put(
            'http://localhost:4000/oldies/update-oldie' + props.match.params.id,
            oldieObject
        ).then(res => {
            if(res.status === 200){
                alert('Old student successfully updated');
                props.history.push('/oldie-list');
            } else Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    };

    useEffect(() => {
        axios.get('http://localhost:4000/oldies/update-oldie' + props.match.params.id,)
            .then(res => {
                const {name, email, gradYear} = res.data
                setFormValues({name, email, gradYear})
            }).catch(err => console.log(err))
    })
    
    return (
        <OldieForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
            Update Old Student
        </OldieForm>
    )
}
export default EditOldie