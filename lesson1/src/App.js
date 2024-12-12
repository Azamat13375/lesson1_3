import style from './App.module.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import TodosPage from "./pages/TodosPage/TodosPage";

function App() {
  return (
      <div className={style.App}>
          <h2>---------- Main Page ------------</h2>
          <MainPage/>
          <h2>---------- About Page ------------</h2>
          <AboutPage/>
          <h2>---------- Todos Page ------------</h2>
          <TodosPage />
      </div>
  );
}

export default App;
