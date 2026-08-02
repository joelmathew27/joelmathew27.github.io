import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="bg-[#012346]">
      <div
        className={cn(
          "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto bg-[#012346] px-4",
          className
        )}
      >
        {children}
      </div>
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
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-lg transition-all duration-300 p-4 border border-white/[0.05] bg-[#0a1a2e] hover:bg-[#0e1f38] hover:border-white/[0.1] justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-1 transition duration-300">
        <div className="flex items-start gap-2 mb-2">
          <div className="mt-0.5 flex-shrink-0">{icon}</div>
          <div>{title}</div>
        </div>
        <div className="ml-6">{description}</div>
      </div>
    </a>
  );
};