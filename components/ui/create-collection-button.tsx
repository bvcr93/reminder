"use client";
import React, { useState } from "react";
import { Button } from "./button";
import CreateCollectionSheet from "../create-colletion-sheet";

function CreateCollectionBtn() {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (open: boolean) => setOpen(open);

  return (
    <div className="w-full my-5 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px]">
      <Button
        variant={"secondary"}
        className=" w-full dark:bg-neutral-950 text-slate-200"
        onClick={() => setOpen(true)}
      >
        Create collection
      </Button>
      <CreateCollectionSheet open={open} onOpenChange={handleOpenChange} />
    </div>
  );
}

export default CreateCollectionBtn;
