import styles from "@/styles/pages/index.module.css";
import { Carousel } from "@/components/Carousel";
import { Content } from "@/components/Content";
import { StatusBar } from "@/components/StatusBar";

export default function Home() {
  return (
    <div className={styles.mainScreen}>
      <StatusBar />
      <Carousel />
      <Content />
    </div>
  )
}
