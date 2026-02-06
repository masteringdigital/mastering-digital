import { trpc } from "@/lib/trpc";

/**
 * Hook to fetch page content from the database
 * Returns a helper function to get content by key with fallback
 */
export function usePageContent(pageId: string) {
  const { data: pageContent, isLoading } = trpc.cms.pageContent.getPage.useQuery({ pageId });

  const getContent = (sectionId: string, contentKey: string, fallback: string = "") => {
    if (!pageContent) return fallback;
    const item = pageContent.find(
      (content) => content.sectionId === sectionId && content.contentKey === contentKey
    );
    return item?.contentValue || fallback;
  };

  return { pageContent, isLoading, getContent };
}
