import { Text, Table, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import { Topic } from "./Topic";

export interface PageTableProps {
  rows: { id: string; title: string; topicIds: string[] }[];
}

export function PageTable({ rows }: PageTableProps) {
  return (
    <>
      <Table striped>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Topics</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((row) => (
            <Table.Tr key={row.id}>
              <Table.Td>
                <Link to={row.id}>
                  <Text fw={900}>{row.id}</Text>
                </Link>
              </Table.Td>
              <Table.Td>
                <Text>{row.title}</Text>
              </Table.Td>
              <Table.Td>
                <Group gap="xs">
                  {row.topicIds.map((topicId) => (
                    <Topic id={topicId} />
                  ))}
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}
