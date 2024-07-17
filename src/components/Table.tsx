import { Column, Table } from "react-virtualized";

const data = Array.from({ length: 1000 }, (_, i) => ({
  name: `Name ${i}`,
  age: i
}));

const MyTable = () => (
  <Table
    width={600}
    height={300}
    headerHeight={20}
    rowHeight={30}
    rowCount={data.length}
    rowGetter={({ index }: { index: number }) => data[index]}
  >
    <Column label="Name" dataKey="name" width={300} />
    <Column label="Age" dataKey="age" width={300} />
  </Table>
);

export default MyTable;
