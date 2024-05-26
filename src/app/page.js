import Image from "next/image";
import styles from "./page.module.css";
import Filterbar from "@/components/filterbar/Filterbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Filterbar></Filterbar>
    </main>
  );
}
