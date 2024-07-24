import add from "virtual:add";
// import env from "virtual:env";

if (import.meta.hot) {
  // test on
  import.meta.hot.on("my:greetings", (data) => {
    console.log("my:", data.msg);
  });
}

export default function VirtualPluginTest() {
  const a = add(1, 3);

  // console.log("env", env);

  return (
    <>
      <h1>{a}</h1>
    </>
  );
}
