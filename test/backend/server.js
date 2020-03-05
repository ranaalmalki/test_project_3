const express = require('express');
const app = express();
app.use(express.json());

    






console.log('===== HERE WE END =====');
const PROT = 5000;
app.listen(PROT, () => {
  console.log(`LISTENING to http://localhost:${PROT}`);
});