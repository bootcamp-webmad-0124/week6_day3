import { Form, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const API_BASE_URL = 'http://localhost:5005'

const SearchBar = () => {

    const [results, setResults] = useState([])

    const handleQuerySearch = e => {

        const { value } = e.target

        value.length > 1 ? fetchResults(value) : setResults([])
    }

    const fetchResults = value => {
        axios
            .get(`${API_BASE_URL}/coasters?title_like=${value}`)
            .then(({ data }) => setResults(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="SearchBar">

            <Form>
                <Form.Control
                    type="text"
                    placeholder="Buscar..."
                    onKeyUp={handleQuerySearch}
                />
            </Form>

            <ListGroup style={{ position: 'absolute' }}>
                {
                    results.map(elm => {
                        return (
                            <Link key={elm.id} to={'/'} style={{ textDecoration: 'none' }}>
                                <ListGroup.Item>{elm.title}</ListGroup.Item>
                            </Link>
                        )
                    })
                }

            </ListGroup>

        </div>
    )
}

export default SearchBar