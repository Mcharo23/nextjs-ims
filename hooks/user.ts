"use server";
import { UserType } from "@/db/schema";
import { createUser } from "@/service/user";

const useUserHooks = () => {
  const create = async (data: UserType): Promise<{ detail: string }> => {
    return await createUser(data);
  };

  return { create };
};

export default useUserHooks;
