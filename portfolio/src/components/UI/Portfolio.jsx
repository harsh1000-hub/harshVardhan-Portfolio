import { useState, useEffect } from "react";
import React from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";
const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(null);
  // loadMoreHandler function
  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  //showModalHandler function
  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveId(id);
  };
  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }
    if (selectTab === "full stack") {
      const filteredData = data.filter(
        (item) => item.category === "Full Stack"
      );
      setPortfolios(filteredData);
    }
    if (selectTab === "frontend") {
      const filteredData = data.filter((item) => item.category === "Frontend");
      setPortfolios(filteredData);
    }
    if (selectTab === "backend") {
      const filteredData = data.filter((item) => item.category === "Backend");
      setPortfolios(filteredData);
    }
  }, [selectTab]);
  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My recent projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColor  border border-solid border-smallTextColor py-2 px-4 rounded-[10px] hover:bg-smallTextColor hover:text-white "
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("full stack")}
              className="text-smallTextColor  border border-solid border-smallTextColor py-2 px-4 rounded-[10px]  hover:bg-smallTextColor hover:text-white"
            >
              Full Stack
            </button>
            <button
              onClick={() => setSelectTab("frontend")}
              className="text-smallTextColor  border border-solid border-smallTextColor py-2 px-4 rounded-[10px]  hover:bg-smallTextColor hover:text-white"
            >
              Frontend
            </button>
            <button
              onClick={() => setSelectTab("backend")}
              className="text-smallTextColor  border border-solid border-smallTextColor py-2 px-4 rounded-[10px]  hover:bg-smallTextColor hover:text-white"
            >
              Backend
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-dalay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-1"
            >
              <figure>
                <img
                  src={portfolio.imgUrl}
                  alt="img"
                  className="rounded-[8px]"
                />
              </figure>
              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
            >
              Load more
            </button>
          )}
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeId={activeId} />}
    </section>
  );
};

export default Portfolio;
