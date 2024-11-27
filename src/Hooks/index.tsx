export interface TypeTraining {
  id?: string;
  // costas
  HighPull?: string;
  SupinatedHighGripPulldown?: string;
  TrianglePull?: string;
  NeutralGripHighPull?: string;
  InclineRow?: string;
  RowingTriangleMachine?: string;
  InclineLeverRow?: string;
  RowingMachine?: string;
  InclineRowSupinatedGrip?: string;
  RowingSupinatedGripMachine?: string;
  Saw?: string;
  Pulldown?: string;
  // biceps
  DumbbellCurl?: string;
  WBarCurl?: string;
  HammerThread?: string;
  InclineDumbbellCurl?: string;
  PreacherBench?: string;
  BenchPress?: string;
  InclineBenchPress?: string;
  DeclineBenchPress?: string;
  HighPulleyCross?: string;
  CrossMediaPulley?: string;
  CrossLowPulley?: string;
  Crucifix?: string;
  LeaningCrucifix?: string;
  // perna
  ExtensionChair?: string;
  FlexorChair?: string;
  FlexingTable?: string;
  LegPress?: string;
  AbductorChair?: string;
  AdductorChair?: string;
  Bugaro?: string;
  Squat?: string;
  Hack?: string;
  Stiff?: string;
  Earth?: string;
  Lunge?: string;
  PelvicLift?: string;
  // ombros
  LateralRaise?: string;
  Development?: string;
  LateralElevationPulley?: string;
  FrontElevation?: string;
  FrontPulleyRaise?: string;
  InvertedCrucifix?: string;
  // triceps
  TricepsBar?: string;
  TricepsRope?: string;
  French?: string;
  TricepsForehead?: string;
  TricepsBench?: string;
  // descanço
  rest?: string;
}

export interface FormData {
  [key: string]: any;
}

export const removeUndefinedFields = (obj: FormData) => {
  const cleanedObj: FormData = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) {
      cleanedObj[key] = obj[key];
    }
  });
  return cleanedObj;
};

export const workoutWeek = (trainingData: TypeTraining[]): string => {
  const categories = new Set<string>();

  for (const training of trainingData) {
    if (
      training.HighPull === "Puxada Alta" ||
      training.SupinatedHighGripPulldown === "Puxada Alta Pegada Supinada" ||
      training.TrianglePull === "Puxada com Triangulo" ||
      training.NeutralGripHighPull === "Puxada Alta Pegada Neutra" ||
      training.InclineRow === "Remada Inclinada" ||
      training.RowingTriangleMachine === "Remada com Triangulo na Maquina" ||
      training.InclineLeverRow === "Remada Cavalinho" ||
      training.RowingMachine === "Remada na Maquina" ||
      training.InclineRowSupinatedGrip === "Remada Inclinada Pegada Supinada" ||
      training.RowingSupinatedGripMachine ===
      "Remada na Maquina Pegada Supinada" ||
      training.Saw === "Serrote" ||
      training.Pulldown === "Pulldown"
    ) {
      categories.add("Costas");
    }
    if (
      training.BenchPress === "Supino Reto" ||
      training.InclineBenchPress === "Supino Inclinado" ||
      training.DeclineBenchPress === "Supino Declinado" ||
      training.HighPulleyCross === "Cross Polia Alta" ||
      training.CrossMediaPulley === "Cross Polia Media" ||
      training.CrossLowPulley === "Cross Polia Baixar" ||
      training.Crucifix === "Crucifixo na Maquina" ||
      training.LeaningCrucifix === "Crucifixo inclinado com Halters"
    ) {
      categories.add("Peito");
    }
    if (
      training.DumbbellCurl === "Rosca com Halteres" ||
      training.WBarCurl === "Rosca com Barra W" ||
      training.HammerThread === "Rosca Martelo" ||
      training.InclineDumbbellCurl === "Rosca com Halteres Inclinado" ||
      training.PreacherBench === "Banco Scott"
    ) {
      categories.add("Biceps");
    }
    if (
      training.TricepsBar === "Triceps Barra" ||
      training.TricepsRope === "Triceps Corda" ||
      training.French === "Francês" ||
      training.TricepsForehead === "Triceps Testa" ||
      training.TricepsBench === "Triceps no Banco"
    ) {
      categories.add("Triceps");
    }
    if (
      training.LateralRaise === "Elevação Lateral" ||
      training.Development === "Desenvolvimento" ||
      training.FrontElevation === "Elevação Frontal" ||
      training.LateralElevationPulley === "Elevação Lateral na Polia" ||
      training.FrontPulleyRaise === "Elevação Frontal na Polia" ||
      training.InvertedCrucifix === "Cruxifixo Invertido"
    ) {
      categories.add("Ombro");
    }
    if (
      training.ExtensionChair === "Cadeira Extension" ||
      training.FlexorChair === "Cadeira Flexora" ||
      training.FlexingTable === "Mesa Flexora" ||
      training.LegPress === "Leg Press" ||
      training.AbductorChair === "Cadeira Abdutora" ||
      training.AdductorChair === "Cadeira Adutora" ||
      training.Bugaro === "Bugaro" ||
      training.Squat === "Agachamento" ||
      training.Hack === "Agachamento Hack" ||
      training.Stiff === "Stiff" ||
      training.Earth === "Terra" ||
      training.Lunge === "Afundo" ||
      training.PelvicLift === "Elevação Pélvica"
    ) {
      categories.add("Pernas");
    }
    if (training.rest === "Descansar") {
      categories.add("Dia de Descanço");
    }
  }

  return categories.size > 0
    ? Array.from(categories).join(" e ")
    : "Monte seu treino semanal";
}; 