import { TemaProvider } from "./src/context/TemaContext";
import { AutenticacaoProvider } from "./src/context/AutenticacaoContext";
import Rotas from "./src/rotas";

export default function App() {
  return (
    <TemaProvider>
      <AutenticacaoProvider>
        <Rotas />
      </AutenticacaoProvider>
    </TemaProvider>
  );
}