import { db } from "@/db/db";
import { UserTable, UserType } from "@/db/schema";

export const createUser = async (
  data: UserType
): Promise<{ detail: string }> => {
  try {
    const user = {
      userName: data.userName,
      name: data.name,
      password: data.password,
      email: data.email,
    };

    await db.insert(UserTable).values(user);

    return { detail: "User created successfully." };
  } catch (error) {
    if (error instanceof Error) {
      return { detail: `Error: ${error.message}` };
    } else {
      return { detail: "An unexpected error occurred." };
    }
  }
};
