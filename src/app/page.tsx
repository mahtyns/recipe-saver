import { MainContainer } from "./layouts/components/MainContainer";

const mainClass = "recipes"

export default function Home() {
  return (
    <div>
      <main>
        <MainContainer mainClass={mainClass} />
      </main>
    </div>
  );
}
