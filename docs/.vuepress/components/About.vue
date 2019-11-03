<template>
  <div>
    <div class="about">
      <div class="me">
        <div class="bg-wall">
          <!-- <div class="bg"><img class="bg-a" src="../../assets/bg-a.jpg" /></div>
          <div class="bg"><img class="bg-b" src="../../assets/bg-b.jpg" /></div>
          <div class="sun"><img src="../../assets/sun.png" /></div> -->
        </div>
        <div class="yue-ma">
          <!-- <div class="head-pic"><img class="pic" src="./../../assets/me960x960.jpg" /></div><img class="wechat" src="./../../assets/wechatcode.png" /> -->
          <div class="simple-desc">
            <p class="name">ZZHIREN</p>
            <p class="p">A Web Dev NewBie</p><span class="yueyue">YUE MA 😘</span>
          </div>
        </div>
      </div>
      <div class="desc">
        <p>
          <!-- <Icon class="icon blue" type="android-person"></Icon><span class="icon-span">I'am Zzhiren, a Web Dev NewBie!</span> -->
        </p>
        <p>
          <!-- <Icon class="icon red" type="music-note"></Icon><span class="icon-span">Jay, Pop Music</span> -->
        </p>
        <p>
          <!-- <Icon class="icon pink" type="heart"></Icon><span class="icon-span">Code, Game, Movie</span> -->
        </p>
        <p>
          <!-- <Icon class="icon green" type="coffee"></Icon><span class="icon-span"><a title="GitHub" href="https://github.com/Zzhiren" target="_blank">
              <Icon class="icon black" type="social-github"></Icon>
            </a></span><span class="icon-span"> <a title="FreeCodeCamp" href="https://www.freecodecamp.cn/zzhiren" target="_blank"><img src="./../../assets/free-code-camp.svg" width="18" /></a></span>
          <span class="icon-span margin-left"><a title="新浪微博" href="https://weibo.com/u/5657883808?refer_flag=1001030101_&amp;is_all=1" target="_blank"><img src="./../../assets/weibo.svg" width="18" /></a></span><span class="icon-span margin-left"><a title="知乎" href="https://www.zhihu.com/people/zhi-ren-16-93/activities" target="_blank"><img src="./../../assets/zhihu.svg" width="15" /></a></span>
          <span class="icon-span margin-left"><a title="Stackoverflow" href="https://stackoverflow.com/users/9071323/z-zzhiren?tab=profile" target="_blank"><img src="./../../assets/stack-overflow.svg" width="18" /></a></span><span class="icon-span margin-left"><a title="掘金" href="https://juejin.im/user/59049e4fac502e0063e477a5" target="_blank"><img src="./../../assets/juejin.svg" width="18" /></a></span>
          <span class="icon-span margin-left"><a title="简书" href="http://www.jianshu.com/users/9e34c7d8ff19/timeline" target="_blank"><img src="./../../assets/jianshu.svg" width="18" /></a></span><span class="icon-span margin-left"><a title="邮箱" href="mailto:506151409@qq.com"><img src="./../../assets/email.svg" width="18" /></a></span> -->
        </p>
        <p>
          <!-- <Icon class="icon black" type="code"></Icon><span class="icon-span">To improve is to change; to be perfect is to change often！</span> -->
        </p>
        <p><span class="birthday">Birthday: <span class="number">1993/07/13(农历)</span><span class="shengxiao" id="font">生肖:</span><span class="xingzuo" id="font">星座:</span></span>
        </p>
        <p><span class="food"><span class="chicken">Chicken</span><span class="fish">, Fish</span></span>
        </p>
      </div>
    </div>
    <div class="location">
      <div id="amap"></div>
    </div>
    <div class="projects" @click="_toProject()">
      <div class="content">
        <p class="title">GET MORE PROJECT</p>
        <p class="know-more">了解更多关于我的项目</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      address: "杭州"
    };
  },
  mounted() {
    // this._initBMap();
  },
  methods: {
    // 跳转到project
    _toProject() {
      this.$router.push({
        name: "Project"
      });
    },
    // 初始化高德地图
    _initBMap() {
      var map = new AMap.Map("amap", {
        resizeEnable: true,
        zoom: 7,
        viewMode: "3D",
        pitch: 50,
        mapStyle: "amap://styles/c5af7e2e0f47bc64d417ba428b59dfb6"
      });
      AMap.plugin("AMap.Geocoder", () => {
        var geocoder = new AMap.Geocoder({
          city: "010" //城市，默认：“全国”
        });
        var marker = new AMap.Marker({
          map: map,
          bubble: true,
          animation: "AMAP_ANIMATION_BOUNCE"
        });
        geocoder.getLocation(this.address, function(status, result) {
          if (status == "complete" && result.geocodes.length) {
            marker.setPosition(result.geocodes[0].location);
            map.setCenter(marker.getPosition());
          } else {
          }
        });
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
/* @import "src/components/common/scss/base.scss"; */
.about {
  width: 875px;
  display: flex;
  .me {
    width: 225px;
    height: 400px;
    display: flex;
    flex-direction: column;
    .bg-wall {
      height: 105px;
      // background: black;
      position: relative;
      overflow: hidden;
      .sun {
        position: absolute;
        top: 0;
        right: 12px;
        width: 60px;
        height: 66.9px;
        animation: sun 3s linear infinite;
        animation-direction: alternate;
        img {
          width: 60px;
          height: 66.9px;
        }
        @keyframes sun {
          from {
            opacity: 1;
          }
          to {
            opacity: 0.3;
          }
        }
      }
      .bg {
        width: 225px;
        height: 105px;
        overflow: hidden;
        position: absolute;
        .bg-a {
          width: 315px;
          height: 210px;
          opacity: 1;
          animation-name: bg-a;
          animation-duration: 30s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-fill-mode: initial;
        }
        .bg-b {
          width: 630px;
          height: 210px;
          opacity: 0.5;
          animation-name: bg-b;
          animation-duration: 40s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-fill-mode: initial;
        }

        @keyframes bg-a {
          0% {
            // margin-top: 0;
            transform: translateY(0);
            // margin-left: 0;
          }
          15% {
            transform: translateY(-5px);
            // margin-left: -30px;
            transform: translateX(-30px);
          }
          35% {
            // margin-top: 0;
            transform: translateY(-10px);
            // margin-left: -60px;
            transform: translateX(-60px);
          }
          51% {
            // margin-top: -18px;
            transform: translateY(-18px);
            // margin-left: -90px;
            transform: translateX(-90px);
          }
          67% {
            // margin-top: -36px;
            transform: translateY(-36px);
            // margin-left: -60px;
            transform: translateX(-60px);
          }
          85% {
            // margin-top: -72px;
            transform: translateY(-72px);
            // margin-left: -30px;
            transform: translateX(-30px);
          }
          100% {
            // margin-top: -105px;
            transform: translateY(-105px);
            // margin-left: 0;
          }
        }
        @keyframes bg-b {
          0% {
            // margin-top: 0;
            transform: translateX(0);
            // margin-left: 0;
            transform: translateY(0);
          }
          25% {
            // margin-top: -105px;
            transform: translateY(-50px);
            // margin-left: -202.5px;
            transform: translateX(-100px);
          }
          50% {
            // margin-top: 0;
            transform: translateY(0);
            // margin-left: -202.5px;
            transform: translateX(-200px);
          }
          75% {
            // margin-top: -105px;
            transform: translateY(-105px);
            // margin-left: -303.75px;
            transform: translateX(-300px);
          }
          100% {
            // margin-top: -105px;
            transform: translateY(-105px);
            // margin-left: -405px;
            // transform: translateX(-405px);
          }
        }
      }
    }
    .yue-ma {
      z-index: 1;
      flex: 1;
      background: $background-white;
      box-sizing: border-box;
      position: relative;
      transition: background 0.5s linear;
      z-index: 555;
      &:hover .wechat {
        opacity: 0.8;
      }
      &:hover .simple-desc {
        opacity: 0.2;
      }
      .head-pic {
        width: 100px;
        height: 100px;
        border-radius: 96px;
        border: 5px solid rgba(255, 255, 255, 0.5);
        margin-top: -55px;
        margin-left: 63px;
        z-index: 2;
        overflow: hidden;
        .pic {
          width: 100%;
        }
      }
      .wechat {
        transition: opacity 0.5s linear;
        width: 100%;
        z-index: 3;
        box-sizing: border-box;
        background: $background-white;
        height: 100%;
        position: absolute;
        top: 0;
        opacity: 0;
      }
      .simple-desc {
        margin-top: 40px;
        width: 100%;
        text-align: center;
        .name {
          font-size: 20px;
          font-family: "Graduate", cursive;
          font-weight: bold;
          color: black;
        }
        .p {
          margin-top: 30px;
          font-size: 14px;
          color: black;
          font-family: "Kite One", sans-serif;
        }
        .yueyue {
          border: 1px solid #0088f5;
          color: #0088f5;
          font-family: "Aldrich", sans-serif;
          padding: 4px 4px;
          box-sizing: border-box;
          margin-top: 35px;
          display: inline-block;
          width: 100px;
          opacity: 0.9;
        }
      }
    }
  }
  .desc {
    flex: 1;
    margin-left: 14px;
    background: $background-white;
    padding: 28px 42px;
    box-sizing: border-box;
    height: 400px;
    p {
      margin-bottom: 30px;
      .icon {
        font-size: 18px;
        margin-right: 25px;
      }
      .icon-span {
        font-size: 14px;
        color: black;
        letter-spacing: 1px;
        margin-right: -10px;
        font-family: "Kite One", sans-serif;
      }
      .food {
        font-size: 14px;
        color: black;
        letter-spacing: 1px;
        font-family: "Kite One", sans-serif;
        &::before {
          // content: url(../../assets/food.svg);
          vertical-align: middle;
          display: inline-block;
          margin-top: -10px;
          line-height: 10px;
          margin-right: 22px;
          margin-left: -1px;
        }
        .chicken {
          // margin-right: 14px;
          &::after {
            // content: url(../../assets/chicken.svg);
            vertical-align: middle;
            display: inline-block;
            margin-top: -5px;
            line-height: 10px;
            margin-left: 2px;
          }
        }
        .fish {
          // margin-right: 14px;
          &::after {
            // content: url(../../assets/fish.svg);
            vertical-align: middle;
            display: inline-block;
            margin-top: -5px;
            line-height: 10px;
            margin-left: 2px;
          }
        }
      }
      .birthday {
        font-size: 14px;
        color: black;
        letter-spacing: 1px;
        font-family: "Kite One", sans-serif;
        .number {
          font-size: 12px;
        }
        &::before {
          // content: url(../../assets/birthday.svg);
          vertical-align: middle;
          display: inline-block;
          margin-top: -8px;
          line-height: 10px;
          margin-right: 22px;
          margin-left: -1px;
        }
        .shengxiao {
          margin-left: 10px;
          margin-right: 10px;
          &::after {
            // content: url(../../assets/xiaohuangji.svg);
            vertical-align: middle;
            display: inline-block;
            margin-top: -6px;
            line-height: 10px;
            margin-left: 1px;
          }
          &::after {
            // content: url(../../assets/xiaohuangji.svg);
            vertical-align: middle;
            display: inline-block;
            margin-top: -6px;
            line-height: 10px;
            margin-left: 1px;
          }
        }
        .xingzuo {
          &::after {
            // content: url(../../assets/xingzuo.svg);
            vertical-align: middle;
            display: inline-block;
            margin-top: 1px;
            line-height: 10px;
            margin-left: 1px;
          }
        }
      }
      .margin-left {
        margin-left: 25px;
      }
    }
  }
}
.location {
  width: 100%;
  height: 250px;
  background: $background-white;
  margin-top: 14px;
  padding: 7px;
  box-sizing: border-box;
  #amap {
    width: 100%;
    height: 100%;
    background: $background-white !important;
  }
}
.projects {
  width: 100%;
  height: 225px;
  background: $background-white;
  margin-top: 14px;
  padding: 7px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  .content {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
    height: 100%;
    padding-top: 55px;
    box-sizing: border-box;
    transition: background 0.25s linear;
    &:hover {
      background: rgba(200, 200, 200, 0.3);
    }
    &:hover .title {
      opacity: 1;
    }
    &:hover .know-more {
      opacity: 1;
    }
    .title {
      font-family: "Asap", sans-serif;
      font-size: 42px;
      color: black;
      opacity: 0.4;
      transition: opacity 0.25s linear;
    }
    .know-more {
      margin-top: 18px;
      font-size: 15px;
      letter-spacing: 1px;
      color: black;
      opacity: 0.4;
      transition: opacity 0.25s linear;
    }
  }
} 
</style>
