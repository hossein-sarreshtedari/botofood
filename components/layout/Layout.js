import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = ({children}) => {

    return (

        <div className={styles.container}>
            
            <div className={styles.mainContainer}>

                <header className={styles.header}>

                    <span className={styles.logo}><Link href={"/"}>BotoFood</Link></span>

                    <ul className={styles.headerMenu}>

                        <li><Link href={"/menu"}>Menu</Link></li>
                        <li><Link href={"/categorys"}>Categorys</Link></li>

                    </ul>


                </header>

                <div className={styles.mainContent}>

                    {children}

                </div>

            </div>


            <footer className={styles.footer}>

                <span>Next Js Project made By &copy; Hossein</span>

            </footer>

            
        </div>
    );
};

export default Layout;