export default function Total({ course }) {
  return (
    <p>
      Number of exercises:{" "}
      {course.parts.reduce((prev, curr) => (prev += curr.exercises), 0)}
    </p>
  );
}
