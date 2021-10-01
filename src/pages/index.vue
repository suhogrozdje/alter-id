<template>
  <div id="index">
    <div id="splash">
      <div class="content">
        <p>Hello,<span class="vertical-line"></span></p>
        <p>I, A.I. assistant, am gonna make <br>your life stress free.</p>
        <p class="right signature">
          Meet me,<br> your Alter_ID
        </p>
        <p class="right">
          <a href="" class="action-button">
            meet your Alter_ID
          </a>
        </p>
      </div>
    </div>
    <div id="video">
      <div class="content">
        <div class="video-wrapper">
          <div class="video-container">
            <iframe src="https://player.vimeo.com/video/618418907?h=c43f52de10&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;byline=0&amp;title=0&amp;controls=0&amp;sidedock=0&amp;color=D04423FF" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="video_test4_song1.mp4"></iframe>
          </div>
        </div>
      </div>
    </div>
    <div id="featured">
      <div class="content">
        <p>Featured in</p>
        <div class="row">
          <div class="feat bloom col-3">
            <img alt="bloom" src="/logos/bloom.png">
          </div>
          <div class="feat ten col-3">
            <img alt="ten" src="/logos/tencrunch.png">
          </div>
          <div class="feat new col-3">
            <img alt="new" src="/logos/newscinetists.png">
          </div>
          <div class="feat tech col-3">
            <img alt="tech" src="/logos/techbizz.png">
          </div>
        </div>
      </div>
    </div>
    <div id="featurette">
      <div class="content">
        <div class="row featurette-1">
          <div class="col-6 featurette-text">
            <h2>Alter_ID is your virtual clone assistant.</h2>
            <p>
              Its main focus is to make your life stress free
              as much as possible. It works from an app.
            </p>
          </div>
          <div class="col-6 featurette-image-container">
            <div class="frontwoman-double"></div>
          </div>
        </div>

        <div class="row featurette-2">
          <div class="col-6 featurette-image-container">
            <div class="app-1"></div>
          </div>
          <div class="col-6 featurette-text">
            <h2>Alter_ID enables quick access to administrations</h2>
            <p>
              Yes, that’s right! Not only that your work is done
              with the help or entirely by your Alter_ID
              assistant, in cooperation with <em>European Data
              Protection Service</em> and <em>European union Authority
              Office</em>, now you can access to all administrations
              through an Alter_ID app. No more waiting in long
              queues, everything is just a click away.
            </p>
          </div>
        </div>

        <div class="row featurette-3">
          <div class="col-6 featurette-text">
            <h2>Alter_ID manages your Fascikel personal folder.</h2>
            <p>
              No more lost documents and piles of papers in
              your home! Alter_ID prepares documents
              that are stored in your Fascikel folder. With
              Fascikel you get all access and control over your
              personal, health and legal documents. Be the
              boss of your own data with the help of Alter_ID.
            </p>
          </div>
          <div class="col-6 featurette-image-container">
            <div class="app-2"></div>
          </div>
        </div>
        <div class="action-container">
          <a href="" class="action-button">
            meet your Alter_ID
          </a>
        </div>
      </div>
    </div>
    <modes></modes>
    <div id="comments">
      <div class="content">
        <h2>We are always happy to<br>hear you out.</h2>
        <div class="comment-container">
          <div class="comment" id="c1">
            <div class="avatar"></div>
            <div class="comment-description">
              I love the idea of making my own virtual
              clone…But smarter! 😅
            </div>
          </div>
          <div class="comment" id="c2">
            <div class="avatar"></div>
            <div class="comment-description">
              I can’t wait to try it! Every Alter_ID mode
              seems like a blast in a stressful day. ❤️❤️
            </div>
          </div>
          <div class="comment" id="c3">
            <div class="avatar"></div>
            <div class="comment-description">
              I always hate the responsibility to keep
              important papers somewhere safe.
              To have everything organized and stored in an app is just amazing. 😎 ☕️
            </div>
          </div>
          <div class="comment" id="c4">
            <div class="avatar"></div>
            <div class="comment-description">
              Alter_ID seems like something I was waiting
              for all my career!
            </div>
          </div>
          <div class="comment" id="c5">
            <div class="avatar"></div>
            <div class="comment-description">
              Simply the best upcoming app in 2021. 💣💣💣 :))))
            </div>
          </div>
        </div>
      </div>
    </div>
    <selection></selection>
  </div>
</template>

<script>
import Modes from "../components/modes"
import Selection from "../components/selection"

export default {
  name: 'Index',
  components: {
    Modes, Selection
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

#index {
  overflow-x: hidden;
  #splash {
    background: $aid-beige;
    width: 100%;
    padding-bottom: 50px;

    .content{
      text-align: left;
      font-size: 52px;
      padding-top: 150px;
      line-height: 56px;
      overflow: visible;
      clear: both;

      .vertical-line {
        display: inline-block;
        width: 2px;
        height: 62px;
        margin-bottom: -12px;
        animation: blinker 1.5s step-end infinite;
        background: $aid-orange;
      }
      @keyframes blinker {
        50% { opacity: 0; }
      }

      .action-button{
        margin-top: 20px;
      }
    }

    p{
      color: $aid-orange !important;
      margin-bottom: 10px;

      &.right {
        text-align: right;

        &.signature{
          background: url("../assets/images/altersignature.png") bottom right no-repeat;
          background-size: 100px;
          padding-bottom: 55px;
          margin-top: 25px;
        }
      }
    }
  }

  #video {
    //background: darken(#a39072, 3%);
    background: $aid-beige;

    .video-container{
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 56.25%;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .placeholder {
      //background: url("../assets/images/video-placeholder.jpg");
      background-size: 100% auto;
      width: 100%;
      height: 590px;
    }
  }

  #featured {
    background: $aid-beige;
    padding: 60px 0 70px 0;

    p{
      font-size: 28px;
      margin-bottom: 45px;
      color: $aid-gray;
    }

    .row > div {
      &.bloom{
        text-align: left;
      }
      &.ten{
        text-align: left;
      }
      &.new{
        text-align: right;

        img{
          margin-top: 6px;
          margin-right: 6px;
        }
      }
      &.tech{
        text-align: right;
      }
    }

    .feat{
      img{
        height: 33px;
      }
      &.new img{
        height: 23px;
      }

    }
  }

  #featurette{
    background: #fafaf5;
    padding: 70px 0;
    text-align: left;

    .featurette-text{
      padding-top: 90px;

      h2 {
        font-weight: normal;
        font-size: 34px;
        line-height: 36px;
        color: $aid-gray;
        margin-bottom: 22px;
      }

      p {
        font-size: 21px;
        line-height: 28px;
        color: $aid-gray;
      }
    }

    .featurette-image-container{
      text-align: center;

      .frontwoman-double {
        background: url("../assets/images/featurette/frontwoman_double.png");
        background-size: 100% 100%;
        width: 300px;
        height: 300px;
        margin: auto;
      }

      .app-1 {
        background: url("../assets/images/featurette/app_1.png");
        background-size: 100% 100%;
        width: 300px;
        height: 916/439*300px;
        margin: auto;
      }

      .app-2 {
        background: url("../assets/images/featurette/app_2.png");
        background-size: 100% 100%;
        width: 300px;
        height: 916/446*300px;
        margin: auto;
        margin-top: -120px;
      }
    }

    .featurette-1 .featurette-text{
      padding-top: 70px;
    }

    .featurette-3 .featurette-text{
      padding-top: 90px;
    }
  }

  #comments {
    padding: 70px 0;


    h2{
      font-size: 60px;
      font-weight: normal;
      color: $aid-gray;
    }

    .comment-container {
      position: relative;
      height: 590px;
      margin-top: 30px;

      .comment {
        position: absolute;
        width: 400px;
        min-height: 105px;
        background: white;
        border-radius: 15px;
        box-shadow: 0 2px 4px rgba(0,0,0, 0.2);

        &#c1{
          left: 50px;

          .avatar {
            background-image: url("../assets/images/comments/opinionmaker1.png");
          }
        }
        &#c2{
          right:160px;
          top: 80px;

          .avatar {
            background-image: url("../assets/images/comments/opinionmaker2.png");
          }
        }

        &#c3{
          left: 80px;
          top: 200px;

          .avatar {
            background-image: url("../assets/images/comments/opinionmaker3.png");
          }
        }

        &#c4{
          right: 110px;
          top: 280px;

          .avatar {
            background-image: url("../assets/images/comments/opinionmaker4.png");
          }
        }

        &#c5{
          left: 300px;
          top: 440px;

          .avatar {
            background-image: url("../assets/images/comments/opinionmaker5.png");
          }
        }

        .avatar{
          position: absolute;
          width: 75px;
          height: 75px;
          background-size: 75px 75px;
          left: -20px;
          top: 20px;
        }
        .comment-description {
          padding: 20px 30px 30px 70px;
          text-align: left;
          color: $aid-gray;
          line-height: 23px;
        }
      }
    }
  }
}

.action-button {
  display: inline-block;
  padding: 35px 90px;
  font-size: 32px;
  text-decoration: none;
  border-bottom: 0;
  color: $aid-beige;
  background: $aid-orange;
  border-radius: 3px;
  box-shadow: 0 3px 2px rgba(0,0,0, 0.1);

  &:hover{
    border-bottom: 0;
    color: $aid-beige;
    background: $aid-orange-light;
  }
}

.action-container{
  margin: 80px 0 0;
  text-align: center;

  .action-button {
    margin: auto;
  }
}

</style>