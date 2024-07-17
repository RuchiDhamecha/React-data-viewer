import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.scss'
const Navbar=()=>{
    const navigate = useNavigate();
    
    const logout =()=>{
        navigate('/');
    }
    return(
        <div className={styles.Navbar}>
            <h3>
                React Data Viewer App
            </h3>
            <button onClick={()=>logout()}>Logout</button>
        </div>
    )
}
export default Navbar