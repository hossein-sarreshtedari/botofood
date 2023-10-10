import { useEffect, useState } from "react";
import styles from "./CategoryPage.module.css";
import { useRouter } from "next/router";
import Card from "../modules/moduleOfMenuPage/Card";

const CategoryPage = ({ filterData }) => {



    const router = useRouter();

    const [fillters, setFilters] = useState({

        Difficulty: "",
        cookingTime: ""

    });

    

    useEffect(() => {

        if(fillters.Difficulty !== router.query.Difficulty || fillters.cookingTime !== router.query.cookingTime){

            setFilters({Difficulty : router.query.Difficulty , cookingTime : router.query.cookingTime})
        }


    } , [])




    const SelectHanlder = (e) => {

        setFilters({ ...fillters, [e.target.name]: e.target.value })
    }

    const SearchHandler = () => {


        router.push({

            pathname: "/categorys",
            query: fillters,
        })


    }



    return (

        <div className={styles.container}>

            <h2 className={styles.title}>Categories</h2>

            <div className={styles.selectOptions}>

                <select className={styles.selectTheme} value={fillters.Difficulty} name="Difficulty" onChange={SelectHanlder}>

                    <option value="">Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>

                </select>

                <select className={styles.selectTheme} value={fillters.cookingTime} name="cookingTime" onChange={SelectHanlder}>

                    <option value="">Cooking Time</option>
                    <option value="More">More than 30 min</option>
                    <option value="Less">Less than 30 min</option>

                </select>

                <button className={`${styles.btnSearch} hoverBtn`} onClick={SearchHandler}>Search</button>


            </div>

            <div className={styles.picDiv} >

                {filterData.length ?

                    <div className={styles.foodCards}>

                        {filterData.map(food => {

                            return <Card key={food.id} {...food} />
                        })}



                    </div>

                    : <img src="/images/search.png" alt="image category page" className={styles.picSearch} />}

            </div>


        </div>
    );
};

export default CategoryPage;