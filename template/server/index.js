const express = require('express');
const path = require('path');
const fs = require('fs');

const resolvePort = port => parseInt(port, 10);

const portData = process.env.REACT_APP_PORT || 9001;
const PORT = resolvePort(portData);

let publicPath = '';

const isProduction = process.env.NODE_ENV === 'production';
const App = express();

if (isProduction) {
  App.disable('x-powered-by');
}

publicPath = path.join(__dirname, '..', 'build');

App.use(express.urlencoded({ extended: false }));
App.use(express.json());
App.use(express.static(publicPath));

App.get('/*', function (req, res) {
  const filePath = path.resolve(publicPath, 'index.html');
  res.sendFile(filePath);
});

App.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`);
});
