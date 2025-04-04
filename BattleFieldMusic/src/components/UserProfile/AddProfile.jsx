import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import Languages from "./JSON/languages.json";
import Countries from "./JSON/countries.json";
import States from "./JSON/states.json";
import Cities from "./JSON/cities.json";
import { AuthUserContext } from "../../context/AuthContextApi";
import { doc, setDoc } from "firebase/firestore";
import { __DB } from "../../backend/firebaseconfig";
import { useLocation, useNavigate } from "react-router-dom";

const AddProfile = () => {
  let { authUser } = useContext(AuthUserContext);
  let navigate = useNavigate();
  let location = useLocation();

  let [userDetails, setUserDetails] = useState({
    username: location?.state?.username,
    contactNumber: location?.state?.contactNumber,
    gender: location?.state?.gender,
    dob: location?.state?.dob,
    age: location?.state?.age,
    lang: location?.state?.lang,
    country: location?.state?.country,
    state: location?.state?.state,
    city: location?.state?.city,
    address: location?.state?.address,
    role: "user",
  });

  //! Destructuring the userDetails
  let {
    username,
    contactNumber,
    gender,
    dob,
    age,
    lang,
    country,
    state,
    city,
    address,
    role,
  } = userDetails;

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //! Extracting 4 properties from the authUser
      let { displayName, photoURL, email, uid } = authUser;

      //! Create an object to send inside the database
      //! Payload object
      let payload = {
        ...userDetails,
        displayName,
        photoURL,
        email,
        uid,
      };

      //! Step-1: Create a document reference inside the
      //!         database (Cloud Firestore)
      let user_profile_collection = doc(__DB, "user_details", uid);

      //! Step-2: Set or store the data inside the database
      await setDoc(user_profile_collection, payload);
      navigate("/user/profile");
      toast.success("User details has been updated successfully");
    } catch (error) {
      toast.error(error.code.slice(5));
      console.log("Error while uploading data:", error);
    }
  };
  return (
    <section className="w-full h-[calc(100vh-70px)] flex flex-col justify-center items-center">
      <article className="w-[75%] bg-gray-700 rounded-t-md">
        <header className="w-full text-3xl text-center uppercase font-bold py-4">
          <h1>Add User Details</h1>
        </header>
      </article>
      <main className="w-[75%] bg-gray-900 rounded-b-md">
        <form onSubmit={handleSubmit} className="px-5 py-2">
          <div className="flex mb-2">
            <div className="w-[300px] flex flex-col">
              <label
                htmlFor="username"
                className="text-lg font-semibold px-4 py-2"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-[250px] ml-3 border border-gray-600 py-2 px-2 outline-none rounded"
                onChange={handleInputChange}
                value={username}
              />
            </div>
            <div className="w-[300px] flex flex-col">
              <label
                htmlFor="contactNumber"
                className="text-lg font-semibold px-4 py-2"
              >
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                className="w-[250px] ml-3 border border-gray-600 py-2 px-2 outline-none rounded"
                onChange={handleInputChange}
                value={contactNumber}
              />
            </div>
            <div className="w-[260px] flex flex-col">
              <label htmlFor="gender" className="text-lg font-semibold py-2">
                Gender
              </label>
              <div className="flex border py-2 border-gray-600 rounded">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="mr-2 ml-3 border border-gray-600 py-2 px-2 outline-none rounded"
                  onChange={handleInputChange}
                  checked={gender === "male"}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className=" mr-2 ml-3 border border-gray-600 py-2 px-2 outline-none rounded"
                  onChange={handleInputChange}
                  checked={gender === "female"}
                />
                Female
                <input
                  type="radio"
                  name="gender"
                  value="others"
                  className="mr-2 ml-3 border border-gray-600 py-2 px-2 outline-none rounded"
                  onChange={handleInputChange}
                  checked={gender === "others"}
                />
                Others
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[300px] flex flex-col">
              <label htmlFor="dob" className="text-lg font-semibold px-4 py-2">
                DOB
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="w-[250px] ml-3 border border-gray-600 py-2 px-2 outline-none rounded"
                onChange={handleInputChange}
                value={dob}
              />
            </div>
            <div className="w-[300px] flex flex-col">
              <label htmlFor="age" className="text-lg font-semibold px-4 py-2">
                Age
              </label>
              <input
                type="text"
                name="age"
                id="age"
                className="w-[250px] ml-3 border border-gray-600 py-2 px-2 outline-none rounded"
                onChange={handleInputChange}
                value={age}
              />
            </div>
            <div className="w-[300px] flex flex-col">
              <label htmlFor="lang" className="text-lg font-semibold px-4 py-2">
                Language
              </label>
              <input
                type="text"
                name="lang"
                id="lang"
                className="w-[250px] ml-3 border border-gray-600 py-2 px-2 outline-none rounded"
                onChange={handleInputChange}
                list="langList"
                value={lang}
              />
              <datalist id="langList">
                {Languages.map((language, index) => {
                  return <option key={index}>{language}</option>;
                })}
              </datalist>
            </div>
          </div>
          <div className="flex">
            <div className="w-[300px] flex flex-col">
              <label
                htmlFor="country"
                className="text-lg font-semibold px-4 py-2"
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="w-[250px] ml-3 border border-gray-600 py-2 px-2 outline-none rounded"
                onChange={handleInputChange}
                list="countryList"
                value={country}
              />
              <datalist id="countryList">
                {Countries.map((country, index) => {
                  return <option key={index}>{country}</option>;
                })}
              </datalist>
            </div>
            <div className="w-[300px] flex flex-col">
              <label
                htmlFor="state"
                className="text-lg font-semibold px-4 py-2"
              >
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="w-[250px] ml-3 border border-gray-600 py-2 px-2 outline-none rounded"
                onChange={handleInputChange}
                list="stateList"
                value={state}
              />
              <datalist id="stateList">
                {States.map((state, index) => {
                  return <option key={index}>{state}</option>;
                })}
              </datalist>
            </div>
            <div className="w-[300px] flex flex-col">
              <label htmlFor="city" className="text-lg font-semibold px-4 py-2">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="w-[250px] ml-3 border border-gray-600 py-2 px-2 outline-none rounded"
                onChange={handleInputChange}
                list="cityList"
                value={city}
              />
              <datalist id="cityList">
                {Cities.map((city, index) => {
                  return <option key={index}>{city}</option>;
                })}
              </datalist>
            </div>
          </div>
          <div className="flex mb-5">
            <div className="w-[300px] flex flex-col">
              <label
                htmlFor="address"
                className="text-lg font-semibold px-4 py-2"
              >
                Address
              </label>
              <textarea
                name="address"
                id="address"
                className="w-[850px] ml-3 border border-gray-600 py-2 px-2 outline-none rounded"
                onChange={handleInputChange}
                value={address}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center items-center mb-5">
            <button className="bg-blue-600 py-2 px-20 my-2 text-lg font-semibold cursor-pointer rounded-md">
              Add Profile
            </button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default AddProfile;
