import React from "react";
import News from "../component/news";
function newsApi() {
  const { apiInfo, loading } = News();
  console.log(apiInfo);
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-center pt-5 font-sans text-4xl text-white ">
        News
      </h1>
      {loading ? (
        <p> Loading...</p>
      ) : (
        apiInfo.articles.slice(0, 3).map((props, index) => {
          return (
            <div className="flex flex-col justify-center items-center">
              <div
                key={index}
                className="w-3/5 my-5 hover:-tranlate-y-2 duration-200 ease-in-out box-content bg-teal-100 border-collapse border-2 rounded-lg"
              >
                <a href={props.url}>
                  <div className="w-full flex justify-center items-cente px-5 gap-5 py-4 items-center">
                    <div className="w-2/5">
                      <img
                        className=" rounded-lg"
                        src={props.urlToImage}
                        alt="img"
                      />
                    </div>
                    <div className="w-3/5">
                      <p className="font-semibold uppercase font-sans">
                        {props.title}
                      </p>
                      <p className="text-justify font-sans">
                        {props.description}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {props.author}, {props.publishedAt}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default newsApi;
