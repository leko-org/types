import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { InferModel, relations } from "drizzle-orm";

const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    firstName: varchar("first_name", { length: 20 }).notNull(),
    lastName: varchar("last_name", { length: 20 }).notNull(),
    email: varchar("email", { length: 100 }).notNull(),
    userName: varchar("user_name", { length: 10 }).notNull(),
    password: text("password").notNull(),
    verified: boolean("verified").default(false),
    JWT: text("jwt"),
    isActive: boolean("is_active").default(true),
    deleted_at: timestamp("deleted_at"),
    created_at: timestamp("created_at").defaultNow(),

    role: integer("role")
      .default(0)
      .notNull()
      .references(() => role.id),
    tagset: integer("tagset").references(() => tagset.id),

    avatar: text("avatar"),
    phone: text("phone"),
  },
  (table) => {
    return {
      emailIndex: uniqueIndex("email_index").on(table.email),
      userNameIndex: uniqueIndex("user_name_index").on(table.userName),
    };
  }
);

const role = pgTable("role", {
  id: serial("id").primaryKey(),
});

const tag = pgTable(
  "tag",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 70 }),
  },
  (table) => {
    return {
      tagNameIndex: uniqueIndex("tag_name_index").on(table.name),
    };
  }
);

const tagset = pgTable("tagset", {
  id: serial("id").primaryKey(),

  tags: integer("tags").references(() => tag.id),
});

const document = pgTable("documents", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  content: text("content"),
  filetype: varchar("filetype", { length: 10 }),
  fileLocation: text("file_location"),

  folder: integer("folder_id").references(() => folder.id),
  owner: integer("owner").references(() => users.id),
});

const folder = pgTable("folder", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),

  owner: integer("owner").references(() => users.id),
});

const tagsToDocument = pgTable("tags_to_document", {
  documentId: integer("document_id").references(() => document.id),
  tagId: integer("tag_id").references(() => tag.id),
});

const tagsToFolders = pgTable(
  "tags_to_folder",
  {
    folderId: integer("folder_id").references(() => folder.id),
    tagId: integer("tag_id").references(() => tag.id),
  },
  (t) => ({
    pk: primaryKey(t.tagId, t.folderId),
  })
);

// Relation mapping
const usersRelations = relations(users, ({ one, many }) => ({
  role: one(role, { fields: [users.role], references: [role.id] }),
  tagset: many(tagset),
}));

const tagsetRelations = relations(tagset, ({ many }) => ({
  tags: many(tag),
}));

const documentsRelation = relations(document, ({ one, many }) => ({
  owner: one(users, { fields: [document.owner], references: [users.id] }),
  tags: many(tag),
  folder: one(folder, { fields: [document.folder], references: [folder.id] }),
}));

const folderRelations = relations(document, ({ one, many }) => ({
  owner: one(users, { fields: [document.owner], references: [users.id] }),
  documents: many(document),
}));

export type User = InferModel<typeof users>;
export type Document = InferModel<typeof document>;
export type Folder = InferModel<typeof folder>;
export type Role = InferModel<typeof role>;
export type Tag = InferModel<typeof tag>;
export type Tagset = InferModel<typeof tagset>;
export {
  document,
  folder,
  tagsToDocument,
  tagsToFolders,
  users,
  role,
  tag,
  tagset,
  usersRelations,
  tagsetRelations,
  documentsRelation,
  folderRelations,
};

export type Test = {
  name: string;
  id: number;
};
