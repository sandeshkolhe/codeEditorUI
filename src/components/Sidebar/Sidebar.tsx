import React from 'react';
import { Typography, Button, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import './Sidebar.scss';
import homeIcon from '../../assets/homeIcon.png';
import funnelsIcon from '../../assets/funnelsIcon.png';
import leadsIcon from '../../assets/leadsIcon.png';
import segmentsIcon from '../../assets/segmentsIcon.png';
import IntegrationIcon from '../../assets/IntegrationIcon.png';
import settingsIcon from '../../assets/settingsIcon.png';
import workflowIcon from '../../assets/workflowIcon.png';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Typography variant="h5" component="h1" className="logo">
          <span className="logo-surface">surface</span>
          <span className="logo-labs">labs</span>
        </Typography>
      </div>
      <Divider />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" style={{ display: 'flex', alignItems: 'center' }}>
            <PersonIcon fontSize="small" style={{ marginRight: '8px' }} />
            My Workspace
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <nav className="sidebar-nav">
            <Button className="sidebar-item selected" variant="text" fullWidth startIcon={<CircleOutlinedIcon />}>
              Getting Started
            </Button>
            <Button className="sidebar-item" variant="text" fullWidth startIcon={<img src={homeIcon} alt="Settings" />}>
              Overview
            </Button>
            <Button className="sidebar-item" variant="text" fullWidth startIcon={<img src={funnelsIcon} alt="Settings" />}>
              Funnels
            </Button>
            <Button className="sidebar-item" variant="text" fullWidth startIcon={<img src={leadsIcon} alt="Settings" />}>
              Leads
            </Button>
            <Button className="sidebar-item" variant="text" fullWidth startIcon={<img src={segmentsIcon} alt="Settings" />}>
              Segments
            </Button>
            <Button className="sidebar-item" variant="text" fullWidth startIcon={<img src={workflowIcon} alt="workflowIcon" />}>
              Workflows
            </Button>
            <Button className="sidebar-item" variant="text" fullWidth startIcon={<img src={IntegrationIcon} alt="IntegrationIcon" />}>
              Integrations
            </Button>
            <Button className="sidebar-item" variant="text" fullWidth startIcon={<img src={settingsIcon} alt="Settings" />}>
              Settings
            </Button>
          </nav>
        </AccordionDetails>
      </Accordion>

      <Divider />
      <div className="sidebar-footer">
        <div className="profile">
          <img src="https://via.placeholder.com/40" alt="Profile" className="profile-pic" />
          <div>
            <Typography variant="body2" className="full-name">Chris Hood</Typography>
            <Typography variant="caption" color="textSecondary" className="email">hello@example.com</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;