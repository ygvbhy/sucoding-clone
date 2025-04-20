import LectureList from "./LectureList";
import lectureList from "../data/lectureList.json";

export default function Content() {
  return (
    <div className="py-4 md:py-12 min-h-[1500px]">
      <div className="container mx-auto">
        {lectureList.map((lectureList, i) => (
          <LectureList key={i} lectureList={lectureList} />
        ))}
      </div>
    </div>
  );
}
