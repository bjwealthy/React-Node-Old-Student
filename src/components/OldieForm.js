
import React from 'react'; 
import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {FormGroup, FormControl, Button} from 'react-bootstrap'

const OldieForm = (props) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string()
            .email('Please enter a right email format')
            .required('Required'),
        gradYear: Yup.number()
            .positive('Please enter a valid graduation year')
            .integer('Please enter a year')
            .required('Required')
    });
    console.log(props)
    return(
        <div className='form-wrapper'>
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <Field name='name' 
                            type='text' 
                            className='form-control' 
                        />
                        <ErrorMessage 
                            name='name' 
                            className='d-block invalid-feedback' 
                            component='span'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Field name='email' 
                            type='text' 
                            className='form-control' 
                        />
                        <ErrorMessage 
                            name='email' 
                            className='d-block invalid-feedback' 
                            component='span'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Field name='gradYear' 
                            type='number' 
                            className='form-control' 
                        />
                        <ErrorMessage 
                            name='gradYear' 
                            className='d-block invalid-feedback' 
                            component='span'
                        />
                    </FormGroup>
                    <Button variant='danger' size='lg' block='block' type='submit'>
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    )
}

