import "./Kutu.css";
import Kisiler from "./Kisiler.jsx";

function Kutu(){
    return(
        <section className="kokEtiket">

            <h2 style={ {textAlign:"center"} }>5 birthdays today!</h2>

            <Kisiler isim="Bertie Yates" yas="29" link="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"/>
            
            <Kisiler isim="Hester Hogan" yas="32" link='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg'/>

            <Kisiler isim="Larry Little" yas="36" link='https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg'/>

            <Kisiler isim="Sean Walsh" yas="34" link='https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'/>

            <Kisiler isim="'Lola Gardner" yas="29" link="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"/>

            <button className="btn">Clear All</button>
        </section>
    )
};

export default Kutu;