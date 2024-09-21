import React from 'react';
import { Card, Typography, Button, Box, Paper } from '@mui/material';
import './YourComponent.scss';  // Import your SCSS

const SurfaceTagCard: React.FC = () => {
  return (
    <Card className="surface-tag-card">
      <Box className="surface-tag-header">
        <Typography variant="h6">Install the Surface Tag</Typography>
        <Typography variant="body2">Enable tracking and analytics.</Typography>
      </Box>

      <Paper className="code-block" elevation={0}>
        <pre>
          {`<script>
  (function(w, d, s, l, t) {
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
</script>`}
        </pre>
      </Paper>

      <Box className="button-group">
        <Button variant="outlined" size="small">Copy Snippet</Button>
        <Button variant="contained" size="small">Test connection</Button>
      </Box>
    </Card>
  );
};

export default SurfaceTagCard;
