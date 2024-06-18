import { z, defineCollection } from "astro:content";

const caseStudiesCollection = defineCollection({
    type: "content",
    schema: z.object({
        audience: z.string(),
        description: z.string(),
        duration: z.string(),
        hero: z.object({
            alt: z.string().optional(),
            isEmbed: z.boolean(),
            caption: z.string(),
            url: z.string(),
        }),
        id: z.number(),
        tags: z.array(z.string()),
        thumbnail: z.object({
            alt: z.string(),
            url: z.string(),
        }),
        title: z.string(),
        year: z.number(),
    }),
});

export const collections = {
    "case-studies": caseStudiesCollection,
};
