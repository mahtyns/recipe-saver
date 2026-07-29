import Image from "next/image";
import styles from "./page.module.css";
import { IngredientList } from "./components/ingredients/ingredient-list/IngredientList";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <IngredientList mainClass={"ingredients"} />
      </main>
    </div>
  );
}
