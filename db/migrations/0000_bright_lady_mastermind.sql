CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userName" text,
	"name" varchar(256),
	"password" varchar(256),
	"email" varchar(256) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
