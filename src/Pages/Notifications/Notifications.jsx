import React from "react";

const Notifications = () => {
  return (
    <section className="md:p-8 p-3">
      <div className="max-w-screen-lg mx-auto py-6">
        <span className="flex justify-between">
          <h2 className="text-[24px] font-semibold">Notification</h2>
          <button className="text-[#EB5757]">Mark all as read</button>
        </span>
        <div className="flex flex-col gap-4 mt-8">
          <div className="bg-[#F5F8FF66] rounded-lg px-4 md:px-8 py-4 flex justify-between gap-6">
            <span className="flex flex-col gap-2">
              <p className="text-[#4D5D85] font-medium text-[18px]">
                Push Notification
              </p>
              <p className="text-[#84848480] font-medium text-[14px]">
                Automatically Send New Notification
              </p>
            </span>
            <span className="flex justify-center items-center">
              <label
                htmlFor="AcceptPushNotifications"
                className="relative h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
              >
                <input
                  type="checkbox"
                  defaultChecked
                  id="AcceptPushNotifications"
                  className="peer sr-only"
                />

                <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
              </label>
            </span>
          </div>
          <div className="bg-[#F5F8FF66] rounded-lg px-4 md:px-8 py-4">
            <p className="text-[#4D5D85] font-medium text-[18px]">Today</p>
            <div className="mt-3 flex flex-col gap-2 text-[#011750]">
              {/* divide-y-2 border-[#0117504D] */}
              <span className="flex justify-between gap-6 border-b py-3 border-[#0117504D]">
                <p className="font-medium">
                  <span className="font-semibold">Traffic Update;</span> You
                  will arrive 15mins later, there’s heavy Traffic at...
                </p>
                <p className="font-semibold">5 mins ago</p>
              </span>
              <span className="flex justify-between gap-6 border-b py-3 border-[#0117504D] text-[14px]">
                <p className="font-medium">
                  <span className="font-semibold">Road Closure;</span> There’s
                  an Ongoing Road Closure Along Iyana Oworo...
                </p>
                <p className="font-semibold">12:39 PM</p>
              </span>
              <span className="flex justify-between gap-6 border-b py-3 border-[#0117504D] text-[#84848480] text-[14px]">
                <p className="font-medium">
                  <span className="font-semibold">Road Closure;</span> There’s
                  an Ongoing Road Closure Along Iyana Oworo...
                </p>
                <p className="font-semibold">12:39 PM</p>
              </span>
              <span className="flex justify-between gap-6 border-b py-3 border-[#0117504D] text-[14px]">
                <p className="font-medium">
                  <span className="font-semibold">Accident;</span> There’s an
                  Ongoing Road Closure Along Iyana Oworo...
                </p>
                <p className="font-semibold">12:39 PM</p>
              </span>
              <span className="flex justify-between gap-6 border-b py-3 border-[#0117504D] text-[#84848480] text-[14px]">
                <p className="font-medium">
                  <span className="font-semibold">Road Closure;</span> There’s
                  an Ongoing Road Closure Along Iyana Oworo...
                </p>
                <p className="font-semibold">12:39 PM</p>
              </span>
              <span className="flex justify-between gap-6 border-b py-3 border-[#0117504D] text-[14px]">
                <p className="font-medium">
                  <span className="font-semibold">Road Closure;</span> There’s
                  an Ongoing Road Closure Along Iyana Oworo...
                </p>
                <p className="font-semibold">7 hrs ago</p>
              </span>
              <span className="flex justify-between gap-6 border-b py-3 border-[#0117504D] text-[#84848480] text-[14px]">
                <p className="font-medium">
                  <span className="font-semibold">Road Closure;</span> There’s
                  an Ongoing Road Closure Along Iyana Oworo...
                </p>
                <p className="font-semibold">18hrs ago</p>
              </span>
            </div>

            {/* Older */}
            <div className="mt-6">
              <p className="text-[#4D5D85] font-medium text-[18px]">Older</p>
              <div className="mt-3 flex flex-col gap-2 text-[#011750]">
                {/* divide-y-2 border-[#0117504D] */}
                <span className="flex justify-between gap-6 border-b py-3 border-[#0117504D] text-[#84848480] text-[14px]">
                  <p className="font-medium">
                    <span className="font-semibold">Traffic Update;</span> You
                    will arrive 15mins later, there’s heavy Traffic at...
                  </p>
                  <p className="font-semibold">Yesterday</p>
                </span>
                <span className="flex justify-between gap-6 border-b py-3 border-[#0117504D] text-[#84848480] text-[14px]">
                  <p className="font-medium">
                    <span className="font-semibold">Road Closure;</span> There’s
                    an Ongoing Road Closure Along Iyana Oworo...
                  </p>
                  <p className="font-semibold">Two days ago</p>
                </span>
                <span className="flex justify-between gap-6 border-b py-3 border-[#0117504D] text-[#84848480] text-[14px]">
                  <p className="font-medium">
                    <span className="font-semibold">Road Closure;</span> There’s
                    an Ongoing Road Closure Along Iyana Oworo...
                  </p>
                  <p className="font-semibold">Last week</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notifications;
