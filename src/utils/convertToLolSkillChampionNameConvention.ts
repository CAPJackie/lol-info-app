export const convertToLolSkillChampionNameConvention: (
  name: string,
) => string = (name) => {
  return name.toLowerCase().replaceAll(" ", "").replace(/[^a-z0-9]/g, "");
};
