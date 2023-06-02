"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModall from "@/hooks/useUploadModal";

const Library = () => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModall();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    //TODO: Check for subcscription
    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className=" flex items-center justify-beetwen px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-300" size={26} />
          <p className="text-neutral-300 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          className="text-neutral-300 ml-auto cursor-pointer hover:text-white transition"
          onClick={onClick}
          size={20}
        />
      </div>
      <div className="flex  flex-col qap-y-2 mt-4 px-3">List Songs</div>
    </div>
  );
};

export default Library;
