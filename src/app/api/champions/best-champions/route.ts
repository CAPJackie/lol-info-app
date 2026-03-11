export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return Response.json({
    highestWinRate: { champion: "Lee Sin", rate: 32.9 },
    mostBanned: { champion: "Ivern", rate: 55 },
    mostPopular: { champion: "Xayah", rate: 52.5 },
  });
}
