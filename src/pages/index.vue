<template>
  <div id="index">
    <div id="splash">
      <div class="content">
        <p>Hello,<span class="vertical-line"></span></p>
        <p>I, A.I. assistant, am gonna make <br>your life stress free.</p>
        <p class="right">
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
        <div class="placeholder"></div>
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
        <h2>We are always happy to hear you out.</h2>
      </div>
    </div>
    <div id="selection">
      <div class="content">
        <h2>Do u want to meet your Alter_ID?</h2>
        <p>Select your mode, enter your e-mail address & send request for your own Alter_ID.</p>
        <div class="row selection">
          <div class="col-4">
            <h3>Manual S</h3>
            <span class="subtext">mode</span>
            <p>
              <span class="short">Kind, smart guide.</span>
              Manual S is a great helper that guides you through stressful administrative processes.
            </p>
            <ul>
              <li>basic guidance</li>
              <li>administration access</li>
              <li>health, legal, personal data storage</li>
            </ul>
            <div class="ticker ticked"></div>
          </div>
          <div class="col-4"></div>
          <div class="col-4"></div>
        </div>
        <div class="terms-conditions">
          <input type="checkbox" id="checkbox">
          <span>I agree with <a href="">terms&conditions</a> and <a href="">privacy policy</a></span>
        </div>
        <div class="input-container">
          <form action="" method="post">
            <input type="email" name="email">
            <input type="submit" name="submit">
          </form>
        </div>
      </div>
    </div>
    <div id="footer">
      <div class="content">
        <ul class="footer-navigation">
          <li>About</li>
          <li>App</li>
          <li>How it works</li>
          <li>Contact</li>
        </ul>
        <div class="footer-signature">
          Alter_ID, 2021
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modes from "../components/modes"

export default {
  name: 'Index',
  components: {
    Modes
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

#index {
  #splash {
    background: $aid-beige;
    width: 100%;
    padding-bottom: 50px;

    .content{
      text-align: left;
      font-size: 52px;
      padding-top: 200px;
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
        margin-top: 25px;
        text-align: right;
      }
    }
  }

  #video {
    background: darken(#a39072, 3%);

    .placeholder {
      background: url("../assets/images/video-placeholder.jpg");
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
          margin-top: 3px;
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
        height: 28px;
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
        color: $aid-gray;
        margin-bottom: 20px;
      }

      p {
        font-size: 21px;
        line-height: 31px;
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
        height: 916/506*300px;
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