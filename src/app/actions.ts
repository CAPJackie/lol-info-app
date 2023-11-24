"use server";

import { apiUrl } from "@/utils/Constants/urls";
import { concatApiKey } from "@/utils/api";

export async function callApiAction() {
  const response = await fetch(
    apiUrl + "/platform/v3/champion-rotations" + concatApiKey("?"),
  );
  console.log(await response.json());
}
