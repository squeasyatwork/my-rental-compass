import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("../components/header"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return <DynamicHeader />;
}
