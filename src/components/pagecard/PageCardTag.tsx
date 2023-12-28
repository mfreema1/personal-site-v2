import { Button } from "@mantine/core";
import { forwardRef } from "react";
import { GlossaryBadge, GlossaryBadgeProps } from "../GlossaryBadge";

export type PageCardTagProps = GlossaryBadgeProps;

export const PageCardTag = forwardRef<GlossaryBadgeProps, PageCardTagProps>(
  (props, ref) => (
    <Button
      radius="xl"
      size="compact-xs"
      component={GlossaryBadge}
      ref={ref}
      {...props}
    />
  ),
);
