import { Container, Grid } from "@mui/material";
import { Title, Text, HighlightedText } from "../styles";

export function StrengthTraining() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Title>Treinos de força:</Title>
          <Text>
            Os treinos de força na academia são uma das práticas mais eficazes
            para melhorar o desempenho físico, aumentar a massa muscular,
            fortalecer o corpo e promover a saúde geral. Este tipo de
            treinamento é focado em exercícios que visam o desenvolvimento da
            força muscular e a resistência, através da utilização de sobrecargas
            progressivas, como pesos livres, máquinas de musculação, elásticos
            de resistência e até o peso do próprio corpo.
          </Text>
        </Grid>
        <Grid item md={12}>
          <Title>Estrutura de um Treino de Força</Title>
        </Grid>
        <Grid item md={10}>
          <Text>
            <HighlightedText>Aquecimento:</HighlightedText> O aquecimento é
            crucial para preparar o corpo para o esforço, aumentando a
            temperatura corporal, ativando a circulação sanguínea e prevenindo
            lesões. Movimentos dinâmicos, como polichinelos e agachamentos sem
            peso, ajudam a ativar os músculos antes de iniciar o treinamento de
            força.
          </Text>
          <Text>
            <HighlightedText>Seleção de Exercícios:</HighlightedText> O treino
            de força pode ser dividido em exercícios multiarticulares
            (compostos) e uniarticulares (isolados). Os exercícios compostos,
            como agachamento, levantamento terra e supino, envolvem várias
            articulações e músculos ao mesmo tempo, sendo eficazes para ganhos
            de força e massa muscular. Já os exercícios isolados, como a rosca
            direta e a elevação lateral, focam em músculos específicos e são
            usados para complementar o treino.
          </Text>
          <Text>
            <HighlightedText>Séries e Repetições:</HighlightedText> No treino de
            força, a quantidade de séries e repetições varia conforme o
            objetivo. Para o desenvolvimento de força máxima, geralmente se
            utilizam poucas repetições (entre 1 a 5) com cargas muito elevadas.
            Para a hipertrofia muscular, o comum é realizar entre 6 a 12
            repetições com cargas moderadas a altas. A quantidade de séries pode
            variar de 3 a 5 por exercício.
          </Text>
          <Text>
            <HighlightedText>Descanso entre Séries:</HighlightedText> O tempo de
            descanso entre séries é um fator determinante para o estímulo de
            força e hipertrofia. Descansos mais longos (2 a 5 minutos) são
            indicados para treinos de força máxima, enquanto descansos mais
            curtos (30 segundos a 1 minuto) são recomendados para treinos de
            resistência e hipertrofia.
          </Text>
          <Text>
            <HighlightedText>Progressão de Carga:</HighlightedText> A sobrecarga
            progressiva é um princípio fundamental do treino de força. Isso
            significa que, para continuar obtendo ganhos de força e massa
            muscular, é necessário aumentar gradualmente o peso, a quantidade de
            repetições ou a dificuldade dos exercícios ao longo do tempo.
          </Text>
        </Grid>
        <Grid item md={12}>
          <Title>Benefícios dos Treinos de Força</Title>
        </Grid>
        <Grid item md={10}>
          <Text>
            <HighlightedText>
              Aumento da Massa Muscular (Hipertrofia):
            </HighlightedText>{" "}
            O principal objetivo para muitos praticantes é o aumento dos
            músculos. Ao sobrecarregar o músculo com exercícios progressivos,
            ocorrem microlesões nas fibras musculares, que são reparadas durante
            o período de descanso, resultando em um aumento do tamanho muscular.
          </Text>
          <Text>
            <HighlightedText>Melhora da Força Física:</HighlightedText> O
            treinamento de força permite que os músculos se adaptem a cargas
            maiores com o tempo, aumentando significativamente a capacidade de
            levantar mais peso e executar tarefas físicas cotidianas com maior
            facilidade.
          </Text>
          <Text>
            <HighlightedText>
              Fortalecimento dos Ossos e Articulações:
            </HighlightedText>{" "}
            Além de desenvolver os músculos, o treino de força também fortalece
            ossos, tendões e ligamentos, ajudando a prevenir lesões, osteoporose
            e dores articulares.
          </Text>
          <Text>
            <HighlightedText>Melhora da Postura e Equilíbrio:</HighlightedText>{" "}
            Com o fortalecimento dos músculos de suporte, como abdômen, costas e
            pernas, o praticante de treino de força também aprimora sua postura
            e equilíbrio, o que é essencial para evitar dores crônicas e lesões.
          </Text>
          <Text>
            <HighlightedText>
              Perda de Gordura e Melhora do Metabolismo:
            </HighlightedText>{" "}
            Embora o treino de força não seja o foco principal para a perda de
            gordura, ele auxilia no aumento do metabolismo basal. Isso ocorre
            porque a massa muscular exige mais energia do corpo para ser
            mantida, fazendo com que o corpo queime mais calorias em repouso.
          </Text>
        </Grid>
        <Grid item md={12}>
          <Title>Considerações Finais</Title>
        </Grid>
        <Grid item md={10}>
          <Text>
            Os treinos de força são indispensáveis para quem busca melhorar o
            desempenho físico e a saúde. No entanto, é importante ter
            acompanhamento profissional para garantir que os exercícios sejam
            executados corretamente, minimizando o risco de lesões e maximizar
            os resultados. Além disso, uma alimentação adequada e o descanso são
            essenciais para a recuperação muscular e o sucesso no treinamento de
            força.
          </Text>
        </Grid>
      </Grid>
    </Container>
  );
}
