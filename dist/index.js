"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var types_exports = {};
__export(types_exports, {
  document: () => document,
  documentsRelation: () => documentsRelation,
  folder: () => folder,
  folderRelations: () => folderRelations,
  role: () => role,
  tag: () => tag,
  tagsToDocument: () => tagsToDocument,
  tagsToFolders: () => tagsToFolders,
  tagset: () => tagset,
  tagsetRelations: () => tagsetRelations,
  users: () => users,
  usersRelations: () => usersRelations
});
module.exports = __toCommonJS(types_exports);
var import_pg_core = require("drizzle-orm/pg-core");
var import_drizzle_orm = require("drizzle-orm");
var users = (0, import_pg_core.pgTable)(
  "users",
  {
    id: (0, import_pg_core.serial)("id").primaryKey(),
    firstName: (0, import_pg_core.varchar)("first_name", { length: 20 }).notNull(),
    lastName: (0, import_pg_core.varchar)("last_name", { length: 20 }).notNull(),
    email: (0, import_pg_core.varchar)("email", { length: 100 }).notNull(),
    userName: (0, import_pg_core.varchar)("user_name", { length: 10 }).notNull(),
    password: (0, import_pg_core.text)("password").notNull(),
    verified: (0, import_pg_core.boolean)("verified").default(false),
    JWT: (0, import_pg_core.text)("jwt"),
    isActive: (0, import_pg_core.boolean)("is_active").default(true),
    deleted_at: (0, import_pg_core.timestamp)("deleted_at"),
    created_at: (0, import_pg_core.timestamp)("created_at").defaultNow(),
    role: (0, import_pg_core.integer)("role").default(0).notNull().references(() => role.id),
    tagset: (0, import_pg_core.integer)("tagset").references(() => tagset.id),
    avatar: (0, import_pg_core.text)("avatar"),
    phone: (0, import_pg_core.text)("phone")
  },
  (table) => {
    return {
      emailIndex: (0, import_pg_core.uniqueIndex)("email_index").on(table.email),
      userNameIndex: (0, import_pg_core.uniqueIndex)("user_name_index").on(table.userName)
    };
  }
);
var role = (0, import_pg_core.pgTable)("role", {
  id: (0, import_pg_core.serial)("id").primaryKey()
});
var tag = (0, import_pg_core.pgTable)(
  "tag",
  {
    id: (0, import_pg_core.serial)("id").primaryKey(),
    name: (0, import_pg_core.varchar)("name", { length: 70 })
  },
  (table) => {
    return {
      tagNameIndex: (0, import_pg_core.uniqueIndex)("tag_name_index").on(table.name)
    };
  }
);
var tagset = (0, import_pg_core.pgTable)("tagset", {
  id: (0, import_pg_core.serial)("id").primaryKey(),
  tags: (0, import_pg_core.integer)("tags").references(() => tag.id)
});
var document = (0, import_pg_core.pgTable)("documents", {
  id: (0, import_pg_core.serial)("id").primaryKey(),
  title: (0, import_pg_core.varchar)("title", { length: 100 }).notNull(),
  content: (0, import_pg_core.text)("content"),
  filetype: (0, import_pg_core.varchar)("filetype", { length: 10 }),
  fileLocation: (0, import_pg_core.text)("file_location"),
  folder: (0, import_pg_core.integer)("folder_id").references(() => folder.id),
  owner: (0, import_pg_core.integer)("owner").references(() => users.id)
});
var folder = (0, import_pg_core.pgTable)("folder", {
  id: (0, import_pg_core.serial)("id").primaryKey(),
  title: (0, import_pg_core.varchar)("title", { length: 100 }).notNull(),
  owner: (0, import_pg_core.integer)("owner").references(() => users.id)
});
var tagsToDocument = (0, import_pg_core.pgTable)("tags_to_document", {
  documentId: (0, import_pg_core.integer)("document_id").references(() => document.id),
  tagId: (0, import_pg_core.integer)("tag_id").references(() => tag.id)
});
var tagsToFolders = (0, import_pg_core.pgTable)(
  "tags_to_folder",
  {
    folderId: (0, import_pg_core.integer)("folder_id").references(() => folder.id),
    tagId: (0, import_pg_core.integer)("tag_id").references(() => tag.id)
  },
  (t) => ({
    pk: (0, import_pg_core.primaryKey)(t.tagId, t.folderId)
  })
);
var usersRelations = (0, import_drizzle_orm.relations)(users, ({ one, many }) => ({
  role: one(role, { fields: [users.role], references: [role.id] }),
  tagset: many(tagset)
}));
var tagsetRelations = (0, import_drizzle_orm.relations)(tagset, ({ many }) => ({
  tags: many(tag)
}));
var documentsRelation = (0, import_drizzle_orm.relations)(document, ({ one, many }) => ({
  owner: one(users, { fields: [document.owner], references: [users.id] }),
  tags: many(tag),
  folder: one(folder, { fields: [document.folder], references: [folder.id] })
}));
var folderRelations = (0, import_drizzle_orm.relations)(document, ({ one, many }) => ({
  owner: one(users, { fields: [document.owner], references: [users.id] }),
  documents: many(document)
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  document,
  documentsRelation,
  folder,
  folderRelations,
  role,
  tag,
  tagsToDocument,
  tagsToFolders,
  tagset,
  tagsetRelations,
  users,
  usersRelations
});
