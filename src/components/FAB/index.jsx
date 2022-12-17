import './index.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { useGlobalContext } from '../../GlobalContexts';


const Fab = ({children}) => {
    const allGlobalContext = useGlobalContext()
    const {popoverToggle, setPopoverToggle} = allGlobalContext

    const handleDropCall = () => {
        setPopoverToggle((lastState)=> !lastState)
    }

    return ( 
        <>
        <div className={popoverToggle ? "popover-fab-container" : ""}>
            {children}
            <button className="FAB-l" onClick={handleDropCall}>
                <MaterialIcon icon="add" size="medium" color={"#fff"} />
            </button>
        </div>
        </>
    );
}
 
export default Fab;