import React from 'react'

const PasswordReset = ({onViewChange}) => (
    <div>
             <form className="form-inline">
                    <div className="form-group mb-2">
                        <input style={{width: "280px", marginRight:"10px"}} type="e-mail" className="form-control" id="staticEmail2" />
                    </div>
                    <button style={{width:"123px"}} type="submit" className="btn btn-primary mb-2">Sifremi resetle</button>
                </form>
               
                   <p>Uye girisi yapmak icin<a href="#" onClick={e =>{
                       e.preventDefault();
                       onViewChange(1);
                   }}><strong>tiklayiniz</strong></a>

                </p>
    </div>
)
export default PasswordReset;