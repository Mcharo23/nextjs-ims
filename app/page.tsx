import { auth } from "@/auth";
import Nav from "@/components/Nav";
import AuthButton from "@/components/ui/AuthButton.server";

const Home = async () => {
  const session = await auth();

  return (
    <main className="flex ">
      <Nav />
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <AuthButton />
    </main>
  );
};

export default Home;
