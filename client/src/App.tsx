import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

function App() {

  const [activites, setActivites] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response => setActivites(response.data))

    return () => {}
  }, [])

  return (
    <>
      <Typography variant='h3'>Reactivites</Typography>
      <List>
        {activites.map((activity) => 
          (
          <ListItem key={activity.id}>
            <ListItemText primary={activity.title} />
          </ListItem>
          )
        )}
      </List>
    </>
    )
}

export default App