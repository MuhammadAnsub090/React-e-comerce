import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>

            <nav>
                <ul className='flex justify-evenly gap-10 my-10 bg-black text-white'>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>
                    <li>
                        <Link to='about'> About </Link>
                    </li>
                    <li>
                        <Link to='contact'> Contact </Link>
                    </li>
                    <li>
                        <Link to='products'> Products </Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar
