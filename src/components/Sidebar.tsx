import React from 'react';
import { Typography, Button, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import SettingsIcon from '@mui/icons-material/Settings';
import LoopIcon from '@mui/icons-material/Loop';
import './Sidebar.scss';

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
            <Button className="sidebar-item" variant="text" fullWidth startIcon={<HomeIcon />}>
              Overview
            </Button>
            <Button className="sidebar-item" variant="text" fullWidth startIcon={<FilterAltIcon />}>
              Funnels
            </Button>
            <Button className="sidebar-item" variant="text" fullWidth startIcon={<HomeIcon />}>
              Leads
            </Button>
            <Button className="sidebar-item" variant="text" fullWidth startIcon={<FolderOpenIcon />}>
              Segments
            </Button>
            <Button className="sidebar-item" variant="text" fullWidth startIcon={<LoopIcon />}>
              Workflows
            </Button>
            <Button className="sidebar-item" variant="text" fullWidth startIcon={<HomeIcon />}>
              Integrations
            </Button>
            <Button className="sidebar-item" variant="text" fullWidth startIcon={<SettingsIcon />}>
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
