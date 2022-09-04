import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course}></Total>
  </div>
);

export default Course;
