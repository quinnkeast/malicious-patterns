export default function PostBody({ content }) {
  return (
    <div className="my-12">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
