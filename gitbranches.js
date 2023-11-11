const simpleGit = require('simple-git')();

const createBranch = () => {
  simpleGit.checkoutBranch('Phase2_Activity3_1', (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Created branch: Phase2_Activity3_1');
  });
};

createBranch();
