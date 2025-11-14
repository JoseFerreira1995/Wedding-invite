interface PropTypes {
  title: string;
  description: string;
  img?: never;
}

export default function Card(props: PropTypes) {
  return (
    <div >
      <h1>{props.title}</h1>
      <h2> {props.description}</h2>
    </div>
  );
}
