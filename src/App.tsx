import './App.css'
import { TextField, Stack, Button } from '@mui/material'

function App() {

  return (
    <Stack alignItems="center" height="100vh" mt={4}>
      <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
      <TextField variant="outlined" color='primary' placeholder='Search for an Icon' sx={{
        width: '500px',
      }}/>
      <Button variant="contained" color='primary' sx={{
        padding: '15px'
      }}>Search</Button>
      </div>
    </Stack>
  )
}

export default App
