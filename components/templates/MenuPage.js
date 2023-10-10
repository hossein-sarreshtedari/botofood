import styles from "./MenuPage.module.css";

//modules
import Card from "../modules/moduleOfMenuPage/Card";

const MenuPage = ({foods}) => {

    

    return (

        <div className={styles.container}>

            <h2 className={styles.title}>Menu</h2>

            <div className={styles.foodCards}>

                {foods.map(food => {

                        return <Card key={food.id} {...food} />
                })}


            </div>
            
        </div>
    );
};

export default MenuPage;