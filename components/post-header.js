import DateFormatter from "./date-formatter";

export default function PostHeader({
  title,
  subtitle,
  coverImage,
  date,
  author,
  time,
}) {
  return (
    <div className="my-16 post-header">
      <h1 className="mb-4 font-bold text-4xl">{title}</h1>
      {subtitle && (
        <p className="text-black-lighter font-normal text-xl leading-snug">
          {subtitle}
        </p>
      )}
      <div className="flex flex-row items-center mt-4">
        <div className="text-base leading-tight">
          <span className="font-medium">{author.name}</span>
          <br />
          <span className="text-black-lighter">
            <DateFormatter dateString={date} /> • {time.text}
          </span>
        </div>
      </div>
    </div>
  );
}
