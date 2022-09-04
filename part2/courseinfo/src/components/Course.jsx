import Content from "./Content";
import Header from "./Header";

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content course={course} />
  </div>
);

export default Course;
