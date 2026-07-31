import Image from "next/image";
import styles from "./page.module.css";
import { IngredientList } from "./components/ingredients/ingredient-list/IngredientList";
import { MainContainer } from "./layouts/components/MainContainer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <MainContainer mainClass="recipes" />
      </main>
    </div>
  );
}
