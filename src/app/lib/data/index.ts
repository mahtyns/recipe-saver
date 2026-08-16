import { postgresRepository } from "@/app/lib/data/postgres.repo";
import { mockRepository } from "@/app/lib/data/mock.repo";
import type { DataRepository } from "@/app/lib/data/repository";

export function getRepository(): DataRepository {
    const useMock = process.env.DATA_SOURCE === "mock" || !!process.env.NETLIFY;
    return useMock ? mockRepository : postgresRepository;
}