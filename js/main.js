function fillGround(ground, lineAmount, xOffset, yOffset, grassSizeMin, grassSizeMax, opacityDiff) {
  let width = ground.offsetWidth;
  let height = ground.offsetHeight;
  let marginLeftGround = parseInt(window.getComputedStyle(ground).marginLeft.slice(0, -2));
  let marginLeftFinn = parseInt(window.getComputedStyle(document.getElementById('center')).marginLeft.slice(0, -2));

  let grassArray = [];

  for(let i = width + marginLeftGround - marginLeftFinn*2; i < width + marginLeftGround - marginLeftFinn + window.innerWidth; i = i+xOffset){
    for(let j = 0; j < lineAmount * yOffset; j = j+yOffset){
      let offset = 0;
      if(j % 2){
        offset = 50;
      }else{
        offset = 0;
      }
      let randomX = randomIntBetween(-50, 50);
      let randomY = randomIntBetween(-50, 50);

      let grassCount = randomIntBetween(1, 3);

      let grassSizes = ["grassSize1", "grassSize2", "grassSize3", "grassSize4", "grassSize5", "grassSize6", "grassSize7"]

      if(grassCount === 1){
        let grass = document.createElement("div");
        grass.classList.add('grass');
        grass.classList.add(grassSizes[randomIntBetween(grassSizeMin-1, grassSizeMax-1)]);
        grass.style.marginLeft = (i+randomX+offset)+"px";
        grass.style.marginTop = (j+randomY)+"px";
        grass.style.opacity = ""+Math.random()-opacityDiff;
        if(parseInt(window.getComputedStyle(grass).opacity) <= 0){
          grass.style.opacity = "0.1";
        }
        let angle = randomIntBetween(-50, 0);
        grass.style.transform = "rotate("+angle+"deg)";
        grassArray.push(grass);
        ground.appendChild(grass);
      }
      if(grassCount === 2){
        let grass1 = document.createElement("div");
        let grass2 = document.createElement("div");
        let angle = randomIntBetween(-90, -20);
        let distance = angle / 4;
        grass1.classList.add('grass');
        grass1.classList.add(grassSizes[randomIntBetween(grassSizeMin-1, grassSizeMax-1)]);
        grass1.style.marginLeft = (i+randomX+offset)+"px";
        grass1.style.marginTop = (j+randomY)+"px";
        grass2.classList.add('grass');
        grass2.classList.add(grassSizes[randomIntBetween(grassSizeMin-1, grassSizeMax-1)]);
        grass2.style.marginLeft = (i+randomX+offset+distance)+"px";
        grass2.style.marginTop = (j+randomY)+"px";
        grass2.style.transform = "rotate("+angle+"deg)";
        grass1.style.opacity = ""+Math.random()-opacityDiff;
        grass2.style.opacity = ""+Math.random()-opacityDiff;
        if(parseInt(window.getComputedStyle(grass1).opacity) <= 0){
          grass1.style.opacity = "0.1";
        }
        if(parseInt(window.getComputedStyle(grass2).opacity) <= 0){
          grass2.style.opacity = "0.1";
        }
        grassArray.push(grass1);
        grassArray.push(grass2);
        ground.appendChild(grass1);
        ground.appendChild(grass2);
      }
      if(grassCount === 3){
        let grass1 = document.createElement("div");
        let grass2 = document.createElement("div");
        let grass3 = document.createElement("div");
        let angle1 = randomIntBetween(-60, -20);
        let angle2 = randomIntBetween(-90, -60);
        let distance1 = angle1 / 4;
        let distance2 = angle2 / 4;
        grass1.classList.add('grass');
        grass1.classList.add(grassSizes[randomIntBetween(grassSizeMin-1, grassSizeMax-1)]);
        grass1.style.marginLeft = (i+randomX+offset)+"px";
        grass1.style.marginTop = (j+randomY)+"px";
        grass2.classList.add('grass');
        grass2.classList.add(grassSizes[randomIntBetween(grassSizeMin-1, grassSizeMax-1)]);
        grass2.style.marginLeft = (i+randomX+offset+distance1)+"px";
        grass2.style.marginTop = (j+randomY)+"px";
        grass2.style.transform = "rotate("+angle1+"deg)";
        grass3.classList.add('grass');
        grass3.classList.add(grassSizes[randomIntBetween(grassSizeMin-1, grassSizeMax-1)]);
        grass3.style.marginLeft = (i+randomX+offset+distance2)+"px";
        grass3.style.marginTop = (j+randomY)+"px";
        grass3.style.transform = "rotate("+angle2+"deg)";
        grass1.style.opacity = ""+Math.random()-opacityDiff;
        grass2.style.opacity = ""+Math.random()-opacityDiff;
        grass3.style.opacity = ""+Math.random()-opacityDiff;
        if(parseInt(window.getComputedStyle(grass1).opacity) <= 0){
          grass1.style.opacity = "0.1";
        }
        if(parseInt(window.getComputedStyle(grass2).opacity) <= 0){
          grass2.style.opacity = "0.1";
        }
        if(parseInt(window.getComputedStyle(grass3).opacity) <= 0){
          grass3.style.opacity = "0.1";
        }
        grassArray.push(grass1);
        grassArray.push(grass2);
        grassArray.push(grass3);
        ground.appendChild(grass1);
        ground.appendChild(grass2);
        ground.appendChild(grass3);
      }
    }
  }
  removeFloatingGrass(grassArray, ground);
}
function removeFloatingGrass(grass, ground){
  console.log(grass);
  for(let i = 0; i < grass.length; i++){
    //TODO fix grass thats floating above the ground
  }
}


fillGround(document.getElementById('ground1'), 5, 100, 100, 3, 1, 0);
fillGround(document.getElementById('ground2'), 5, 90, 90, 5, 3, 0.1);
fillGround(document.getElementById('ground3'), 5, 60, 60, 7, 4, 0.4);
fillGround(document.getElementById('ground4'), 8, 50, 50, 7, 5, 0.5);
fillGround(document.getElementById('ground5'), 5, 40, 40, 7, 6, 0.6);
fillGround(document.getElementById('ground6'), 5, 30, 30, 7, 6, 0.7);

function randomIntBetween(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function spawnCloud(size, style){
  let cloud = document.createElement("div");
  cloud.classList.add('cloud');
  cloud.classList.add(size);
  cloud.classList.add(style);
  cloud.style.transitionDuration = randomIntBetween(8, 20)+"s";
  cloud.style.top = randomIntBetween(0, window.innerHeight/3)+'px';
  let first = document.createElement("div");
  first.classList.add('first');
  cloud.appendChild(first);
  let second = document.createElement("div");
  second.classList.add('second');
  cloud.appendChild(second);
  let third = document.createElement("div");
  third.classList.add('third');
  cloud.appendChild(third);
  document.body.appendChild(cloud);
  setTimeout(function(){
    cloud.style.marginLeft = window.innerWidth+"px";
    setTimeout(function () {
      destroy(cloud);
    }, 20000)
  }, 500);
}

function destroy(element) {
  element.remove();
}

let sizes = ["smallCloud", "mediumCloud", "bigCloud"];
let styles = ["cloud1", "cloud1", "cloud1"];

function cloudInterval() {
  let randomSize = sizes[randomIntBetween(0, 2)];
  let randomStyle = styles[randomIntBetween(0, 2)];
  let randomTime = randomIntBetween(10000, 13000)
  spawnCloud(randomSize, randomStyle);
  setTimeout(function () {
    spawnCloud(randomSize, randomStyle);
  }, randomTime/2);
  setTimeout(cloudInterval, randomTime);
}

cloudInterval();

function closeEyes() {
  let eyes = document.getElementsByClassName('eyes');
  for(let i = 0; i < eyes.length; i++){
    eyes[i].style.height = "0px";
    eyes[i].style.marginTop = "17px";
    eyes[i].style.borderTop = "1px solid black";
  }

}

function openEyes() {
  let eyes = document.getElementsByClassName('eyes');
  for(let i = 0; i < eyes.length; i++){
    eyes[i].style.height = "5px";
    eyes[i].style.marginTop = "15px";
    eyes[i].style.border = "none";
  }
}

function blink(){
  let randomBlink = randomIntBetween(2000, 4000);
  let randomBreak = randomIntBetween(200, 800)
  let nextBlink = randomIntBetween(5000, 7000);
  let amount = randomIntBetween(1, 2);
  if(amount > 1){
    setTimeout(closeEyes, randomBlink);
    setTimeout(openEyes, randomBlink+150);
    setTimeout(closeEyes, randomBlink+150+randomBreak);
    setTimeout(openEyes, randomBlink+150+randomBreak+150);
  } else{
    setTimeout(closeEyes, randomBlink);
    setTimeout(openEyes, randomBlink+150);
  }

  setTimeout(blink, nextBlink);
}

blink();

function wobbleFinn(speed) {
  let finn = document.getElementById('finn');
  finn.style.transitionDuration = speed+"ms";
  finn.style.transform = "rotate(1deg) translate(15px, 0px) skew(-3deg, 0deg)";
  setTimeout(function () {
    finn.style.transform = "rotate(-1deg) translate(-15px, 0px) skew(3deg, 0deg)";
  }, speed);
  setTimeout(function () {
    wobbleFinn(speed);
  }, speed*2);
}

wobbleFinn(2000);
