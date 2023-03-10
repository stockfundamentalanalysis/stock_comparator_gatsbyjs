import React from 'react'
import {  
    Button,
    Stack,
    Box,
    styled,
    Typography,
    Text
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from "gatsby"

const GetInTouch = () => {
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            
            
            <Box maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}>
                <Title 
                    text={
                    'Contact us to get the premium version of our software'
                    } 
                textAlign={'center'}
                />

                <CustomTypography >
                    The premium version of our software is available for a monthly fee<br />
                    and includes the following features:<br />
                    1. Target price calculation for any stock<br />
                    2. Target price adaptation based on your growth estimation<br />
                    3. Target price adaptation based on other factors like interest rates a geopolical risks
                </CustomTypography>     
            

                
            </Box>
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            >
                get in touch
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;