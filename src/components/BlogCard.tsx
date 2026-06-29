type Blog = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  link: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-cyan-400 dark:border-slate-800 dark:bg-slate-900">
      <img
        src={blog.image}
        alt={blog.title}
        className="h-56 w-full object-cover"
      />
      <div className="p-8">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-cyan-500 px-3 py-1 text-sm font-semibold text-slate-950">
            {blog.category}
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {blog.date}
          </span>
        </div>
        <h3 className="text-2xl font-bold">{blog.title}</h3>
        <p className="mt-4 leading-7 text-slate-500 dark:text-slate-400">
          {blog.excerpt}
        </p>
        <a       
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Read on Medium →
        </a>
      </div>
    </div>
  );
}