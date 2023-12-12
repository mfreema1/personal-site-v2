import { Table } from "@mantine/core";
import { TBodyText } from "./text/TBodyText";
import { THeaderText } from "./text/THeaderText";

export interface TableEntry {
  header: React.ReactNode;
  content: React.ReactNode;
}

export interface ProConTableProps {
  pros: TableEntry[];
  cons: TableEntry[];
}

export function ProConTable(props: ProConTableProps) {
  return (
    <>
      <Table striped>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <THeaderText>Pros</THeaderText>
            </Table.Th>
            <Table.Th>
              <THeaderText>Cons</THeaderText>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {getRows(props).map((row) => (
            <>
              <Table.Tr>
                <Table.Td>
                  {wrapHeader(row.pro.header)}
                  {wrapBody(row.pro.content)}
                </Table.Td>
                <Table.Td>
                  {wrapHeader(row.con.header)}
                  {wrapBody(row.con.content)}
                </Table.Td>
              </Table.Tr>
            </>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}

interface Row {
  pro: TableEntry;
  con: TableEntry;
}

function getRows({ pros, cons }: ProConTableProps): Row[] {
  return Array.from(Array(Math.max(pros.length, cons.length)), (_, i) => ({
    pro: pros[i],
    con: cons[i],
  }));
}

function wrapHeader(child: React.ReactNode): React.ReactNode {
  return typeof child === "string" ? <THeaderText>{child}</THeaderText> : child;
}

function wrapBody(child: React.ReactNode): React.ReactNode {
  return typeof child === "string" ? <TBodyText>{child}</TBodyText> : child;
}
