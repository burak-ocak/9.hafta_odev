import "./Kisiler.css";

function Kisiler(props){
    return(
        <div className="icerik">

            <div>
                <img className="img" src={props.link} alt="Profil Fotoğrafı" />
            </div>

            <div className="pr">
                <p><b>{props.isim}</b></p>
                <p>{props.yas} years</p>
            </div>

        </div>
    )
};

export default Kisiler;