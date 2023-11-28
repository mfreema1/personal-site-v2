import { Table } from "@mantine/core";

export interface ProConTableProps {
  pros: string[];
  cons: string[];
}

export function ProConTable({ pros, cons }: ProConTableProps) {
  const rows = Array.from(Array(Math.max(pros.length, cons.length)), (_, i) => {
    return { pro: pros[i], con: cons[i] };
  });

  return (
    <>
      <Table striped>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Pros</Table.Th>
            <Table.Th>Cons</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((row) => (
            <>
              <Table.Tr>
                <Table.Td>{row.pro}</Table.Td>
                <Table.Td>{row.con}</Table.Td>
              </Table.Tr>
            </>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}
