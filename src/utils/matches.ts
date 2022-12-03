import type { Match } from "../redux/features/predictions/predictionsTypes";

export const createMatchesList = (matches: string[]): Match[] => {
  const matchesList: Match[] = [];
  for (const match of matches) {
    const label = match.split("-").join(" ");
    matchesList.push({ label, value: match });
  }

  return matchesList;
};

export const matches = [
  "Qatar vs Ecuador-Nov 20",
  "England vs Iran-Nov 21",
  "USA vs Wales-Nov 21",
  "Senegal vs Netherlands-Nov 21",
  "Argentina vs Saudi Arabia-Nov 22",
  "Mexico vs Poland-Nov 22",
  "Denmark vs Tunisia-Nov 22",
  "France vs Australia-Nov 22",
  "Morocco vs Croatia-Nov 23",
  "Spain vs Costa Rica-Nov 23",
  "Germany vs Japan-Nov 23",
  "Belgium vs Canada-Nov 23",
  "Switzerland vs Cameroon-Nov 24",
  "Portugal vs Ghana-Nov 24",
  "Uruguay vs South Korea-Nov 24",
  "Brazil vs Serbia-Nov 24",
  "Wales vs Iran-Nov 25",
  "Netherlands vs Ecuador-Nov 25",
  "Qatar vs Senegal-Nov 25",
  "England vs USA-Nov 25",
  "Tunisia vs Australia-Nov 26",
  "France vs Denmark-Nov 26",
  "Poland vs Saudi Arabia-Nov 26",
  "Argentina vs Mexico-Nov 26",
  "Japan vs Costa Rica-Nov 27",
  "Croatia vs Canada-Nov 27",
  "Belgium vs Morocco-Nov 27",
  "Cameroon vs Serbia-Nov 28",
  "Brazil vs Switzerland-Nov 28",
  "South Korea vs Ghana-Nov 28",
  "Portugal vs Uruguay-Nov 28",
  "Ecuador vs Senegal-Nov 29",
  "Iran vs USA-Nov 29",
  "Netherlands vs Qatar-Nov 29",
  "Wales vs England-Nov 29",
  "Tunisia vs France-Nov 30",
  "Poland vs Argentina-Nov 30",
  "Australia vs Denmark-Nov 30",
  "Saudi Arabia vs Mexico-Nov 30",
  "Croatia vs Belgium-Dic 1",
  "Japan vs Spain-Dic 1",
  "Canada vs Morocco-Dic 1",
  "Costa Rica vs Germany-Dic 1",
  "South Korea vs Portugal-Dic 2",
  "Serbia vs Switzerland-Dic 2",
  "Ghana vs Uruguay-Dic 2",
  "Cameroon vs Brazil-Dic 2",
  "Netherlands vs USA-Dic 3",
  "Argentina vs Australia-Dic 3",
  "France vs Poland-Dic 4",
  "England vs Senegal-Dic 4",
  "Japan vs Croatia-Dic 5",
  "Brazil vs South Korea-Dic 5",
  "Morocco vs Spain-Dic 6",
  "Portugal vs Switzerland-Dic 6",
];
