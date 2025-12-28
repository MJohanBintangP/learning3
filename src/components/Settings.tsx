import { useState } from "react";

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className={`w-12 h-6 rounded-full transition-colors ${
        checked ? "bg-green-500" : "bg-[#20283C]"
      }`}
    >
      <div
        className={`w-5 h-5 bg-black rounded-full transition-transform ${
          checked ? "translate-x-6" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export default function Settings() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState(true);

  return (
    <section>
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-white font-semibold text-xl">Settings</h1>
        <p className="text-[#94A3B8] text-sm">
          Manage your account preferences
        </p>
      </div>

      {/* Notifications box */}
      <div className="w-full p-6 rounded-xl border border-white/15 h-auto bg-[#0B111E] mb-6">
        <div className="flex flex-col">
          <div className="flex flex-col mb-6">
            <h1 className="text-white font-semibold text-xl">Notifications</h1>
            <p className="text-gray-400 font-medium text-sm">
              Configure how you receive notifications
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <label className="text-white text-sm" htmlFor="">
                Email notifications
              </label>
              <Toggle
                checked={emailNotif}
                onChange={() => setEmailNotif(!emailNotif)}
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-white text-sm" htmlFor="">
                Push notifications
              </label>
              <Toggle
                checked={pushNotif}
                onChange={() => setPushNotif(!pushNotif)}
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-white text-sm" htmlFor="">
                Weekly reports
              </label>
              <Toggle
                checked={weeklyReports}
                onChange={() => setWeeklyReports(!weeklyReports)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Security box */}
      <div className="w-full p-6 rounded-xl border border-white/15 h-auto bg-[#0B111E]">
        <div className="flex flex-col">
          <div className="flex flex-col mb-6">
            <h1 className="text-white font-semibold text-xl">Security</h1>
            <p className="text-gray-400 font-medium text-sm">
              Manage your security settings
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <label className="text-white text-sm" htmlFor="">
                Two-factor authentication
              </label>
              <Toggle
                checked={twoFactor}
                onChange={() => setTwoFactor(!twoFactor)}
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-white text-sm" htmlFor="">
                Session timeout
              </label>
              <Toggle
                checked={sessionTimeout}
                onChange={() => setSessionTimeout(!sessionTimeout)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
