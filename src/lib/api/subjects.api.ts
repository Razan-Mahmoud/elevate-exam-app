import { getAuthHeader } from "../utils/auth-header";

export async function getAllSubjects() {
  const response = await fetch(`${process.env.API}/subjects`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<PaginatedResponse<{ subjects: Subjects[] }>> =
    await response.json();
  return payload;
}

// import { getServerSession } from "next-auth";
// import { JSON_HEADER } from "../constants/api.constants";
// import { authOptions } from "@/auth";

// export async function GetAllSubjects() {
//   // get token
//   const session = await getServerSession(authOptions);
//   console.log(session!.token);
//   const response = await fetch(`${process.env.API}/subjects`, {
//     method: "GET",
//     headers: {
//       ...JSON_HEADER,
//       token: session!.token,
//     },
//   });
//   const result: APIResponse<PaginatedResponse> = await response.json();
//   if ("code" in result) {
//     return {
//       success: false,
//       message: result.message,
//     };
//   } else {
//     return {
//       success: true,
//       subjects: result.subjects,
//     };
//   }
// }

// export async function GetSingleSubject(id?: string) {
//   // get token
//   const session = await getServerSession(authOptions);
//   console.log(session!.token);
//   const response = await fetch(`${process.env.API}/subjects/${id}`, {
//     method: "GET",
//     headers: {
//       ...JSON_HEADER,
//       token: session!.token,
//     },
//   });
//   const result: APIResponse<SingleSubjectResponse> = await response.json();
//   if ("code" in result) {
//     return {
//       success: false,
//       message: result.message,
//     };
//   } else {
//     return {
//       success: true,
//       subject: result,
//     };
//   }
// }
