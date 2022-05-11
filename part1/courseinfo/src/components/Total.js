export default function Total(props) {
  return (
    <p>
      Number of exercises:{" "}
      {props.course.parts.reduce((prev, curr) => (prev += curr.exercises), 0)}
    </p>
  );
}
