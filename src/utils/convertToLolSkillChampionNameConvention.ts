export const convertToLolSkillChampionNameConvention: (
  name: string,
) => string = (name) => {
  return name.toLowerCase().replaceAll(" ", "");
};
