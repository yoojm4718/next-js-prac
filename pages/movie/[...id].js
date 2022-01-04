import { useRouter } from "next/router";

export default function Detail({ params }) {
  const [title, id] = params;
  return (
    <>
      <h1>{title}</h1>
      <span>{id}</span>
    </>
  );
}

export function getServerSideProps(ctx) {
  return {
    props: {
      params: ctx.params.id,
    },
  };
}
