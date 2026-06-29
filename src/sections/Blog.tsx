import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";

export default function Blog() {
  return (
    <section id="blog" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Technical Writing"
          title="Latest Articles"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {blogs.slice(0, 6).map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://medium.com/@ChukwuemekaPeterEze"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            View All Articles on Medium →
          </a>
        </div>
      </div>
    </section>
  );
}