import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#FFF1C2',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #757575'
    },
}));

export default function CustomTooltip({ displayText, description }) {
    return (
        <HtmlTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit"><b>{displayText}</b></Typography>
                    {description}
                </React.Fragment>
            }
        >
            <b>{displayText}</b>
        </HtmlTooltip>
    );
}