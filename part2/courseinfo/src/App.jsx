import Course from "./components/Course";

export default function App() {
  const courses = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        { name: "Fundamentals of React", exercises: 10, id: 1 },
        { name: "Using props to pass data", exercises: 7, id: 2 },
        { name: "State of a component", exercises: 14, id: 3 },
        { name: "Redux", exercises: 11, id: 4 },
      ],
    },
    {
      id: 2,
      name: "Node.js",
      parts: [
        { name: "Routing", exercises: 3, id: 1 },
        { name: "Middleware", exercises: 7, id: 2 },
      ],
    },
  ];

  return (
    <>
      <h1>Fullstackopen curriculum</h1>
      {courses.map((course) => (
        <Course course={course} key={course.id} />
      ))}
    </>
  );
}
