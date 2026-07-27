import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
  tags = [],
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
  tags?: string[];
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-5 rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-blue-950/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.08] hover:shadow-cyan-950/40",
        className,
      )}
    >
      {header}
      <div>
        <div className="mb-3 flex items-center gap-2 text-cyan-200">
          {icon}
          <span className="text-xs font-bold uppercase tracking-[0.25em]">Case study</span>
        </div>
        <div className="text-xl font-bold text-white transition duration-200 group-hover/bento:text-orange-200">
          {title}
        </div>
        <div className="mt-3 text-sm leading-6 text-slate-300">
          {description}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-cyan-200/10 bg-cyan-200/10 px-3 py-1 text-xs text-cyan-100">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};
