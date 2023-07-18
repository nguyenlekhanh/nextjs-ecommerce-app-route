"use client";

import { useEffect } from "react";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import {
    UserButton
  } from "@clerk/nextjs";

const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.oisOpen);

    useEffect(() => {
        if(!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen]);

    return (
      <div className="p-4">
        <UserButton />
        Root page
      </div>
    )
  }

export default SetupPage;