import { LectureListType } from "../types";
import LectureCard from "./LectureCard";

export default function LectureList({
  lectureList,
}: {
  lectureList: LectureListType;
}) {
  console.log(lectureList);

  return (
    <article className="w-full py-10">
      <section className="container mx-auto">
        <div className="category-title relative">
          <span className="text-2xl font-bold pe-4 bg-white relative z-10">
            {lectureList.title}
          </span>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
          {lectureList.lectureList.map((lecture) => (
            <LectureCard key={lecture.id} lecture={lecture} />
          ))}
        </div>
      </section>
    </article>
  );
}
