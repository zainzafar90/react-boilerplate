// General utility functions
import moment from "moment";

import { DATE } from "constants";

// Parameter is a parsable moment value (timestamp is in milliseconds)
export const formattedDate = (date) => moment(date).format(DATE.DATE_ONLY);

export const formattedTime = (date) => moment(date).format(DATE.TIME_ONLY);

export const formattedDateTime = (date) => moment(date).format(DATE.DATE_TIME);
