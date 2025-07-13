CREATE TABLE "pre_orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"full_name" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "pre_orders_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DROP TABLE "user" CASCADE;