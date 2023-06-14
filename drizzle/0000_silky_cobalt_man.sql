CREATE TABLE IF NOT EXISTS "documents" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(100) NOT NULL,
	"content" text,
	"filetype" varchar(10),
	"file_location" text,
	"folder_id" integer,
	"owner" integer
);

CREATE TABLE IF NOT EXISTS "folder" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(100) NOT NULL,
	"owner" integer
);

CREATE TABLE IF NOT EXISTS "role" (
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "tag" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(70)
);

CREATE TABLE IF NOT EXISTS "tags_to_document" (
	"document_id" integer,
	"tag_id" integer
);

CREATE TABLE IF NOT EXISTS "tags_to_folder" (
	"folder_id" integer,
	"tag_id" integer
);
--> statement-breakpoint
ALTER TABLE "tags_to_folder" ADD CONSTRAINT "tags_to_folder_tag_id_folder_id" PRIMARY KEY("tag_id","folder_id");

CREATE TABLE IF NOT EXISTS "tagset" (
	"id" serial PRIMARY KEY NOT NULL,
	"tags" integer
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(20) NOT NULL,
	"last_name" varchar(20) NOT NULL,
	"email" varchar(100) NOT NULL,
	"user_name" varchar(10) NOT NULL,
	"password" text NOT NULL,
	"verified" boolean DEFAULT false,
	"jwt" text,
	"is_active" boolean DEFAULT true,
	"deleted_at" timestamp,
	"created_at" timestamp DEFAULT now(),
	"role" integer DEFAULT 0 NOT NULL,
	"tagset" integer,
	"avatar" text,
	"phone" text
);

CREATE UNIQUE INDEX IF NOT EXISTS "tag_name_index" ON "tag" ("name");
CREATE UNIQUE INDEX IF NOT EXISTS "email_index" ON "users" ("email");
CREATE UNIQUE INDEX IF NOT EXISTS "user_name_index" ON "users" ("user_name");
DO $$ BEGIN
 ALTER TABLE "documents" ADD CONSTRAINT "documents_folder_id_folder_id_fk" FOREIGN KEY ("folder_id") REFERENCES "folder"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "documents" ADD CONSTRAINT "documents_owner_users_id_fk" FOREIGN KEY ("owner") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "folder" ADD CONSTRAINT "folder_owner_users_id_fk" FOREIGN KEY ("owner") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "tags_to_document" ADD CONSTRAINT "tags_to_document_document_id_documents_id_fk" FOREIGN KEY ("document_id") REFERENCES "documents"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "tags_to_document" ADD CONSTRAINT "tags_to_document_tag_id_tag_id_fk" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "tags_to_folder" ADD CONSTRAINT "tags_to_folder_folder_id_folder_id_fk" FOREIGN KEY ("folder_id") REFERENCES "folder"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "tags_to_folder" ADD CONSTRAINT "tags_to_folder_tag_id_tag_id_fk" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "tagset" ADD CONSTRAINT "tagset_tags_tag_id_fk" FOREIGN KEY ("tags") REFERENCES "tag"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_role_role_id_fk" FOREIGN KEY ("role") REFERENCES "role"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_tagset_tagset_id_fk" FOREIGN KEY ("tagset") REFERENCES "tagset"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
