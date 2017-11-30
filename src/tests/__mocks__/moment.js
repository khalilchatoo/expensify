// import moment from 'moment' in jest mock files:
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
	return moment(timestamp);
};