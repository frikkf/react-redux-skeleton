import { combineEpics } from 'redux-observable';

import {incrementEpic,decrementEpic,storeResultEpic} from '../counter/Counter/epics';
import {epics} from '../users/index';
import * as login from '../login/index';

export const rootEpics = combineEpics(
    incrementEpic, 
    decrementEpic,
    storeResultEpic, 
    epics.fetchUsersEpic,
    login.epics.login);
