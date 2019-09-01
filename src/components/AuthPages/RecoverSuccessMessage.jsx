import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

export const RecoverSuccessMessage = withRouter(() => (
  <div className="success">
    <Glyphicon glyph="ok" />
    <p>Your password has been reset.</p>
    <p>
      <Link to="/login">
        Click here to login with your new credentials.
        </Link>
    </p>
  </div>
));