import { GetStaticPaths, GetStaticProps } from "next";
import { Ninja } from "../../interfaces/interfaces";

interface DetailsProps {
  ninja: Ninja;
}

function Details({ ninja }: DetailsProps) {
  console.log(ninja);
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
}

export default Details;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((item: Ninja) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);

  const data: Ninja = await res.json();

  return {
    props: {
      ninja: data,
    },
  };
};
