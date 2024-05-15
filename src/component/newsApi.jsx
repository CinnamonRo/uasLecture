import React from "react";
import News from "../component/news";
function newsApi() {
  const { apiInfo, loading } = News();
  console.log(apiInfo);
  return (
    <div className="container mx-auto mt-3">
      <h1 className="font-bold text-center py-5 font-sans text-xl ">News</h1>
      {loading ? (
        <p> Loading...</p>
      ) : (
        apiInfo.articles.slice(0, 3).map((props, index) => {
          return (
            <div className="flex flex-col justify-center items-center">
              <div
                className="w-3/5 hover:-tranlate-y-2 duration-200 ease-in-out box-content bg-orange-300"
                key={index}
              >
                <a href={props.url}>
                  <div className="flex py-2 justify-center items-center">
                    <div className="mx-12 ">
                      <img
                        className=" rounded-lg"
                        src={props.urlToImage}
                        alt="img"
                      />
                    </div>
                    <div className="py-4 px-4">
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
