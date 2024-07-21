import add from "virtual:add";
import env from "virtual:env";

export default function VirtualPluginTest() {
  const a = add(1, 2);

  console.log("env", env);

  return (
    <>
      <h1>{a}</h1>
    </>
  );
}
