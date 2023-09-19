import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { EventNoteRounded } from '@mui/icons-material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#F9DE89',
    boxShadow: 24,
    p: 4,
    color: '#252525',
    borderRadius: '10px 10px'
};

export default function QuizModal() {
    const [open, setOpen] = React.useState(false);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [enteredChoice, setEnteredChoice] = React.useState(-1);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleClick = (e) => {
        setPageNumber(2);
        setEnteredChoice(e.target.value);
    }

    return (
        <div>
            <Button onClick={handleOpen}><Image src="/resources_quiz_icon.gif"
                alt="information"
                width={50}
                height={50} style={{ border: '1px solid #6864F7', borderRadius: '3px 3px' }} /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {pageNumber === 1 && (<div>
                        <Typography id="modal-modal-title" variant="h4" component="h2" >
                            The average weekly rental in Melbourne is..
                        </Typography>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="500"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="350" control={<Radio onClick={handleClick} />} label="350" />
                                <FormControlLabel value="500" control={<Radio />} label="500" />
                                <FormControlLabel value="750" control={<Radio />} label="750" />
                            </RadioGroup>
                        </FormControl>
                    </div>)}
                    {pageNumber === 2 && enteredChoice === "500" ? (<Typography>Correct!</Typography>) : (<div>
                        <Typography className="text-center font-large">Wrong! The average weekly rental in Melbourne is A$500.</Typography>
                        <Typography className="text-center font-large" onClick={setPageNumber(1)}>Wrong! The average weekly rental in Melbourne is A$500.</Typography></div>)}
                </Box>
            </Modal>
        </div>
    );
}