import Link from "next/link";
import styles from "./Guid.module.css";

const Guid = () => {

    return (

        <div className={styles.container}>

            <Link href={"/menu"}><div className={`${styles.item} hoverBtn`}>

                <span>Menu</span>

            </div></Link>


            <Link href={"/categorys"}><div className={`${styles.item} hoverBtn`}>

                <span>Ctegorys</span>

            </div></Link>


            <Link href={"/"}> <div className={`${styles.item} hoverBtn`}>

                <span>Discount</span>

            </div></Link>

        </div>
    );
};

export default Guid;