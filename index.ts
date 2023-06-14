import { InferModel } from "drizzle-orm";
import { users, document, folder, role, tag, tagset } from "./dist";

export type User = InferModel<typeof users>;
export type Document = InferModel<typeof document>;
export type Folder = InferModel<typeof folder>;
export type Role = InferModel<typeof role>;
export type Tag = InferModel<typeof tag>;
export type Tagset = InferModel<typeof tagset>;

export type Test = {
  name: string;
  id: number;
};
