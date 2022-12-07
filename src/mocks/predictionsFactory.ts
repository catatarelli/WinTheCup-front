import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import type { PredictionStructure } from "../redux/features/predictions/predictionsTypes";

const predictionFactory = Factory.define<PredictionStructure>(() => ({
  match: "Argentina vs England",
  goalsTeam1: faker.datatype.number(9),
  goalsTeam2: faker.datatype.number(9),
  redCards: faker.datatype.number(10),
  yellowCards: faker.datatype.number(10),
  penalties: faker.datatype.number(10),
  picture: require("../../assets/argentinafans.jpg"),
  backupPicure: faker.image.sports(),
  id: faker.datatype.string(),
  createdBy: faker.datatype.string(),
}));

export const getRandomPrediction = (): PredictionStructure =>
  predictionFactory.build();

export const getRandomPredictionsList = (
  number: number
): PredictionStructure[] => predictionFactory.buildList(number);
