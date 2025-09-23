import path from "node:path";
import type { PrismaConfig } from "prisma";

export default {
  schema: path.join("prisma"),
  migrations: {
    path: path.join("db", "migrations"),
    seed: path.join("db", "seed"),
  },
  views: {
    path: path.join("db","views"),
  },
  typedSql: {
    path: path.join("db", "queries")
  }
} satisfies PrismaConfig
