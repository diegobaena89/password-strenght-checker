import { ListIcon, ListItem } from "@chakra-ui/react";

interface ListItemProps {
  icon: any; // TYPE THIS PROPS
  color: string;
  text: string;
}

export const ListItemComponent = ({ icon, color, text }: ListItemProps) => {
  return (
    <ListItem>
      <ListIcon as={icon} color={color} />
      {text}
    </ListItem>
  );
};
