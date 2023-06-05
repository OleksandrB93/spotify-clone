"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModall from "@/hooks/useUploadModal";
import useOnPlay from "@/hooks/useOnPlay";

import { Song } from "@/types";
import MediaItem from "./MediaItem";

interface LibraryProps {
  songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModall();
  const { user } = useUser();

  const onPlay = useOnPlay(songs);

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
      <div className="flex  flex-col qap-y-2 mt-4 px-3">
        {songs.map((item) => (
          <MediaItem
            onClick={(id: string) => {
              onPlay(id);
            }}
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
