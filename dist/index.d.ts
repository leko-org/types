import * as drizzle_orm_query_promise_d_d7b61248 from 'drizzle-orm/query-promise.d-d7b61248';
import * as drizzle_orm_db_d_a6fe1b19 from 'drizzle-orm/db.d-a6fe1b19';
import * as drizzle_orm_pg_core from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';

declare const users: drizzle_orm_db_d_a6fe1b19.au<{
    name: "users";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgSerial<{
            tableName: "users";
            name: "id";
            data: number;
            driverParam: number;
            hasDefault: true;
            notNull: true;
        }>;
        firstName: drizzle_orm_pg_core.PgVarchar<{
            tableName: "users";
            name: "first_name";
            data: string;
            driverParam: string;
            hasDefault: false;
            enumValues: [string, ...string[]];
            notNull: true;
        }>;
        lastName: drizzle_orm_pg_core.PgVarchar<{
            tableName: "users";
            name: "last_name";
            data: string;
            driverParam: string;
            hasDefault: false;
            enumValues: [string, ...string[]];
            notNull: true;
        }>;
        email: drizzle_orm_pg_core.PgVarchar<{
            tableName: "users";
            name: "email";
            data: string;
            driverParam: string;
            hasDefault: false;
            enumValues: [string, ...string[]];
            notNull: true;
        }>;
        userName: drizzle_orm_pg_core.PgVarchar<{
            tableName: "users";
            name: "user_name";
            data: string;
            driverParam: string;
            hasDefault: false;
            enumValues: [string, ...string[]];
            notNull: true;
        }>;
        password: drizzle_orm_pg_core.PgText<{
            tableName: "users";
            name: "password";
            data: string;
            driverParam: string;
            hasDefault: false;
            enumValues: [string, ...string[]];
            notNull: true;
        }>;
        verified: drizzle_orm_pg_core.PgBoolean<{
            tableName: "users";
            name: "verified";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
        }>;
        JWT: drizzle_orm_pg_core.PgText<{
            tableName: "users";
            name: "jwt";
            data: string;
            enumValues: [string, ...string[]];
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
        isActive: drizzle_orm_pg_core.PgBoolean<{
            tableName: "users";
            name: "is_active";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
        }>;
        deleted_at: drizzle_orm_pg_core.PgTimestamp<{
            tableName: "users";
            name: "deleted_at";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
        created_at: drizzle_orm_pg_core.PgTimestamp<{
            tableName: "users";
            name: "created_at";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
        }>;
        role: drizzle_orm_pg_core.PgInteger<{
            tableName: "users";
            name: "role";
            data: number;
            driverParam: string | number;
            hasDefault: true;
            notNull: true;
        }>;
        tagset: drizzle_orm_pg_core.PgInteger<{
            tableName: "users";
            name: "tagset";
            data: number;
            driverParam: string | number;
            hasDefault: false;
            notNull: false;
        }>;
        avatar: drizzle_orm_pg_core.PgText<{
            tableName: "users";
            name: "avatar";
            data: string;
            enumValues: [string, ...string[]];
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
        phone: drizzle_orm_pg_core.PgText<{
            tableName: "users";
            name: "phone";
            data: string;
            enumValues: [string, ...string[]];
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
    };
}>;
declare const role: drizzle_orm_db_d_a6fe1b19.au<{
    name: "role";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgSerial<{
            tableName: "role";
            name: "id";
            data: number;
            driverParam: number;
            hasDefault: true;
            notNull: true;
        }>;
    };
}>;
declare const tag: drizzle_orm_db_d_a6fe1b19.au<{
    name: "tag";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgSerial<{
            tableName: "tag";
            name: "id";
            data: number;
            driverParam: number;
            hasDefault: true;
            notNull: true;
        }>;
        name: drizzle_orm_pg_core.PgVarchar<{
            tableName: "tag";
            name: "name";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
    };
}>;
declare const tagset: drizzle_orm_db_d_a6fe1b19.au<{
    name: "tagset";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgSerial<{
            tableName: "tagset";
            name: "id";
            data: number;
            driverParam: number;
            hasDefault: true;
            notNull: true;
        }>;
        tags: drizzle_orm_pg_core.PgInteger<{
            tableName: "tagset";
            name: "tags";
            data: number;
            driverParam: string | number;
            hasDefault: false;
            notNull: false;
        }>;
    };
}>;
declare const document: drizzle_orm_db_d_a6fe1b19.au<{
    name: "documents";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgSerial<{
            tableName: "documents";
            name: "id";
            data: number;
            driverParam: number;
            hasDefault: true;
            notNull: true;
        }>;
        title: drizzle_orm_pg_core.PgVarchar<{
            tableName: "documents";
            name: "title";
            data: string;
            driverParam: string;
            hasDefault: false;
            enumValues: [string, ...string[]];
            notNull: true;
        }>;
        content: drizzle_orm_pg_core.PgText<{
            tableName: "documents";
            name: "content";
            data: string;
            enumValues: [string, ...string[]];
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
        filetype: drizzle_orm_pg_core.PgVarchar<{
            tableName: "documents";
            name: "filetype";
            data: string;
            driverParam: string;
            enumValues: [string, ...string[]];
            notNull: false;
            hasDefault: false;
        }>;
        fileLocation: drizzle_orm_pg_core.PgText<{
            tableName: "documents";
            name: "file_location";
            data: string;
            enumValues: [string, ...string[]];
            driverParam: string;
            notNull: false;
            hasDefault: false;
        }>;
        folder: drizzle_orm_pg_core.PgInteger<{
            tableName: "documents";
            name: "folder_id";
            data: number;
            driverParam: string | number;
            hasDefault: false;
            notNull: false;
        }>;
        owner: drizzle_orm_pg_core.PgInteger<{
            tableName: "documents";
            name: "owner";
            data: number;
            driverParam: string | number;
            hasDefault: false;
            notNull: false;
        }>;
    };
}>;
declare const folder: drizzle_orm_db_d_a6fe1b19.au<{
    name: "folder";
    schema: undefined;
    columns: {
        id: drizzle_orm_pg_core.PgSerial<{
            tableName: "folder";
            name: "id";
            data: number;
            driverParam: number;
            hasDefault: true;
            notNull: true;
        }>;
        title: drizzle_orm_pg_core.PgVarchar<{
            tableName: "folder";
            name: "title";
            data: string;
            driverParam: string;
            hasDefault: false;
            enumValues: [string, ...string[]];
            notNull: true;
        }>;
        owner: drizzle_orm_pg_core.PgInteger<{
            tableName: "folder";
            name: "owner";
            data: number;
            driverParam: string | number;
            hasDefault: false;
            notNull: false;
        }>;
    };
}>;
declare const tagsToDocument: drizzle_orm_db_d_a6fe1b19.au<{
    name: "tags_to_document";
    schema: undefined;
    columns: {
        documentId: drizzle_orm_pg_core.PgInteger<{
            tableName: "tags_to_document";
            name: "document_id";
            data: number;
            driverParam: string | number;
            hasDefault: false;
            notNull: false;
        }>;
        tagId: drizzle_orm_pg_core.PgInteger<{
            tableName: "tags_to_document";
            name: "tag_id";
            data: number;
            driverParam: string | number;
            hasDefault: false;
            notNull: false;
        }>;
    };
}>;
declare const tagsToFolders: drizzle_orm_db_d_a6fe1b19.au<{
    name: "tags_to_folder";
    schema: undefined;
    columns: {
        folderId: drizzle_orm_pg_core.PgInteger<{
            tableName: "tags_to_folder";
            name: "folder_id";
            data: number;
            driverParam: string | number;
            hasDefault: false;
            notNull: false;
        }>;
        tagId: drizzle_orm_pg_core.PgInteger<{
            tableName: "tags_to_folder";
            name: "tag_id";
            data: number;
            driverParam: string | number;
            hasDefault: false;
            notNull: false;
        }>;
    };
}>;
declare const usersRelations: drizzle_orm_query_promise_d_d7b61248.z<"users", {
    role: drizzle_orm_query_promise_d_d7b61248.O<"role", true>;
    tagset: drizzle_orm_query_promise_d_d7b61248.M<"tagset">;
}>;
declare const tagsetRelations: drizzle_orm_query_promise_d_d7b61248.z<"tagset", {
    tags: drizzle_orm_query_promise_d_d7b61248.M<"tag">;
}>;
declare const documentsRelation: drizzle_orm_query_promise_d_d7b61248.z<"documents", {
    owner: drizzle_orm_query_promise_d_d7b61248.O<"users", false>;
    tags: drizzle_orm_query_promise_d_d7b61248.M<"tag">;
    folder: drizzle_orm_query_promise_d_d7b61248.O<"folder", false>;
}>;
declare const folderRelations: drizzle_orm_query_promise_d_d7b61248.z<"documents", {
    owner: drizzle_orm_query_promise_d_d7b61248.O<"users", false>;
    documents: drizzle_orm_query_promise_d_d7b61248.M<"documents">;
}>;
type User = InferModel<typeof users>;
type Document = InferModel<typeof document>;
type Folder = InferModel<typeof folder>;
type Role = InferModel<typeof role>;
type Tag = InferModel<typeof tag>;
type Tagset = InferModel<typeof tagset>;

type Test = {
    name: string;
    id: number;
};

export { Document, Folder, Role, Tag, Tagset, Test, User, document, documentsRelation, folder, folderRelations, role, tag, tagsToDocument, tagsToFolders, tagset, tagsetRelations, users, usersRelations };
