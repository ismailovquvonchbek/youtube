import "./Error.scss";
import Error_Img from "../../Images/error-404.jpg"

function Error() {
    return (
        <>
        <div className="error__div">
            <img className="error__img" src={Error_Img} alt="Error not found" />
        </div>
        </>
    )
}

export default Error;