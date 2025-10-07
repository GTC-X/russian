'use client'
import { useState, useMemo } from "react";
import { Dialog } from "@headlessui/react";
import { FaPlay } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useTranslations } from "next-intl";
import Hero from "../components/common/Hero";
const toEmbedUrl = (url) => {
  try {
    const u = new URL(url);
    // https://www.youtube.com/watch?v=UE7r7u8Iqsc  ->  UE7r7u8Iqsc
    const id =
      u.searchParams.get("v") ||
      // also support youtu.be/VIDEO_ID
      (u.hostname.includes("youtu.be") ? u.pathname.slice(1) : "");
    if (!id) return url;
    return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
  } catch {
    return url;
  }
};

const AccountTutorialPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const t = useTranslations("tutorialVideo.bannerSection");
   const t2 = useTranslations("metaData.tutorialVideo");

   const videos = [
    {
      id: 1,
      title: "How to Open Account in GTCFX Portal",
      thumbnail: "/videos/account0.webp",
      url: "https://www.youtube.com/watch?v=UE7r7u8Iqsc",
    },
    {
      id: 2,
      title: "How to Verify Your GTCFX Account",
      thumbnail: "videos/account1.webp",
      url: "https://www.youtube.com/watch?v=p4t7UKNjGm8",
    },
     {
      id: 3,
      title: "How to Deposit Funds into Your Account",
      thumbnail: "videos/account2.webp",
      url: "https://www.youtube.com/watch?v=p4t7UKNjGm8",
    },
    
     {
      id: 6,
      title: "How to Use the GTC Help Desk",
      thumbnail: "videos/account5.webp",
      url: "https://www.youtube.com/watch?v=yAAgi_Dibck",
    },
     {
      id: 7,
      title: "How to Become an IB with GTCFX",
      thumbnail: "videos/account6.webp",
      url: "https://www.youtube.com/watch?v=9fxvZqwxhdA",
    },
     {
      id: 8,
      title: "How to Apply for a MAM Account",
      thumbnail: "videos/account7.webp",
      url: "https://www.youtube.com/watch?v=EguGmw_Vamk",
    },
  ];
  const embedUrl = useMemo(
    () => (selectedVideo ? toEmbedUrl(selectedVideo.url) : ""),
    [selectedVideo]
  );

  return (
    <>
         <Hero 
              title={t("title")}
               description={t2("des")}
            />
                <div className="container mx-auto py-14">
      <div className="text-center mb-10">
        <h2 className="HeadingH2 font-medium text-primary">{t("title")}</h2>
        <p className="text">{t("des")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <button
            type="button"
            key={video.id}
            className="relative cursor-pointer group overflow-hidden rounded-lg shadow-md text-left"
            onClick={() => setSelectedVideo(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-80 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <FaPlay className="w-12 h-12 text-white" />
            </div>
            <p className="text-center text-sm md:text-lg font-semibold mt-2 py-5">{video.title}</p>
          </button>
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        className="fixed inset-0 z-50"
      >
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl p-4">
            <button
              className="absolute top-2 right-2 text-white z-50 bg-red-700 rounded-full"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close"
            >
              <IoCloseCircleSharp className="w-7 h-7" />
            </button>

            {selectedVideo && (
              <div className="w-full">
                {/* 16:9 box */}
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full rounded"
                    src={embedUrl}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <p className="mt-3 font-semibold text-sm md:text-lg text-gray-800">{selectedVideo.title}</p>
              </div>
            )}
          </div>
        </div>
      </Dialog>
    </div>
    </>

  );
};

export default AccountTutorialPage;
