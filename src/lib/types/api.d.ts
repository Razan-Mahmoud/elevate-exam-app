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

declare type Metadata = {
  currentPage: number;
  numberOfPages: number;
  limit: number;
};

declare type PaginatedResponse<T> = {
  metadata: Metadata;
  subjects: Subjects;
} & T;

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;
