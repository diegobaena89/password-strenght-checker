import { ListIcon, ListItem } from "@chakra-ui/react";
import { IconType } from "react-icons";

type CustomIconType = IconType | React.ElementType;

interface ListItemProps {
  icon: CustomIconType;
  color: string;
  text: string;
}

export const ListItemComponent: React.FC<ListItemProps> = ({
  icon,
  color,
  text,
}) => {
  return (
    <ListItem>
      <ListIcon as={icon} color={color} />
      {text}
    </ListItem>
  );
};
