import MenuPage from "@/components/templates/MenuPage";


const Menu = ({data}) => {

    return (

        <>
                <MenuPage foods={data}/>
        </>
    );
};

export default Menu;


export async function getStaticProps(){

    const res = await fetch(`${process.env.BASE_URL}/data`);
    const data = await res.json();
    

    return{

        props : {data : data},
        revalidate : 20
    }
}