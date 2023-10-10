import DetailFoodPage from "@/components/templates/DetailFoodPage";
import { useRouter } from "next/router";

const DetailFood = ({detailFood}) => {

    const router = useRouter();

    
    return (

        <>

           <DetailFoodPage detailFood={detailFood} />
            
        </>
    );
};

export default DetailFood;





export async function getStaticPaths(){

    const res = await fetch(`${process.env.BASE_URL}/data`);
    const data = await res.json();

    const tempPaths = data.map(item => {

        return {params : {FoodId : item.id.toString()}}
    })

    const paths = tempPaths.slice(0 ,4);
   

    return{

        paths : paths,
        fallback : "blocking",
    }
}


export async function getStaticProps(context){

    const {params} = context ;

    const res = await fetch(`${process.env.BASE_URL}/data/${params.FoodId}`)
    const data = await res.json();

    if(!data.name){

        return {

            notFound : true,
        }
    }

    

    return{

        props : {detailFood : data},
        revalidate : 10
    }
}