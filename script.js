const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.8;

const scoreDiv = document.getElementById('score');
const coinsDiv = document.getElementById('coins');
const startBtn = document.getElementById('startBtn');
const retryBtn = document.getElementById('retryBtn');
const shopBtn = document.getElementById('shopBtn');

const shopPopup = document.getElementById('shopPopup');
const closeShopBtn = document.getElementById('closeShop');

const popupMessage = document.getElementById('popupMessage');
const closePopupBtn = document.getElementById('closePopup');

let gameInterval;
let obstacles = [];
let trainSpeed = 5;
let score = 0;
let coins = 0;
let gameRunning = false;
let startTime;
let lastObstacleTime = 0;

let skin = "cyberpunk"; // default skin
let skins = {
    "cyberpunk": "Cyberpunk Boy",
    "sakura": "Sakura Naruto",
    "firefly": "Firefly Honkai"
};

// Time segments in milliseconds
const timeSegments = {
    first: 15000,
   
