import React from "react";
import { useData } from "../context/dataContext";
// import {IoIosCloseCircleOutline} from 'react-icons'

function OpenChart() {
  const { openChart, setOpenChart } = useData();

  function handleChart() {}
  function handleRemoveChart(chart) {
    setOpenChart((prev) => prev.filter((item) => item.id !== chart.id));
  }

  return (
    <div className="absolute left-0 top-0 z-10 p-2 flex items-center gap-3">
      {openChart.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-slate-600  px-5 py-1 rounded-sm cursor-pointer"
            onClick={() => handleChart()}
          >
            <div className="relative">
              <p className="text-xs font-semibold">{item.pair}</p>
              <p className="text-xs text-orange-500 font-semibold">
                {item.payout1}
              </p>
              {openChart.length > 1 && (
                <div className="absolute -right-6 -top-2 z-10 flex flex-col">
                  <span
                    className="p-0.5 rounded-full border bg-slate-600 hover:bg-blue-700 flex items-center justify-center text-[9px]"
                    onClick={() => handleRemoveChart(item)}>
                    x
                  </span>
                  <span className="p-0.5 rounded-full border bg-slate-600 hover:bg-blue-700 flex items-center justify-center text-[9px]">
                    📌
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OpenChart;
