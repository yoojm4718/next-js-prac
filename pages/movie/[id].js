import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  return <h1>{router.query.id}</h1>;
}
