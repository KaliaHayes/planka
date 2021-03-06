import socket from './socket';
import { transformCard } from './cards';

/* Actions */

const createBoard = (projectId, data, headers) => socket.post(`/projects/${projectId}/boards`, data, headers);

const getBoard = (id, headers) => socket.get(`/boards/${id}`, undefined, headers).then((body) => ({
  ...body,
  included: {
    ...body.included,
    cards: body.included.cards.map(transformCard),
  },
}));

const updateBoard = (id, data, headers) => socket.patch(`/boards/${id}`, data, headers);

const deleteBoard = (id, headers) => socket.delete(`/boards/${id}`, undefined, headers);

export default {
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard,
};
