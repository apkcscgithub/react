import React ,{useState} from 'react';
import axios from "axios";
//import './App.css';
import "../css/main-interfaces.css" ;
import "../css/style.css";
import "../css/bootstrap.min.css";
//import "../css/sfmono.css";
import "../css/Font-Awesome-master/css/all.css"


function Login()
{
	var  [uname , setUname] = useState("");
	var [pws , setPws] = useState("");
	var  submits =  function()
	{
		uname = document.getElementById("username").value;
		pws = document.getElementById("password").value;
		if(uname==="")
		{
			alert("Enter User Name.");
			return false;
		}
		if(pws==="")
		{
			alert("Enter Password.");
			return false;
		}
		alert("hi"+uname);
		/*fetch("http://localhost:3001/login",
			{ 
				method:"POST",
				headers:{
					"Content-Type":"application/json",
					"Accept":"application/json"
				},
				body:JSON.stringify({"uname":"itp02.dc" ,"pw":"123"})
			}
			
		);*/
		const headerss = {
			"Content-Type":"application/json",
			"Accept":"application/json"
		}
		const dtas = {
			"username":uname,
			"pws":pws
		}
		var dta = axios.post("http://localhost:3001/login",dtas,headerss).then((rs)=>{
			console.log(rs.data);
			window.location.href="http://localhost:3000/home";
		});
		
	}
	return(
		<div id="wrapper">
			<div id="main-container">
				<div className="login-mainContainer">
					
					
					<div className="">
						
						<div className="input-group form-group" >
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-user"></i>User Name</span>
							</div>
							<input type="text" className="form-control" name="username" id="username" size="32" required />
							
						</div>
						<div className="input-group form-group">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-unlock" ></i>Password </span>
							</div>
							<input type="password" className="form-control" name="password" id="password" size="32" />
						</div>
						
						<div className="">
							 <input type="submit" value="Login" name="login" border="0" onClick={submits} />
						</div>                
					</div>
					
				</div>
			</div>	
		</div>
	);
}
export default Login;