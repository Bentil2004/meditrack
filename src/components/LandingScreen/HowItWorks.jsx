import React from "react";
import { Calendar, Sliders, Layers } from "lucide-react";

function HowItWorks() {
  return (
    <section className="container mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        How it works?
      </h2>
      <div className="w-12 h-1 bg-[#7E48F0] mx-auto mt-2 mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 mb-20">

        <div className="flex flex-col items-center">
          <Calendar size={48} strokeWidth={1.5} color="#7E48F0" />
          <h3 className="text-xl font-semibold mt-4">Reports</h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Shows current inventory levels of medical supplies, medications, and equipment.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Sliders size={48} strokeWidth={1.5} color="#7E48F0" />
          <h3 className="text-xl font-semibold mt-4">Inventory Tracking</h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Inventory tracking monitors stock levels, movements, and usage of items in real time.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Layers size={48} strokeWidth={1.5} color="#7E48F0" />
          <h3 className="text-xl font-semibold mt-4">Medication Groupings</h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            You can manually categorize and group medications according to their effect.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
