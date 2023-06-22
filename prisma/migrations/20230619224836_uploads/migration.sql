-- CreateTable
CREATE TABLE "uploads" (
    "id" SERIAL NOT NULL,
    "content_type" VARCHAR(255),
    "metadata" JSONB,

    CONSTRAINT "uploads_pkey" PRIMARY KEY ("id")
);
