import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className="font-roboto text-amber-50">Main content</p>
      </main>
      <footer className={styles.footer}>
        <p className="font-roboto text-amber-50">Footer content</p>
      </footer>
    </div>
  );
}
