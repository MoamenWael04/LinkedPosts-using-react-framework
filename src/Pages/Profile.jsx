import React, { useContext } from 'react'
import { authContext } from '../assets/Context/AuthContext'

export default function Profile() {

const {userData} = useContext(authContext);

  return (
    <div className="w-4/6 mx-auto pt-8 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-teal-50">Profile</h2>

      <div className="bg-white shadow rounded-lg px-6 py-20">
        <p className="text-sm text-gray-500 mb-6">This is profile layout</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-gray-600">Name</label>
            <div className="mt-1 text-lg text-gray-800">{userData.name}</div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600">Email</label>
            <div className="mt-1 text-lg text-gray-800">{userData.email}</div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600">Date of birth</label>
            <div className="mt-1 text-lg text-gray-800">{userData.dateOfBirth.split('.' , 1).join().replace('T' , ' ').replace('00:00:00' , ' ')}</div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600">Gender</label>
            <div className="mt-1 text-lg text-gray-800">{userData.gender}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
