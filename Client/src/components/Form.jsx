import { useState } from 'react';
import { validate } from "../utils/validation";



const Form = ({onLogin}) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })


    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            validate({
              ...userData,
              [event.target.name]: event.target.value,
            })
          );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(userData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <br />
            <label htmlFor="">Email: </label>
            <input type="email" value={userData.email} name="email" onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
            <br />
            <br />
            <label htmlFor="">Contraseña: </label>
            <input type="password" value={userData.password} name="password" onChange={handleChange} />
            {errors.password && <p className="error">{errors.password}</p>}
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}

export default Form