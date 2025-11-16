import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0b14] text-white font-sans">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          Get Me a Chai
        </h1>
        <p className="text-gray-300 max-w-xl">
          A crowdfunding platform for creators to fund their projects.
        </p>
        <p className="text-gray-400 max-w-2xl">
          A place where your fans can buy you a chai. Unleash the power of your
          fans and get your projects funded.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="px-6 py-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition">
            Start Here
          </button>
          <button className="px-6 py-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition">
            Read More
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 w-3/4 mx-auto"></div>

      {/* Fans Section */}
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-12">
          Your Fans can buy you a Chai
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-12 px-6">
          <div className="flex flex-col items-center space-y-3">
            {/* <Image
              src="/chai.png"
              alt="Fans help"
              width={80}
              height={80}
              className="rounded-full bg-slate-700 p-3"
            /> */}
            <p className="font-semibold">Fans want to help</p>
            <p className="text-gray-400 text-sm max-w-xs">
              Your fans are available to support you
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            {/* <Image
              src="/coin.png"
              alt="Fans contribute"
              width={80}
              height={80}
              className="rounded-full bg-slate-700 p-3"
            /> */}
            <p className="font-semibold">Fans want to contribute</p>
            <p className="text-gray-400 text-sm max-w-xs">
              Your fans are willing to contribute financially
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            {/* <Image
              src="/collab.png"
              alt="Fans collaborate"
              width={80}
              height={80}
              className="rounded-full bg-slate-700 p-3"
            /> */}
            <p className="font-semibold">Fans want to collaborate</p>
            <p className="text-gray-400 text-sm max-w-xs">
              Your fans are ready to collaborate with you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
