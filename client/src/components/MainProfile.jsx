import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import NavLiks from './NavLiks';

const MainProfile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <NavLiks />
            <br></br>
            <div className='bg-lime-300 text-center pb-10 pt-10 rounded-xl'>
                <div className='text-xl mx-5'>
                    <div className='flex justify-center'>
                        <img className='h-20 mt-3' src={user.avatar} alt="loading" />
                    </div>
                    <p className='mt-5 text-3xl font-bold'>{user.name}</p>
                    <p className='mt-3'>{user.age}</p>
                    <p>{user.gender}</p>
                    <p>{user.type}</p>
                    <p>{user.email}</p>
                </div>
            </div>
        </div>
    )
}

export default MainProfile