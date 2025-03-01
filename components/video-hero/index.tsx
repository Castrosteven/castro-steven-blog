"use client";

export default function VideoHero() {
  return (
    <div className="mt-16">
      <section className="relative bg-gray-100 pt-20 pb-20 flex p-4 h-full  justify-center items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="container mx-auto text-left flex flex-col gap-12 md:pl-24 md:pr-24 relative z-10 text-white opacity-100">
          <h1 className="text-6xl font-semibold animate-fadeIn">
            From Code to Cloud: AI, Full Stack, and DevOps Done Right
          </h1>
          <h2 className="text-lg font-sans animate-fadeIn delay-75">
            Deep dives, tutorials, and insights on AI, Full Stack Development,
            DevOps, and Cloud Computing.
          </h2>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out;
        }
        .delay-1s {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
