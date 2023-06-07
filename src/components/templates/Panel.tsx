export default function Panel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-lg bg-white shadow ${className}`}>
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}
