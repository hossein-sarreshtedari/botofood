import Apple from "@/components/icons/Apple";
import styles from "./Companies.module.css";
import SpaceX from "@/components/icons/SpaceX";
import Binance from "@/components/icons/Binance";
import Tesla from "@/components/icons/Tesla";

const Companies = () => {

    return (

        <div className={styles.container}>
            
            <Apple />
            <SpaceX />
            <Binance />
            <Tesla />

        </div>
    );
};

export default Companies;