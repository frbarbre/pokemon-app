import { SearchProps } from "../interfaces";

export default function Search(props : SearchProps) {
    return (
      <div className="flex justify-between lg:justify-start gap-[16px] items-center pb-[24px]">
        <form onSubmit={props.handleSubmit}>
          <div className="bg-white flex gap-[8px] items-center py-[8px] px-[12px] shadow-inner-2dp rounded-full md:w-[400px] max-w-[400px]">
            <img
              className="w-[16px] aspect-square"
              src="/search.png"
              alt="search icon"
            />
            <input
              type="text"
              value={props.value}
              onChange={props.handleChange}
              placeholder="Search for a Pokémon..."
              onFocus={() => props.setIsWriting(true)}
              onBlur={() => props.setIsWriting(false)}
              className="text-[10px] text-medium outline-none w-full"
            />
            <div className="w-[16px]">
              <img
                onClick={props.handleClick}
                src="/close.png"
                alt="close-icon"
                className={`w-[16px] aspect-square cursor-pointer ${
                  props.isWriting ? "block" : "hidden"
                }`}
              />
            </div>
          </div>
        </form>
        <div
          className="bg-white rounded-full shadow-inner-2dp w-[32px] h-[32px] flex justify-center items-center relative cursor-pointer"
          onClick={() => props.setSortBtn(!props.sortBtn)}
        >
          <img
            className="h-[16px] aspect-square"
            src={
              props.sortValue === "number"
                ? "/tag.png"
                : props.sortValue === "letter"
                ? "/text_format.png"
                : ""
            }
            alt="sort-button"
          />
          {props.sortBtn && (
            <div className="absolute bg-primary -bottom-[180px] right-2 lg:right-0 shadow-2dp rounded-[12px] p-1">
              <h2 className="py-[20px] pl-[16px] text-white font-bold text-[12px]">
                Sort by:
              </h2>
              <div className="bg-white rounded-[8px] shadow-inner-2dp px-[20px] py-[16px] flex flex-col gap-[16px]">
                <div
                  className="flex gap-[8px] items-center cursor-pointer"
                  onClick={() => props.setSortValue("number")}
                >
                  <div className="w-[16px] h-[16px] border-[2px] border-solid border-primary rounded-full flex items-center justify-center">
                    <div
                      className={`${
                        props.sortValue === "number"
                          ? "bg-primary w-[8px] h-[8px] rounded-full"
                          : ""
                      }`}
                    />
                  </div>
                  <p className="text-[10px]">Number </p>
                </div>
                <div
                  className="flex gap-[8px] items-center cursor-pointer"
                  onClick={() => props.setSortValue("letter")}
                >
                  <div className="w-[16px] h-[16px] border-[2px] border-solid border-primary rounded-full flex items-center justify-center">
                    <div
                      className={`${
                        props.sortValue === "letter"
                          ? "bg-primary w-[8px] h-[8px] rounded-full"
                          : ""
                      }`}
                    />
                  </div>
                  <p className="text-[10px]">Name</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }