import CategoryPage from "@/components/templates/CategoryPage";


const Categorys = ({filterData}) => {

    return (

        <>

            <CategoryPage filterData={filterData} />
            
        </>
    );
};

export default Categorys;


export async function getServerSideProps(context){

    const {query} = context;
    const res = await fetch(`${process.env.BASE_URL}/data`);
    const data = await res.json();


    //this code for backend not important in front
   const filterData = data.filter(item => {

    const DifficultyResult = item.details.filter(detail => detail.Difficulty && detail.Difficulty === query.Difficulty)

    const cookingTimeResult = item.details.filter(detail => {

        const cookingTime = detail["Cooking Time"] || "";
        const time = cookingTime.split(" ")[0];

        if(query.cookingTime === "Less" && time && +time <= 30) return detail ;
        else if (query.cookingTime === "More" && time && +time > 30) return detail;


    })

    if(query.Difficulty && query.cookingTime && DifficultyResult.length , cookingTimeResult.length) return item;
    if (!query.cookingTime && query.Difficulty && DifficultyResult.length) return item;
    if (query.cookingTime && !query.Difficulty && cookingTimeResult.length) return item;


    
   })
   

    return{

        props : {filterData : filterData},
    }
    
}