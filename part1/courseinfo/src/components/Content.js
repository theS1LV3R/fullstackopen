import Part from "./Part";

export default function Content(props) {
  return (
    <>
      <Part part={props.parts[0].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
      <Part part={props.parts[3].name} exercises={props.parts[3].exercises} />
    </>
  );
}
