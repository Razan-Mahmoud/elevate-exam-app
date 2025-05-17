// "use server";

// import { JSON_HEADER } from "@/lib/constants/api.constants";
// import { RegisterFields } from "@/lib/schemes/auth.schema";
// import { ApplicationUser } from "@/lib/types/auth";
// import { decode } from "next-auth/jwt";
// import { cookies } from "next/headers";

// export const registerActions = async (registrationFields: RegisterFields) => {
//   // Get Token
//   const authCookie = cookies().get("next-auth.session-token")?.value;
//   const token = await decode({
//     secret: process.env.NEXTAUTH_SECRET!,
//     token: authCookie,
//   });

//   const response = await fetch(`${process.env.API}/auth/signup`, {
//     method: "POST",
//     body: JSON.stringify(registrationFields),
//     headers: {
//       Authorization: `Bearer ${token?.token}`,
//       ...JSON_HEADER,
//     },
//   });
//   const payload: APIResponse<ApplicationUser> = await response.json();
//   return payload;
// };
