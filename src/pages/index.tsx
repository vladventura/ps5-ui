import styles from "@/styles/pages/index.module.css";
import { Carousel } from "@/components/Carousel";
import { Content } from "@/components/Content";
import { TopBar } from "@/components/TopBar";

export default function Home() {
  return (
    <div className={styles.mainScreen}>
      <TopBar />
      <Carousel />
      <Content />
    </div>
  )
}
