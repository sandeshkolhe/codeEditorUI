import React from 'react';
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
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './MainContent.scss';

const SnippetBox: React.FC = () => {
  const snippet = `
    <script>
      (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          'surface.start': new Date().getTime(),
          event: 'surface.js'
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'surface' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.surface-analytics.com/tag.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'surface', 'SURFACE_TAG_ID');
    </script>
  `;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippet);
    alert('Snippet copied to clipboard!');
  };

  return (
    <div className="snippet-box">
      <pre className="snippet-content">{snippet}</pre>
      <Button variant="contained" color="primary" className="test-connection">
        Test Connection
      </Button>
    </div>
  );
};

const MainContent: React.FC = () => {
  const [isTagInstalled, setIsTagInstalled] = React.useState(false); // Example state for tag installation
  const [isTagTested, setIsTagTested] = React.useState(false); // State for tag test status

  return (
    <div className="main-content">
      <Typography variant="h4" className="main-heading">
        Getting Started
      </Typography>

      {/* First Accordion: Install Surface Tag */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="accordion-summary-content"
        >
          {/* Status Icon */}
          <div className="status-icon">
            {isTagInstalled ? (
              <CheckCircleIcon className="success" />
            ) : (
              <CancelIcon className="error" />
            )}
          </div>

          {/* Title and subtitle */}
          <div className="accordion-title">
            <Typography variant="subtitle1">Install Surface Tag</Typography>
            <Typography variant="body2" className="analytics-info">
              Enable tracking and analytics
            </Typography>
          </div>

          {/* Install Tag Button */}
          {!isTagInstalled && (
            <Button
              variant="contained"
              color="primary"
              className="install-tag-button"
            >
              Install Tag
            </Button>
          )}
        </AccordionSummary>
        <AccordionDetails>
          <SnippetBox />
        </AccordionDetails>
        <Alert severity="success">This is a success Alert.</Alert>
        <Alert severity="error">This is a success Alert.</Alert>
        <Button
              variant="contained"
              color="primary"
              className="try-again-button"
            >
              Try Again
            </Button>
      </Accordion>

      {/* Second Accordion: Test Surface Tag Events */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="accordion-summary-content"
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
            <Typography variant="subtitle1">Test Surface Tag Events</Typography>
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
