*{
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

body{
  background-color: black;
  color: aliceblue;
  overflow: hidden;

}
.container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 600px;
  background: #0000;
  box-shadow: 0 30px 50px #1a191900;
}

.container .slide .item{
  width: 200px;
  height: 300px;
  position: absolute;
  top: 50%;
  transform: translate(0,-50%);
  box-shadow: 0 30px 50px #1f1919;
  border-radius: 20px;
  background-position: 50% 50%;
  background-size: cover;
  display: inline-block;
  transition: 0.5s;
}

.slide .item:nth-child(1),
.slide .item:nth-child(2){
  top: 0;
  left: 0;
  transform: translate(0,0);
  border-radius: 8px;
  width: 100%;
  height: 100%;
}

.slide .item:nth-child(3){
  left: 50%;
}

.slide .item:nth-child(4){
  left: calc(50% + 220px);
}

.slide .item:nth-child(5){
  left: calc(50% + 440px);
}

.slide .item:nth-child(n+6){
  left: calc(50% + 660px);
  opacity: 0;
}



.item .content{
  position: absolute;
  top: 50%;
  left: 100px;
  width: 300px;
  text-align: left;
  color: #eee;
  transform: translate(0 , -50%);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  display: none;
}

.slide .item:nth-child(2) .content{
  display: block;
}

.content .name {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: bold;
  animation: animation 1s ease-in-out 0.3s 1 forwards;
}

.content .desc {
  margin-top: 10px;
  margin-bottom: 20px;
  animation: animation 1s ease-in-out 0.3s 1 forwards;
}

.content button{
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: rgb(192, 189, 185);
  color: rgb(19, 18, 18);
  animation: animation 1s ease-in-out 0.3s 1 forwards;
}


@keyframes animate {
  from{
    opacity:1;
    transform: translate(0,100px);
    filter: blur(33px);

  }
  to{
    transform: translate(0);
    filter: blur(0);
  }
}

.button{
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 20px;
}

.button button{
  width: 40px;
  height: 35px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin: 0 3px;
  background: #080808;
  color: rgb(255, 104, 49);
  transition: 0.3s;
}

.button button:hover{
  background: #504f4f;
}
