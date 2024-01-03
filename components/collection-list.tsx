import { currentUser } from "@clerk/nextjs";
import prisma from "@/lib/db";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import CreateCollectionButton from "./ui/create-collection-button";
import CeollectionCard from "./collection-card";

export async function CollectionList() {
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
