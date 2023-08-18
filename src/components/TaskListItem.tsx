import { CheckBox } from "@mui/icons-material";
import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useFirebaseData } from "../hooks/useFirebaseData";

export const TaskListItem = (props: any) => {
  const doc = props.doc;
  const index = props.index;
  const { deleteTask } = useFirebaseData();
  return (
    <ListItem
      style={{ color: "white" }}
      sx={{ display: "list-item" }}
      disableGutters
    >
      <ListItemButton>
        <Checkbox onClick={() => deleteTask(doc.id, index)} />
        <ListItemText
          id={doc.id}
          primary={`${doc.data().className}: ${doc.data().taskDesc}`}
        />
      </ListItemButton>
    </ListItem>
  );
};
