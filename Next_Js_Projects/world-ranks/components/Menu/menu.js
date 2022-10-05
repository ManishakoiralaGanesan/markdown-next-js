export default function Menu() {
  const list = ["apple", "orange", "papaya"];
  return (
    <div>
      <select name="fruits">
        {list.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
}
