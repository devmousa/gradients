import { useState, useEffect } from "react";

import gradients from "../../json/gradients.json";

type Color = {
  name: string;
  colors: string[];
};

const copyToClipboard = (color: string) => {
  navigator.clipboard.writeText(color);

  return true;
};

const search = (colors: Color[], searchQuery: string) => {
  const filteredColors = [...colors].filter((arrayColor: Color) =>
    arrayColor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredColors;
};

const Plates = () => {
  const [filteredColors, setFilteredColors] = useState(gradients);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const changeCopied = setTimeout(() => {
      setCopied(false);
    }, 1000)

    return () => clearTimeout(changeCopied);
  }, [copied])

  return (
    <>
      <div className="w-full py-2 mb-6 flex justify-center items-center relative">
        <input
          type="text"
          placeholder="Search for colors"
          onInput={(event) => {
            const colorsAfterSearch = search(
              gradients,
              (event.target as HTMLInputElement).value
            );
            setFilteredColors(colorsAfterSearch);
          }}
          className="sm:w-[400px] xs:w-[90%] w-[95%] h-[36px] px-4 outline-none border border-blue-950 dark:border-stone-50 dark:bg-slate-900 dark:caret-stone-50 dark:text-white rounded-full"
        />
      </div>

      <div className="w-full flex flex-wrap flex-row justify-start items-baseline">
        {filteredColors.map((value, index) => (
          <div
            key={index}
            className="2xl:basis-[calc(100%/7-1rem)] xl:basis-[calc(100%/6-1rem)] lg:basis-[calc(100%/5-1rem)] md:basis-[calc(100%/4-1rem)] sm:basis-[calc(100%/3-1rem)] xs:basis-[calc(100%/2-1rem)] basis-[calc(100%/1-1rem)] p-2 mx-2 my-4 z-10 bg-stone-50 dark:bg-slate-800 rounded-lg shadow"
          >
            <h1 className="text-center dark:text-white mb-2">{value.name}</h1>

            <div
              style={{
                background: `linear-gradient(${value.colors.join(", ")})`,
              }}
              className="relative flex-1 w-full h-[144px] rounded"
            >
              <button
                className="absolute w-full h-full bg-slate-500 text-stone-100 dark:text-slate-800 opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-30 text-opacity-0 hover:text-opacity-100 text-xl font-bold flex justify-center items-center z-10"
                onClick={() => {
                  copyToClipboard(
                    `background: linear-gradient(${value.colors.join(", ")});`
                  );
                  setCopied(true);
                }}
              >
                <p
                  className={`text-sm border-2 rounded ${
                    copied
                      ? "border-green-400 dark:border-green-700 hover:bg-green-400 dark:hover:bg-green-700 bg-green-400"
                      : "border-stone-100 dark:border-slate-800 hover:bg-stone-100 dark:hover:bg-slate-800"
                  } px-2 py-1 hover:text-gray-900 dark:hover:text-amber-100 transition-all`}
                >
                  {copied ? "Copied" : "Copy CSS"}
                </p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Plates;