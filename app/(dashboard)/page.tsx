import CeollectionCard from "@/components/collection-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import CreateCollectionButton from "@/components/ui/create-collection-button";
import { Skeleton } from "@/components/ui/skeleton";
import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { Suspense } from "react";
export default async function Home() {
  return (
    <>
      <CollectionList />
    </>
  );
}

async function WelcomMsg() {
  const user = await currentUser();

  if (!user) {
    return <div className="text-center">You are not signed in!</div>;
  }

  return (
    <div className="w-full mb-12 flex items-center justify-center">
      <h1 className="text-xl md:text-4xl font-bold tracking-wide">
        Welcome, {user.firstName} {user.lastName}
      </h1>
    </div>
  );
}

function WelcomeMsgFallback() {
  return (
    <div className="flex w-full mb-12">
      <h1 className="text-4xl font-bold">
        <Skeleton className="w-[180px] h-[36px]" />
        <Skeleton className="w-[150px] h-[36px]" />
      </h1>
    </div>
  );
}

async function CollectionList() {
  const user = await currentUser();
  const collections = await prisma.collection.findMany({
    include: {
      tasks: true,
    },
    where: {
      userId: user?.id,
    },
  });

  console.log(collections);

  if (collections.length === 0) {
    return (
      <div className="flex flex-col gap-5">
        <Alert>
          <AlertTitle>There are no collections yet!</AlertTitle>
          <AlertDescription>
            Create a collection to get started
          </AlertDescription>
        </Alert>
        <CreateCollectionButton />
      </div>
    );
  }

  return (
    <>
      <CreateCollectionButton />
      {collections.map((collection) => (
        <CeollectionCard key={collection.id} collection={collection} />
      ))}
    </>
  );
}
