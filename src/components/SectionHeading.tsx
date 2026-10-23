type SectionHeadingProps = {
  index: string;
  title: string;
  kicker: string;
};

export default function SectionHeading({
  index,
  title,
  kicker,
}: SectionHeadingProps) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
      <div className="flex items-baseline gap-3">
        <p className="font-[family-name:var(--font-label)] text-[11px] tracking-[0.18em] text-[#c4b5fd]">
          {index}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-[#f7f4ff]">
          {title}
        </h2>
      </div>
      <p className="font-[family-name:var(--font-label)] text-xs text-[#8e86a3]">
        {kicker}
      </p>
    </div>
  );
}
