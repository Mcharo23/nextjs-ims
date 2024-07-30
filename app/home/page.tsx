import { auth } from "@/auth";
import WhoAmIAPI from "@/components/WhoAmIAPI";
import WhoAmIRSC from "@/components/WhoAmIRSC";
import WhoAmIServerAction from "@/components/WhoAmIServerAction";
import React from "react";

const HomePage = async () => {
  const session = await auth();

  async function onGetUserAction() {
    "use server";
    const session = await auth();
    return session?.user?.name ?? null;
  }

  return (
    <main>
      <h1 className="text-3xl mb-5">Test route</h1>
      <div>User: {session?.user?.name}</div>
      <WhoAmIServerAction onGetUserAction={onGetUserAction} />
      <WhoAmIAPI />
      <WhoAmIRSC />
    </main>
  );
};

export default HomePage;
