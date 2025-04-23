import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Presidente FC 2" },
    { name: "Novo MVP", content: "Welcome to Presidente FC" },
  ];
};

export default function Index() {
  return <div></div>;
}
