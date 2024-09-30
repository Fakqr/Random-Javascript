(function() {
    var game = document.getElementById('gameArea');
    var player = document.getElementById('player');

    function createCoin(amount) {
        if (isGameOver) return;
        for (let i = 1; i < amount; i++) {
            const coin = document.createElement('div');
            coin.classList.add('coin');
            coin.style.top = Math.random() * (gameArea.offsetHeight - 10) + 'px';
            coin.style.left = Math.random() * (gameArea.offsetWidth - 10) + 'px';
            game.appendChild(coin);
            coins.push(coin);
        };
    };
    
    setInterval(function() {
        var COINSPEED = 5;

        function moveCoinsTowardsPlr() {
            if (isGameOver) return;

            const playerRect = player.getBoundingClientRect();

            coins.forEach(dot => {
                if (!immunity) {
                    const dotRect = dot.getBoundingClientRect();
                    let dotTop = parseFloat(dot.style.top) || 0;
                    let dotLeft = parseFloat(dot.style.left) || 0;

                    const dx = playerRect.left - dotRect.left;
                    const dy = playerRect.top - dotRect.top;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance > 0) {
                        const moveX = (dx / distance) * COINSPEED;
                        const moveY = (dy / distance) * COINSPEED;
                        dotTop += moveY;
                        dotLeft += moveX;
                    }

                    coins.forEach(otherDot => {
                        if (dot !== otherDot) {
                            const otherRect = otherDot.getBoundingClientRect();
                            const otherDx = otherRect.left - dotRect.left;
                            const otherDy = otherRect.top - dotRect.top;
                            const otherDistance = Math.sqrt(otherDx * otherDx + otherDy * otherDy);
                            const minDistance = dotRect.width;

                            if (otherDistance < minDistance) {
                                const angle = Math.atan2(otherDy, otherDx);
                                dotTop -= Math.sin(angle) * COINSPEED;
                                dotLeft -= Math.cos(angle) * COINSPEED;
                            }
                        }
                    });

                    dot.style.top = dotTop + 'px';
                    dot.style.left = dotLeft + 'px';
                }
            });
        }

        moveCoinsTowardsPlr();
    }, 1);

    setInterval(function() {
    powerups.forEach(powerup => {
        powerup.remove();
    });
    
    redDots.forEach(dot => {
        dot.remove();
    });

    createCoin(2);
}, 100);
})();

function spawnPowerup() {};
function spawnRedDot() {};
function spawnCoin() {};
