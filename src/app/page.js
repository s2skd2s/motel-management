import Image from "next/image";
import styles from "./page.module.css";
import Filterbar from "@/components/filterbar/Filterbar";
import PostListSection from "@/components/section/PostListSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <Filterbar></Filterbar>
      <PostListSection></PostListSection>
    </main>
  );
}
