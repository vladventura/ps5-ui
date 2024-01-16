import styles from "@/styles/components/TopBar/index.module.css";
import { PageMode } from "./PageMode";
import { StatusBar } from "./StatusBar";

export const TopBar = () => {
    return <div className={styles.topBarContainer}>
        <PageMode />
        <StatusBar />
    </div>
};