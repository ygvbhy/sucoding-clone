import { LectureType } from "../types";

export default function LectureCard({ lecture }: { lecture: LectureType }) {
  return (
    <>
      <div className="bg-gray-100">
        <div className="h-full bg-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg relative">
          <a href={lecture.link} target="_blank" rel="noreferrer">
            <div className="rounded-lg border border-gray-200 shadow-md">
              {lecture.is_new && (
                <span className="absolute right-0 top-2 bg-red-800 text-red-200 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                  NEW
                </span>
              )}
              <img
                src={lecture.image}
                alt={lecture.title}
                className="rounded-t-md w-full"
              />
              <div className="p-4 flex flex-col gap-2">
                <div className="h-[153px]">
                  <h2 className="text-lg font-bold mt-2 ">{lecture.title}</h2>
                  <p className="text-base text-gray-500 mt-1">
                    {lecture.description}
                  </p>
                </div>
                <span className="text-lg font-bold mt-1">{lecture.price}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
