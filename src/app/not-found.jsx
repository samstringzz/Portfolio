import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

export default function NotFound() {
  return (
    <PageContainer className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="text-sm font-medium text-emerald-400">404</p>
      <h1 className="mt-2 text-3xl font-semibold text-white">Page not found</h1>
      <p className="mt-3 max-w-md text-gray-400">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-[#061018] transition hover:bg-emerald-300"
      >
        Back to home
      </Link>
    </PageContainer>
  );
}
