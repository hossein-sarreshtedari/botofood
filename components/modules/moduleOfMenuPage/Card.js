import Dollar from "@/components/icons/Dollar";
import styles from "./Card.module.css";

//icons
import Location from "@/components/icons/Location";
import Link from "next/link";



const Card = (food) => {

    const { id, name, price, details, discount } = food;


    //check discount
    const checkDiscount = discount === 0 ? false : true;
    let totalPrice = discount === 0 ? price : price - (price * discount) / 100;


    // check price in float or not
    if (Number.isFinite(totalPrice) && !Number.isInteger(totalPrice)) {
        totalPrice = totalPrice.toFixed(1);

    } else {
        totalPrice = totalPrice.toString();
    }



    return (

        <div className={styles.card}>

            {checkDiscount && <span className={styles.discount}>{discount}%</span>}

            <img src={`/images/${id}.jpeg`} alt={`food ${id}`} className={styles.PicFood} />

            <div className={styles.nameAndLocation}>

                <span className={styles.name}>{name}</span>

                <div className={styles.loc}>

                    <Location />
                    <span>{details[0].Cuisine}</span>

                </div>


            </div>

            <div className={styles.price}>

                <Dollar />
                <span style={{ color: checkDiscount ? "#d21404" : "" }}>{totalPrice}$</span>

            </div>

            <Link href={`/menu/${id}`} prefetch={false}><button className={`${styles.btnDetails} hoverBtn`}>See Details</button></Link>



        </div>
    );
};

export default Card;