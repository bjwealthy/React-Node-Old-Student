import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import OldieTableRow from './OldieTableRow'

const OldieList = () => {
    const [oldies, setOldies] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:4000/oldies/')
            .then(({data}) => {setOldies(data)})
            .catch(err => {console.log(err)})
    }, [])

    const DataTable = () => {
        return oldies.map((res, i) => {
            return <OldieTableRow obj={res} key={i}/>
        })
    }

    return(
        <div className='table-wrapper'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Graduation Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    )
}
export default OldieList