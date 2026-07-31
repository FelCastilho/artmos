import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const planets = defineCollection({
    loader: glob({
        base: "./src/content/planets",
        pattern: "**/*.{md,mdx}",
    }),

    schema: z.object({
        title: z.string(),
        category: z.literal("planet"),
        type: z.string(),

        code: z.string(),

        distance: z.string(),
        temperature: z.string(),
        gravity: z.string().optional(),

        image: z.string(),

        featured: z.boolean().default(false),
        publishedAt: z.coerce.date(),
    }),
});

export const collections = {
    planets,
};