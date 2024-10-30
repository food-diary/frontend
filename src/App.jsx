import { Routes, Route } from "react-router-dom";
import { Header, Home, Diary, Registration, Login } from "./components";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
