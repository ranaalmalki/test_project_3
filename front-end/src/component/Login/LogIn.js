import React from "react";
import './Register.css'
export default class LogIn extends React.Component{
    render(){
        return(
<div>
     
        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <div class="column" id="main">
                  <h1>Log In </h1>
                  <h3>
                    Welcome
                  </h3>
                  <form>
                 
                    <div class="form-group">
                      <label for="exampleInputEmail1">E-mail </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="E-mail"
                      />
                    </div>
                   
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Log In
                    </button>
                  </form>
                </div>
                <div>
                  {/* <?xml version="1.0" encoding="UTF-8"?> */}
                  <svg width="67px" height="578px" viewBox="0 0 67 578" version="1.1" xmlns="http://www.w3.org/2000/svg"xlink="http://www.w3.org/1999/xlink">
                  {/* <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --> */}
                
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z"
                      id="Path"
                      fill="#F9BC35"
                    ></path>
                  </g>
                  </svg>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    }
}
