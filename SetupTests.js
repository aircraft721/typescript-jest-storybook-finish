const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
const axe = require('jest-axe');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
//extend expect method for accessibility usage
expect.extend(axe.toHaveNoViolations);