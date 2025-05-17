declare type Subjects = ({
  name: string;
  icon: string;
} & DatabaseProperties)[];

declare type SingleSubjectResponse = {
  name: string;
  icon: string;
} & DatabaseProperties;
