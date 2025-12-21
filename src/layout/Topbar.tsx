import { Search, BellDotIcon } from "lucide-react";

export default function Topbar() {
  return (
    <nav className="w-full px-8 py-3 bg-[#080C16] border-b border-b-white/15">
      <div className="flex justify-between">
        {/* searchBox */}
        <div className="focus flex gap-3 items-center flex-row outline text-white placeholder:text-gray-400 px-4 outline-white/15 bg-[#0F131F] rounded-xl w-92 py-2">
          <Search size={18} color="white" />
          <input
            className="outline-none w-full"
            type="text"
            name="searchBox"
            id="searchBox"
            placeholder="Search transactions, clients..."
          />
        </div>
        {/* rigthSection */}
        <div className="flex flex-row items-center gap-6">
          <button className="cursor-pointer bg-[#0FA675] rounded-xl font-normal px-4 py-2">
            + New Transanction
          </button>
          <BellDotIcon size={20} color="gray" />
          <div className="bg-white/15 border border-white/5 h-8"></div>
          {/* profile */}
          <div className="flex flex-row items-center gap-4">
            <div className="rounded-full w-8 h-8 bg-white"></div>
            <div className="flex flex-col">
              <h1 className="font-medium text-sm text-white">joe</h1>
              <p className="text-sm text-white/50">admin</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
