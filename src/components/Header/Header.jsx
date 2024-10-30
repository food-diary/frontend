import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>🍽️</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/">Главная</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/diary">Дневник питания</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/registration">Регистрация</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/login">Вход</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
