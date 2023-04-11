import React, { Fragment, useState } from 'react';
import { editOwners } from '../services/UserService';

const EditDashboard = ({ owners }) => {

  const [user_details, setUserDetails] = useState({
    id: owners?.id || '',
    first_name: owners?.first_name || '',
    last_name: owners?.last_name || '',
    email: owners?.email || '',
    phone_number: owners?.phone_number || '',

});

const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
        return { ...prev, [name]: value };
    })
    console.log(name, value)
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Came from User Service
    editOwners(user_details).then((console.log(user_details)));
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = (e) => {
    setShowModal(!showModal);
  };

  return (
    <Fragment>
      {/* Button to open the modal */}
      <div className="py-4 mx-10 mt-10">
        <button
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={toggleModal}
        >
          Edit
        </button>
      </div>

      {/* Modal code */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-lg ">
              <div className="p-4">
                <h2 className="text-lg font-bold mb-4">Edit user information</h2>
                <div className="mb-4">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    defaultValue={owners.first_name}
                    onChange={handleChange} 
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    defaultValue={owners.last_name}
                    onChange={handleChange} 
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    defaultValue={owners.email}
                    onChange={handleChange} 
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    defaultValue={owners.phone_number}
                    onChange={handleChange} 
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    className="bg-gray-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(e) => {
                      handleSubmit(e);
                      toggleModal();
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={toggleModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default EditDashboard;
