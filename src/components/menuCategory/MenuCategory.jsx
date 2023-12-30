import Link from "next/link";
import styles from "./menuCategory.module.css";

const MenuCategory = ({ category }) => {
  const categoryClass = styles[category];
  const categoryContent = category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <Link
      href={`/blog?cat=${category}`}
      className={`${styles.categoryItem} ${categoryClass}`}
    >
      {categoryContent}
    </Link>
  );
};

export default MenuCategory;
