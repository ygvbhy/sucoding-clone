export interface LectureType {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  price: string;
  is_new: boolean;
}

export interface LectureListType {
  title: string;
  lectureList: LectureType[];
}
