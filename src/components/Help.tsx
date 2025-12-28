export default function Help() {
  return (
    <section>
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-white font-semibold text-xl">Help</h1>
        <p className="text-[#94A3B8] text-sm">
          Get assistance when you need it
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Documentation Card */}
        <div className="bg-[#0B111E] border border-[#1E293B] rounded-xl p-6 hover:border-[#334155] transition-colors cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="text-emerald-500 text-3xl">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-semibold text-lg mb-2">
                Documentation
              </h2>
              <p className="text-[#94A3B8] text-sm">
                Browse our comprehensive guides
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Card */}
        <div className="bg-[#0B111E] border border-[#1E293B] rounded-xl p-6 hover:border-[#334155] transition-colors cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="text-emerald-500 text-3xl">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-semibold text-lg mb-2">FAQs</h2>
              <p className="text-[#94A3B8] text-sm">
                Find answers to common questions
              </p>
            </div>
          </div>
        </div>

        {/* Live Chat Card */}
        <div className="bg-[#0B111E] border border-[#1E293B] rounded-xl p-6 hover:border-[#334155] transition-colors cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="text-emerald-500 text-3xl">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-semibold text-lg mb-2">
                Live Chat
              </h2>
              <p className="text-[#94A3B8] text-sm">
                Chat with our support team
              </p>
            </div>
          </div>
        </div>

        {/* Email Support Card */}
        <div className="bg-[#0B111E] border border-[#1E293B] rounded-xl p-6 hover:border-[#334155] transition-colors cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="text-emerald-500 text-3xl">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-semibold text-lg mb-2">
                Email Support
              </h2>
              <p className="text-[#94A3B8] text-sm">
                Send us a detailed message
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
