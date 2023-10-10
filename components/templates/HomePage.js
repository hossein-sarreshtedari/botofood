import Attributes from "../modules/modulesOfHomePage/Attributes";
import Banner from "../modules/modulesOfHomePage/Banner";
import Companies from "../modules/modulesOfHomePage/Companies";
import Definitaion from "../modules/modulesOfHomePage/Definitaion";
import Guid from "../modules/modulesOfHomePage/Guid";
import Instruction from "../modules/modulesOfHomePage/Instruction";
import Restriction from "../modules/modulesOfHomePage/Restriction";


const HomePage = () => {

    return (

        <>

            <Banner />
            <Attributes/>
            <Definitaion />
            <Companies />
            <Instruction />
            <Guid />
            <Restriction />


        </>
    );
};

export default HomePage;