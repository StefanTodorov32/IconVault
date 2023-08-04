import { TextField, Button } from '@mui/material';

export const Header = () => {
    return (
        <div style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center'
        }}>
            <TextField variant="outlined" color='primary' placeholder='Search for an Icon' sx={{
                width: '500px',
            }} />
            <Button variant="contained" color='primary' sx={{
                padding: '15px'
            }}>Search</Button>
        </div>
    )
}
