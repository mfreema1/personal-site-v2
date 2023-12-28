import { Badge } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { DetailText } from "./text/DetailText";

export interface GlossaryBadgeProps {
  text: string;
}

export function GlossaryBadge({ text, ...other }: GlossaryBadgeProps) {
  const navigate = useNavigate();
  return (
    <Badge onClick={() => navigate("/glossary")} {...other}>
      <DetailText>{text}</DetailText>
    </Badge>
  );
}
