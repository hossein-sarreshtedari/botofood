import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
import styles from "./DetailFoodPage.module.css";

const DetailFoodPage = ({ detailFood }) => {

    const { id, name, discount, details, ingredients , recipe , price, introduction } = detailFood;

    //check discount
    const checkDiscount = discount === 0 ? false : true;
    let totalPrice = discount === 0 ? price : price - (price * discount) / 100;


    // check price in float or not
    if (Number.isFinite(totalPrice) && !Number.isInteger(totalPrice)) {
        totalPrice = totalPrice.toFixed(1);

    } else {
        totalPrice = totalPrice.toString();
    }


    //for made details section
    const keyDetails = [];
    const valueDetails = [];

    for (let item of details) {

        const keys = Object.keys(item);
        const values = Object.values(item);

        keyDetails.push(keys[0]);
        valueDetails.push(values[0])
    }




    return (

        <div className={styles.container}>

            <h2 className={styles.title}>Details</h2>


            <div className={styles.topData}>

                <div className={styles.left}>


                    <img src={`/images/${id}.jpeg`} alt={name} />


                </div>


                <div className={styles.right}>

                    <h3 className={styles.name}>{name}</h3>

                    <div className={styles.LocDiv}>

                        <Location />
                        <span className={styles.loc}>{details[0].Cuisine}</span>

                    </div>
                    <div className={styles.PriceDiv}>

                        <Dollar />
                        <span className={styles.price} style={{ color: checkDiscount ? "#d21404" : "initial" }}>{totalPrice}$</span>

                    </div>

                    {checkDiscount && <span className={styles.showDiscount}>{discount}% OFF</span>}


                </div>

            </div>


            <p className={styles.description}>{introduction}</p>

            <div className={styles.DetailDiv}>

                <h3>Details</h3>

                <ul>

                    {keyDetails.map((item, index) => {

                        return <li key={index}><span style={{ fontWeight: "bold" }}>{item}</span>: {valueDetails[index]}</li>
                    })}


                </ul>

            </div>


            <div className={styles.ingredientsDiv}>

                <h3>Ingredients</h3>

                <ul>

                    {ingredients.map((item, index) => {

                        return <li key={index} style={{fontWeight : "bold"}}>{item}</li>
                    })}


                </ul>

            </div>

            <div className={styles.recipeDiv}>

                <h3>Recipe</h3>

                <ul>

                    {recipe.map((item, index) => {

                        return <li key={index}><span className={styles.numberList}>{index + 1}</span><span className={styles.listItem}>{item}</span></li>
                    })}

                </ul>

            </div>

            <button className={`${styles.AddToCart} hoverBtn`}>Add To Cart</button>

        </div>
    );
};

export default DetailFoodPage;