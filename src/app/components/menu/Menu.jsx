import styles from "./menu.module.css";
import Link from "next/link";
import MenuPosts from "@/app/components/menuPosts/menuPosts";
import MenuCategory from "@/app/components/menuCategory/MenuCategory";

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                <MenuPosts withImage={false} category="travel" user="John A" date="11-2-2023"/>
                <MenuPosts withImage={false} category="culture" user="John B" date="11-2-2023"/>
                <MenuPosts withImage={false} category="food" user="John C" date="11-2-2023"/>
                <MenuPosts withImage={false} category="fashion" user="John D" date="11-2-2023"/>
            </div>

            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categoryList}>
                <MenuCategory category="style"/>
                <MenuCategory category="fashion"/>
                <MenuCategory category="food"/>
                <MenuCategory category="travel"/>
                <MenuCategory category="culture"/>
                <MenuCategory category="coding"/>
            </div>

            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            <div className={styles.items}>
                <MenuPosts withImage={true} category="travel" user="John A" date="11-2-2023"/>
                <MenuPosts withImage={true} category="culture" user="John B" date="12-2-2023"/>
                <MenuPosts withImage={true} category="food" user="John C" date="3-2-2023"/>
                <MenuPosts withImage={true} category="fashion" user="John D" date="5-2-2023"/>
            </div>
        </div>
    );
};

export default Menu;