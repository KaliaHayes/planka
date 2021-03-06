import { all, takeLatest } from 'redux-saga/effects';

import { createTaskInCurrentCardService, deleteTaskService, updateTaskService } from '../services';
import EntryActionTypes from '../../../constants/EntryActionTypes';

export default function* () {
  yield all([
    /* eslint-disable max-len */
    takeLatest(EntryActionTypes.TASK_IN_CURRENT_CARD_CREATE, ({ payload: { data } }) => createTaskInCurrentCardService(data)),
    takeLatest(EntryActionTypes.TASK_UPDATE, ({ payload: { id, data } }) => updateTaskService(id, data)),
    /* eslint-enable max-len */
    takeLatest(EntryActionTypes.TASK_DELETE, ({ payload: { id } }) => deleteTaskService(id)),
  ]);
}
