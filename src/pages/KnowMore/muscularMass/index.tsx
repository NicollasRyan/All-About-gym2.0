import { Container, Grid } from "@mui/material";
import { Title, Text } from "./styles";

export function MuscularMass() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Title>
                        Ganho de massa muscular:
                    </Title>
                    <Text>
                        na academia requer uma abordagem abrangente e detalhada que envolve quatro pilares principais: exercícios, alimentação, descanso e suplementação.
                    </Text>
                </Grid>
                <Grid item md={12}>
                    <Title>Exercícios</Title>
                </Grid>
                <Grid item md={10}>
                    <Text>
                        essencial, focando em exercícios compostos que trabalham múltiplos grupos musculares simultaneamente. Exemplos de exercícios compostos incluem agachamentos, levantamento terra, supino, desenvolvimento militar e remada. Esses movimentos são fundamentais porque envolvem várias articulações e músculos, proporcionando um estímulo significativo para o crescimento muscular.
                    </Text>
                    <Text>
                        O treinamento de força, caracterizado pelo uso de cargas altas e baixas repetições (3-6 repetições), é crucial para estimular a síntese proteica e o crescimento muscular. Em contrapartida, o treinamento de hipertrofia utiliza cargas moderadas e repetições médias (8-12 repetições) para maximizar o volume de treino, resultando em aumento do tamanho muscular.
                    </Text>
                    <Text >
                        Variedade é chave no treino. Inclua exercícios isolados que focam em músculos específicos, ajudando a corrigir desequilíbrios musculares e promovendo um desenvolvimento mais equilibrado. Alterne entre diferentes exercícios e ângulos de movimento para garantir que todos os músculos sejam trabalhados de forma completa.
                    </Text >
                    <Text>
                        A progressão de carga é outro aspecto fundamental. Aumentar gradualmente o peso, o número de repetições ou o volume total do treino mantém os músculos desafiados, evitando a estagnação. Treinamentos de alta intensidade, como superséries, drop sets e treinos de intervalo de alta intensidade (HIIT), podem ser incorporados para aumentar a intensidade e a eficiência do treino, proporcionando um estímulo adicional para o crescimento muscular.
                    </Text>
                </Grid>
                <Grid item md={12}>
                    <Title>Alimentação</Title>
                </Grid>
                <Grid item md={10}>
                    <Text>
                        A alimentação é um pilar essencial no ganho de massa muscular. O consumo adequado de proteínas é fundamental para a reparação e crescimento muscular. Fontes de proteínas magras, como frango, peixe, ovos, carne magra, tofu, leguminosas e produtos lácteos, devem ser incluídas na dieta diária. As proteínas fornecem os aminoácidos necessários para a síntese proteica, o que é crucial para o desenvolvimento muscular.
                    </Text>
                    <Text>
                        Os carboidratos são igualmente importantes, pois fornecem a energia necessária para os treinos intensos. Prefira carboidratos complexos, como batata-doce, arroz integral, aveia e quinoa, que fornecem uma liberação de energia mais sustentada. As gorduras saudáveis também desempenham um papel importante, pois são necessárias para a produção de hormônios e a saúde geral. Inclua fontes de gorduras saudáveis como abacate, nozes, sementes, azeite de oliva e peixes gordos.                    </Text>
                    <Text >
                        Para ganhar massa muscular, é necessário consumir um excedente calórico, ou seja, ingerir mais calorias do que o corpo gasta diariamente. Essa abordagem fornece ao corpo a energia adicional necessária para suportar o crescimento muscular. Além disso, a hidratação adequada é crucial. Beber água suficiente ajuda a manter o corpo hidratado, o que é essencial para a recuperação muscular e o desempenho durante os treinos.
                    </Text >
                </Grid>
                <Grid item md={12}>
                    <Title>Descanso e Recuperação</Title>
                </Grid>
                <Grid item md={10}>
                    <Text>
                        O descanso e a recuperação são componentes vitais do processo de ganho de massa muscular. O sono de qualidade, com duração de 7-9 horas por noite, é necessário para permitir a recuperação e o crescimento muscular. Durante o sono, o corpo libera hormônios como o hormônio do crescimento, que são cruciais para a reparação e o crescimento muscular.
                    </Text>
                    <Text>
                        Dias de descanso são igualmente importantes. Incluir dias de descanso na rotina de treino ajuda a evitar o overtraining, que pode levar à fadiga, lesões e diminuição do desempenho. Permitir que os músculos se recuperem adequadamente entre os treinos é essencial para o crescimento muscular.
                    </Text>
                    <Text >
                        A prática de alongamentos e exercícios de mobilidade ajuda a prevenir lesões e melhorar a flexibilidade, o que pode melhorar o desempenho nos treinos e a qualidade do movimento. Alongar após o treino ajuda a aliviar a tensão muscular e promove a recuperação.
                    </Text >
                </Grid>
                <Grid item md={12}>
                    <Title>Suplementação</Title>
                </Grid>
                <Grid item md={10}>
                    <Text>
                        A suplementação pode ser uma ferramenta útil para complementar a dieta e apoiar o ganho de massa muscular. A proteína whey é uma das suplementações mais populares e eficazes para aumentar a ingestão de proteínas, especialmente pós-treino. A creatina é outra suplementação amplamente utilizada, conhecida por ajudar a aumentar a força e o volume muscular, promovendo a produção de ATP, a principal fonte de energia para os músculos durante exercícios de alta intensidade.
                    </Text>
                    <Text>
                        Os BCAAs (Aminoácidos de Cadeia Ramificada) podem ajudar na recuperação muscular e reduzir a fadiga durante os treinos, proporcionando uma fonte adicional de energia para os músculos. Multivitamínicos também podem ser benéficos para garantir que o corpo receba todos os micronutrientes necessários para a saúde geral e o crescimento muscular.
                    </Text>
                </Grid>
                <Grid item md={12}>
                    <Title>Planejamento e Acompanhamento</Title>
                </Grid>
                <Grid item md={10}>
                    <Text>
                        Para maximizar os resultados, é importante ter um plano de treino estruturado e adaptado às suas metas pessoais. Mantenha um diário de treino e alimentação para monitorar o progresso e fazer ajustes conforme necessário. Isso permite identificar o que está funcionando e onde pode haver necessidade de mudanças.
                    </Text>
                    <Text>
                        Considerar trabalhar com um treinador pessoal ou nutricionista pode proporcionar orientação especializada e otimizar os resultados. Esses profissionais podem ajudar a criar um plano personalizado que atenda às suas necessidades específicas e objetivos de ganho de massa muscular.
                    </Text>
                </Grid>
            </Grid>
        </Container>
    )
}