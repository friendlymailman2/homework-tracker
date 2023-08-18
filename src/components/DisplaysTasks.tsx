import { List, ListItem } from "@mui/material";
import { useFirebaseData } from "../hooks/useFirebaseData";
import { TaskListItem } from "./TaskListItem";

export const DisplayTasks = () => {
  const { fullArray } = useFirebaseData();
  return (
    <List
      sx={{
        color: "white",
        marginTop: "10px",
        maxHeight: "400px",
        overflow: "auto",
      }}
    >
      {fullArray.map((doc, index) => {
        return <TaskListItem doc={doc} index={index} key={doc.id} />;
      })}
    </List>
  );
};
