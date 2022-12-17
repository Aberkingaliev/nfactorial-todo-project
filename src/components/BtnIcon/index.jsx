import MaterialIcon, {colorPalette} from 'material-icons-react';

const BtnIcon = ({handleClick}) => {
    return ( 
        <>
        <section className="icon-drop-section">
            <button className="btn-icon-small" onClick={handleClick}>
                <MaterialIcon icon="more_vert" size="18px" color={"#AEAEAE"} />
            </button>
        </section>
        </>
     );
}
 
export default BtnIcon;