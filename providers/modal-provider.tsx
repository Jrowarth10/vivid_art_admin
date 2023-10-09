"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  //if it in server side rendering, we will return null, to prevent a hydration error, as you can't use a client component
  if (!isMounted) {
    return null;
  }
  //if its not in server side rendering w return StoreModal
  return (
    <>
      <StoreModal />
    </>
  );
};
