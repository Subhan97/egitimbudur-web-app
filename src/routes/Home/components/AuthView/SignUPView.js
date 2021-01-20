import React from 'react'

const SignUpView = ({onViewChange}) => (
    <div>
             <form className="form-inline">
                    <div className="form-group mb-2">
                        <input style={{width: "300px", marginRight:"10px"}} type="e-mail" className="form-control" id="staticEmail2" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Kayit ol</button>
                </form>
                <p>Zaten uyemisiniz<br />
                   O zaman giris yapmak icin<a href="#" onClick={e =>{
                       e.preventDefault();
                       onViewChange(1);
                   }}><strong>tiklayiniz</strong></a>

                </p>
    </div>
)
export default SignUpView;