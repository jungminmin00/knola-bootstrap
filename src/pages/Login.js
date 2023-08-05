import { Link } from 'react-router-dom';
import '../scss/login.scss';
export default function Login(){
    return(
        <div id="login">
            <div>
                <h3>LOGIN</h3>
                <ul>
                    <li>
                        <label>login</label>
                        <input type="text"/>                    
                    </li>
                    <li>
                        <label>passowrd</label>
                        <input type='password'/>                  
                    </li>
                </ul>
                <p>
                    <button type='button'><Link to="*">로그인</Link></button>
                </p>
            </div>
        </div>
    );
}