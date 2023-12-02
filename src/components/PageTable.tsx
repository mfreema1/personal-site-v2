import { Table, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import { Topic } from "./Topic";
import { Txt } from "./Text";

export interface PageTableProps {
  rows: { id: string; title: string; topicIds: string[] }[];
}

export function PageTable({ rows }: PageTableProps) {
  return (
    <>
      <Table striped>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Txt s="san" b>
                ID
              </Txt>
            </Table.Th>
            <Table.Th>
              <Txt s="san" b>
                Title
              </Txt>
            </Table.Th>
            <Table.Th>
              <Txt s="san" b>
                Topics
              </Txt>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((row) => (
            <Table.Tr key={row.id}>
              <Table.Td>
                <Link to={row.id}>
                  <Txt s="san" b>
                    {row.id}
                  </Txt>
                </Link>
              </Table.Td>
              <Table.Td>
                <Txt s="san">{row.title}</Txt>
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
