declare type Subjects = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
}[] &
  DatabaseProperties;

declare type Metadata = {
  currentPage: number;
  numberOfPages: number;
  limit: number;
};

declare type SingleSubjectResponse = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
};
