import { GetServerSideProps } from "next";
import { test } from "../lib/test.js";

export const getServerSideProps: GetServerSideProps = async ({
  req,
}): Promise<{ props: {} }> => {
  test();
  return { props: {} };
};

export default function Home(props: {}) {
  return <div>Hi</div>;
}
