import { DarkModeProvider } from "@rbnd/react-dark-mode";
import "./App.css";
import { MainLayout } from "./layouts/MainLayout.tsx";
import { Main } from "./components/Main.tsx";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";

function App() {
  return (
    <>
      <DarkModeProvider>
        <LanguageProvider>
          <MainLayout>
            <Main />
          </MainLayout>
        </LanguageProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
