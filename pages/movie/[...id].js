import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const [title, id] = params;
  return (
    <>
      <Seo title={title} />
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
