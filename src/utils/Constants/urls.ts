// TODO This version should be synchronized with https://ddragon.leagueoflegends.com/api/versions.json later
const realmVersion = "11.2.1";
const apiStaticUrl = {
  data:
    "http://ddragon.leagueoflegends.com/cdn/" + realmVersion + "/data/en_US",
  img: "http://ddragon.leagueoflegends.com/cdn/" + realmVersion + "/img",
  noVersionImg: "http://ddragon.leagueoflegends.com/cdn/img",
};
const apiUrl = "https://la1.api.riotgames.com/lol";
const apiUrl2 = "https://americas.api.riotgames.com/lol";
const LeagueOfLegendsUrl =
  "https://www.leagueoflegends.com/es-mx/?utm_medium=card1%2Bwww.leagueoflegends.com&utm_source=riotbar";
const githubBranchRepository =
  "https://github.com/Globant-UI-Engineering/Bootcamp/tree/JuanDavidRamirezFinalProject";
const riotGamesDevelopers = "https://developer.riotgames.com/";

export {
  apiStaticUrl,
  apiUrl,
  apiUrl2,
  LeagueOfLegendsUrl,
  githubBranchRepository,
  riotGamesDevelopers,
};
