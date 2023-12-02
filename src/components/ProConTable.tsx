import { Table } from "@mantine/core";
import { Txt } from "./Text";

export interface ProConTableProps {
  pros: React.ReactNode[];
  cons: React.ReactNode[];
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
            <Table.Th>
              <Txt s="san">Pros</Txt>
            </Table.Th>
            <Table.Th>
              <Txt s="san">Cons</Txt>
            </Table.Th>
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
