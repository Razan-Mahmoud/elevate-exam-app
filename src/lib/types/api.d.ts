declare type DatabaseProperties = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

declare type SuccessfulResponse<T> = {
  message: string;
} & T;

declare type ErrorResponse = {
  message: string;
  code: number;
};

declare type PaginatedResponse<T> = {
  metadata: Metadata;
  subjects: Subjects;
} & T;
// declare type PaginatedResponse<T> = {
//   metadata: {
//     currentPage: number;
//     numberOfPages: number;
//     limit: number;
//     totalItems: number;
//   };
// } & T;
declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;
