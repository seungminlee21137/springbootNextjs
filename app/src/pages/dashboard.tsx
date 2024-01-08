import { getSession, useSession } from "next-auth/react";
// import { getSession } from 'next-auth/client';

import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function DashboardIndex() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="container max-w-md px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      <p className="mt-2 mb-4 text-gray-700">
        Congrats, you can view this page!
      </p>

      <div className="p-4 bg-gray-500 rounded shadow">
        <p className="text-white">User: {session?.user?.email}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const userSession = await getSession(context);

  if (userSession?.user?.email) {
    return {
      props: {
        session: await getSession(context),
      },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/signin",
      },
    };
  }
}
