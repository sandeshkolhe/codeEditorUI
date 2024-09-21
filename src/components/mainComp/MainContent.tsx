import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  Table,
  TableRow,
  Alert,
  TextField,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './MainContent.scss';
import CodeEditor from './CodeEditor/CodeEditor';

const MainContent: React.FC = () => {
  const [isTagInstalled, setIsTagInstalled] = React.useState(false); 
  const [isTagTested, setIsTagTested] = React.useState(false);
  const [expanded, setExpanded] = useState<string | false>(false); 

  const [isLoading, setIsLoading] = useState(false);
  const handleButtonClick = (panel: string) => {
    if (!isLoading) {
      setExpanded(expanded === panel ? false : panel);
    }
  };
  const handleTestTag = (panel: string) => {
    if (!isLoading) {
      setExpanded(expanded === panel ? false : panel);
    }
  };

  return (
    <div className="main-content">
      <Typography variant="h4" className="main-heading">
        Getting Started
      </Typography>

      <hr className='horizontalLine'/>

      <Accordion expanded={expanded === 'panel1'}>
        <AccordionSummary
          // expandIcon=none
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="accordion-summary-content"
          onClick={(event) => event.preventDefault()}
        >
          { 
          <div className="status-icon">
            {isTagInstalled ? (
              <CheckCircleIcon className="success" />
            ) : (
              <CancelIcon className="error" />
            )}
          </div>}

          {/* Title and subtitle */}
          <div className="accordion-title">
            <Typography variant="subtitle1"><strong>Install Surface Tag</strong></Typography>
            <Typography variant="body2" className="analytics-info">
              Enable tracking and analytics
            </Typography>
          </div>

          {!isTagInstalled && (
            <Button
              variant="contained"
              color="primary"
              className="install-tag-button"
              onClick={() => handleButtonClick('panel1')}
              disabled={isLoading}
            >
              Install Tag
            </Button>
          )}
        </AccordionSummary>
        <AccordionDetails>
        <div className='firstAccordianExpanded'>
          <CodeEditor />
        
          <Alert
            severity="success"
            sx={{ backgroundColor: '#EFFAF6', color: '#4CAF50' }}
            // icon={<img src="../assets/alertSuccess.png" alt="Success Icon" style={{ width: 24, height: 24 }} />}
        >
            This is a success Alert.
        </Alert>
        <Alert severity="error">This is a success Alert.</Alert>
        <Alert severity="info">This is a success Alert.</Alert>
        <Button
              variant="contained"
              color="primary"
              className="try-again-button"
            >
              Try Again
            </Button>
            </div>
            </AccordionDetails>
      </Accordion>

      {/* Second Accordion: Test Surface Tag Events */}
      <Accordion expanded={expanded === 'panel2'}>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="accordion-summary-content"
          onClick={(event) => event.preventDefault()}
        >
          {/* Status Icon */}
          <div className="status-icon">
            {isTagTested ? (
              <CheckCircleIcon className="success" />
            ) : (
              <CancelIcon className="error" />
            )}
          </div>

          {/* Title and subtitle */}
          <div className="accordion-title">
            <Typography variant="subtitle1"><strong>Test Surface Tag Events</strong></Typography>
            <Typography variant="body2" className="analytics-info">
              Test if surface tag is properly emitting events
            </Typography>
          </div>

          {/* Test Tag Button */}
          {!isTagTested && (
            <Button
              variant="contained"
              color="primary"
              className="test-tag-button"
              onClick={() => handleTestTag('panel2')}
              disabled={isLoading}
            >
              Test Tag
            </Button>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Event testing details will go here.</Typography>
        </AccordionDetails>
        <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>Visitor</TableCell>
            <TableCell>Metadata</TableCell>
            <TableCell>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row, index) => ( */}
            <TableRow >
              {/* <TableCell>{row.event}</TableCell>
              <TableCell>{row.visitor}</TableCell>
              <TableCell>{row.metadata}</TableCell>
              <TableCell>{row.createdAt}</TableCell> */}
               <TableCell>Test</TableCell>
              <TableCell>row.visitor</TableCell>
              <TableCell>row.metadata</TableCell>
              <TableCell>row.createdAt</TableCell>
            </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
      </Accordion>
    </div>
  );
};

export default MainContent;
