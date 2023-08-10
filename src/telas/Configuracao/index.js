import { Text, View, Switch } from 'react-native';
import { estilo } from './estilos';
import { useState, useContext } from 'react';
import { TemaContext } from "../../context/TemaContext";

export default function Configuracao({ navigation }) {
  const [estado, setEstado] = useState(true);
  const { temaAtual, setTemaAtual } = useContext(TemaContext);

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Configuração</Text>

      <View style={estilo.inputArea}>
      <Text style={estilo.subtitulo}>Tema: Escuro</Text>
      <Switch
        onValueChange={() => setEstado(!estado)}
        value={estado}
      />
      </View>
    </View>
  );
}

