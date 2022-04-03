import '../scss/app.scss';
import Game from './game';
import View from './view';
import Controller from './controller';

const root = document.querySelector('#root');

const game = new Game();
const view = new View(root, 540, 640, 20, 10);
const controller = new Controller(game, view);

window.game = game;
window.view = view;
window.controller = controller;