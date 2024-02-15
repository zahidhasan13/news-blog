import { useState } from "react";
import TabContent from "./TabContent";

const Blogs = () => {
  const [currentTab, setCurrentTab] = useState("All");

  const toggleTab = (str) => {
    setCurrentTab(str);
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="text-sm font-medium text-center text-gray-500 border-b-2 border-gray-500">
        <ul className="flex flex-wrap justify-between -mb-px">
          <li
            onClick={() => toggleTab("All")}
            className={currentTab === "All" ? "tabs active-tabs" : "tabs"}
          >
            All
          </li>
          <li
            onClick={() => toggleTab("Health")}
            className={currentTab === "Health" ? "tabs active-tabs" : "tabs"}
          >
            Health
          </li>
          <li
            onClick={() => toggleTab("Fintech")}
            className={currentTab === "Fintech" ? "tabs active-tabs" : "tabs"}
          >
            Fintech
          </li>
          <li
            onClick={() => toggleTab("Startups")}
            className={currentTab === "Startups" ? "tabs active-tabs" : "tabs"}
          >
            Startups
          </li>
          <li
            onClick={() => toggleTab("AI")}
            className={currentTab === "AI" ? "tabs active-tabs" : "tabs"}
          >
            AI
          </li>
          <li
            onClick={() => toggleTab("Security")}
            className={currentTab === "Security" ? "tabs active-tabs" : "tabs"}
          >
            Security
          </li>
          <li
            onClick={() => toggleTab("Enterprise")}
            className={
              currentTab === "Enterprise" ? "tabs active-tabs" : "tabs"
            }
          >
            Enterprise
          </li>
          <li
            onClick={() => toggleTab("Growth")}
            className={currentTab === "Growth" ? "tabs active-tabs" : "tabs"}
          >
            Growth
          </li>
          <li
            onClick={() => toggleTab("Apps")}
            className={currentTab === "Apps" ? "tabs active-tabs" : "tabs"}
          >
            Apps
          </li>
          <li
            onClick={() => toggleTab("Work")}
            className={currentTab === "Work" ? "tabs active-tabs" : "tabs"}
          >
            Work
          </li>
          <li
            onClick={() => toggleTab("Gadgets")}
            className={currentTab === "Gadgets" ? "tabs active-tabs" : "tabs"}
          >
            Gadgets
          </li>
          <li
            onClick={() => toggleTab("Tech")}
            className={currentTab === "Tech" ? "tabs active-tabs" : "tabs"}
          >
            Tech
          </li>
        </ul>
      </div>
      {/* Tab Content */}
      <div>
        <TabContent currentTab={currentTab} />
      </div>
    </div>
  );
};

export default Blogs;
