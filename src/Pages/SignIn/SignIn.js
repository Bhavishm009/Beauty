import React ,{useState,useEffect}from 'react'
import Style from './SignIn.module.css'
import CustomInput from '../../Atom/Input/CustomInput'
import CustomButton from "../../Atom/Button/CustomButton"
import Navbar from '../../Components/Navbar/Navbar'
import swal from "sweetalert";
import { useNavigate, NavLink } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { IsLogin } from '../../Recoil/Atom'
function SignIn() {
    let nevigate = useNavigate();
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [news, setNews] = useState([]);
    let setLogin = useSetRecoilState(IsLogin);

    useEffect(() => {
        if (localStorage.getItem("userlist")) {
          const data = JSON.parse(localStorage.getItem("userlist"));
          console.log(data);
          setNews(data);
        }
      }, []);
      const handleSubmit = (e) => {
        e.preventDefault();
        let getNewData = news.filter(
          (e) => e.email === email && e.password === password
        );
        if (getNewData.length > 0) {
          setLogin(true);
          localStorage.setItem("currentuser", JSON.stringify(getNewData[0]));
         
          swal({
            title: "Login Successful!",
            text: "Congratulations! You Are Succesfully Login!",
            icon: "success",
            buttons: {
              confirm: {
                text: "Okay",
                value: true,
                visible: true,
                className: Style["SweetAlertButton"],
                closeModal: true,
              },
            },
            dangerMode: false,
          }).then((value) => {
            if (value) {
              nevigate("/");
            }})
         
        } else {
          swal({
            title: "User not found!",
            text: "Enter valid credentials!",
            icon: "error",
            buttons: {
              confirm: {
                text: "Okay",
                value: true,
                visible: true,
                className: Style["SweetAlertButton"],
                closeModal: true,
              },
            },
            dangerMode: false,
          });
        }
      };
  return (
    <div>
        <Navbar />
       <div className={Style.maincont}>
        <form className={Style.formcont} onSubmit={handleSubmit}>
           <CustomInput 
            className={Style.input}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
            type="text"
            value={email}
            />
            <CustomInput className={Style.input}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
                type="password"
             value={password}
            />
               <CustomButton 
            ButtonText="LogIn"
            className={Style.btn}
            type="submit"
            />
                  <h5>
                  don't have an account?{" "}
              <NavLink style={{ color: "blue" }} to="/SingUp">
                Register Page
              </NavLink>
            </h5>
            </form>
            <div className={Style.imgCont}>
              <img src='http://farm6.static.flickr.com/5159/5905083156_0edc115760.jpg' width='100%' height='100%' alt='log.jpeg'/>
            </div>
            </div>
    </div>
  )
}

export default SignIn
