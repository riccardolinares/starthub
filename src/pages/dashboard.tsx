import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

import Layout from "@/components/templates/Layout";
import Panel from "@/components/templates/Panel";

const HomePage = () => {
  return (
    <Layout>
      <Panel>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
      </Panel>
    </Layout>
  );
};

// Get Server Side Props
export const getServerSideProps = async (context: any) => {
  // Check if the user is logged in
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default HomePage;
