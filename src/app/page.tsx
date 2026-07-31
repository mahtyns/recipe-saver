import styles from "./page.module.css";
import { MainContainer } from "./layouts/components/MainContainer";

const mainClass = "recipes"

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <MainContainer mainClass={mainClass} />
      </main>
    </div>
  );
}
