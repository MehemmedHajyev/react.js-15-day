import React from 'react'
import { Link } from 'react-router-dom'

const News = () => {
    return (
        <div>
            <div>
                <Link to='/news/1'>1</Link>

            </div>
            <div>
                <Link to='/news/2'>2</Link>


            </div>
            <div>
                <Link to='/news/3'>3</Link>

            </div>

            <div>
                News

            </div>
        </div>
    )
}

export default News