import styles from "./Restriction.module.css";

const Restriction = () => {

    return (

        <div className={styles.container}>

            <h2 className={styles.title}>Restrictions</h2>
            <p className={styles.paraText}>Prohibited items. Merchants may only offer to sell items expressly
                permitted by their agreement with Uber. A merchant cannot offer
                specially regulated or illicit items, like cannabidiol (CBD) and
                tetrahydrocannabinol (THC), on their Uber Eats menu.</p>

        </div>
    );
};

export default Restriction;