import React from "react";
import TaskCard from "../components/TaskCard";
import SignalmentMainCard from "../components/SignalmentMainCard"
import CardView from "../components/CardView.js";
import Article from "../components/Article";
function main() {
  return (
    <div className="flex flex-col justify-start items-end h-screen mr-4 ml-4">
      <div className="mt-4 mb-4">
        <h1 className="text-2xl font-bold">لوحة القيادة</h1>
      </div>
      <div className="grid grid-cols-2 w-full">
        <h2 className="col-span-1 text-xl font-semibold justify-self-end">اخبار</h2>
        <h2 className="col-span-1 text-xl font-semibold justify-self-end">احصائيات</h2>
      </div>

      <div className="grid grid-cols-2 w-full">
        <div className="col-span-1 text-xl font-semibold justify-self-end">  <Article /></div>
        <div className="col-span-1 text-xl font-semibold justify-self-end"> < CardView /></div>
      </div>

      <div className="mt-4">
        <h1 className="text-xl font-bold">معلومات مساعدة</h1>
      </div>

      <div className="flex">
        <div className="mr-5">
          <SignalmentMainCard />
        </div>
        <div className="mr-5">
          <TaskCard />
        </div>
      </div>

    </div>


  );
}
export default main;
