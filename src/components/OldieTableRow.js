import React from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

const OldieTableRow = (props) => {
    const {_id, name, email, gradYear} = props.obj

    const deleteOldie = () => {
        axios.delete(
            'http://localhost:4000/oldies/delete-oldie' + _id,
        ).then(res => {
            if(res.status === 200){
                alert('Old STudent successfully deleted!');
                window.location.reload();
            }else Promise.reject()
        })
        .catch()
    }

    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gradYear}</td>
            <td>
                <Link className='edit-link' to={'/edit-oldie' + _id}>
                     Edit 
                </Link>
                <Button onClick={deleteOldie} size='sm' variant='danger'>
                    Delete Old Student
                </Button>
            </td>
        </tr>
    )
}
export default OldieTableRow