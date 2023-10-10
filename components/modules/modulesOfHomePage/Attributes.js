import styles from "./Attributes.module.css";

//icons
import Fast from "@/components/icons/Fast";
import Food from "@/components/icons/Food";
import Choice from "@/components/icons/Choice";
import Clock from "@/components/icons/Clock";

const Attributes = () => {

    return (

        <div className={styles.container}>

            <h2 className={styles.title}>Why Us?</h2>

            <div className={styles.items}>

                <div className={styles.item}>

                    <Fast />
                    <span>Fast</span>


                </div>

                <div className={styles.item}>

                    <Food />
                    <span>Best Restaurants</span>


                </div>

                <div className={styles.item}>

                    <Choice />
                    <span>Your Choice</span>


                </div>

                <div className={styles.item}>

                    <Clock />
                    <span>24-7</span>


                </div>



            </div>

        </div>
    );
};

export default Attributes;