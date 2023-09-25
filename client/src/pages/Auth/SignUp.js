import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout.js'
import axios from 'axios';
import {useNavigate, NavLink } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import "../../styles/AuthStyles.css"
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate=useNavigate()
    
    //form function
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/register', { name, email, password, phone, address,answer }
            );
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };
    console.log(process.env.REACT_APP_API);
  return (
    <Layout>
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">Sign Up Form</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Phone No."
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Your first pet name?"
              required
            />
          </div>
                
          <button type="submit" className="btn btn-primary"
          class="submit">
            Sign Up
          </button>
          <p>Already have an account?
            <NavLink
              class="sigin"
            to="/login"
          >
            Sign in
          </NavLink></p>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;