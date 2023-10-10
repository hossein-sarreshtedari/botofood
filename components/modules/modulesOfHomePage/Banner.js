import Link from "next/link";
import styles from "./Banner.module.css";


const Banner = () => {

    return (

        <div className={styles.container}>

            <div className={styles.left}>

                <h2 className={styles.title}>BotoFood</h2>

                <p className={styles.paraTitle}>Food Delivery and Takeout!</p>
                <p className={styles.paraText}> BotoFood is an online food ordering and delivery platform launched by
                    Uber in 2014. Meals are delivered by couriers using cars, scooters,
                    bikes, or on foot.</p>

                <Link href={"/menu"}><button className={`${styles.btnSeeAll} hoverBtn`}>See All</button></Link>



            </div>
            <div className={styles.right}>

                <img src="/images/banner.png" alt="banner food" />


            </div>

        </div>
    );
};

export default Banner;