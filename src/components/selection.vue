<template>
  <div id="selection">
    <div class="content">
      <div class="selection-back">
        <div class="selection-heading">
          <h2>Do u want to meet your Alter_ID?</h2>
          <p>Select your mode, enter your e-mail address & send request for your own Alter_ID.</p>
        </div>
        <div class="row selection">
          <div class="col-4"
               v-for="mode in modes"
               v-bind:key="mode.id">
            <a href="#" class="col-12 selectable"
               v-on:click="changeMode(mode.id, $event)"
               :class="{active: mode.id===activeMode}">
              <div class="selectable-inner">
                <div class="title-wrapper">
                  <h3>{{ mode.name }}</h3>
                  <span class="subtext">mode</span>
                </div>
                <p>
                  <span class="short">{{ mode.subtitle }}</span>
                  {{ mode.description }}
                </p>
                <ul>
                  <li v-for="attribute in mode.attributes" v-bind:key="attribute.id">{{ attribute }}</li>
                </ul>
              </div>
              <div class="ticker" :class="{ticked: mode.id === activeMode}"></div>
            </a>
          </div>
        </div>
        <div class="input-container">
          <label class="terms-conditions">
            <input type="checkbox" id="checkbox">
            <span class="checkmark"></span>
            <span class="agreed">I agree with <a href="">terms&conditions</a> and <a href="">privacy policy</a></span>
          </label>
          <form action="" method="post">
            <input type="email" name="email" placeholder="enter your E-mail">
            <input type="submit" name="submit" value="request your Alter_ID">
          </form>
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
    </div>
  </div>
</template>


<script>
export default {
  name: 'Modes',
  data() {
    return {
      activeMode: 'author-a',
      modes: [
        {
          id: 'author-a',
          name: 'Author A',
          subtitle: 'Smart time retriever.',
          description: 'Author A is a great balance between your control and artificial work speed and knowledge.',
          attributes: [
            'advanced assistance',
            'administration access',
            'health, legal, personal data storage'
          ],
        },
        {
          id: 'autom-c',
          name: 'Autom C',
          subtitle: 'Independent, quiet.',
          description: 'Autom C is an excellent solution to have a happy, successful and simple life.',
          attributes: [
            'complete automatization',
            'administration access',
            'health, legal, personal data storage'
          ],
        },
        {
          id: 'manual-s',
          name: 'Manual S',
          subtitle: 'Silently knows it all.',
          description: 'Manual S is a great helper that guides you through stressful administrative processes.',
          attributes: [
            'basic guidance',
            'administration access',
            'health, legal, personal data storage'
          ],
        }
      ]
    }
  },
  methods: {
    changeMode(value, e) {
      this.activeMode = value
      e.preventDefault()
    },
  },
  components: {

  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

#selection {
  background: #8b9796;
  padding: 0 0 70px 0;

  .content{
    overflow: visible;
    position: relative;
  }

  .selection-back{
    position: relative;
    margin-left: -80px;
    margin-right: -80px;
    background: url("../assets/images/selection/back.png");
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 0 80px
  }

  .selection-heading {
    height: 431px;
    padding-top: 50px;

    h2{
      color: #fff;
      font-size: 60px;
      font-weight: normal;
    }
    p{
      color: #fff;
      font-size: 25px;
      margin-top: 12px;
    }
  }

  .selection {
    height: 600px;
    margin: 100px 0 30px 0 ;

    & > div:first-child{
      padding-left: 0;
      padding-right: 18px;
    }

    & > div:last-child{
      padding-right: 0;
      padding-left: 18px;
    }

    .selectable{
      backdrop-filter: blur(7px);
      box-shadow: 4px 4px 4px rgba(0,0,0, 0.1);
      background: transparentize($aid-beige, 0.3);
      border-radius: 7px;
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      position: relative;

      .selectable-inner {
        height: 100%;
        border-radius: 7px;
        box-shadow: inset 0 0 5px lighten($aid-beige, 5%);
        padding: 30px;
        color: $aid-gray;

        .title-wrapper{
          width: 200px;
          margin: 0 auto;
          position: relative;
          height: 58px;

          h3 {
            font-size: 38px;
          }

          .subtext{
            font-size: 20px;
            bottom: 0;
            position: absolute;
            right: 22px;
          }
        }


        p{
          font-size: 20px;
          text-align: left;
          line-height: 30px;

          .short{
            display: block;
            font-weight: bold;
            margin-top: 40px;
            //margin-bottom: 5px;
          }
        }

        ul{
          margin-top: 30px;
          text-align: left;
          padding-left: 5px;
          font-size: 20px;
          list-style:none;

          li{
            background: url("../assets/images/selection/tick.png") no-repeat left top;
            background-size: 25px 25px;
            padding-left: 34px;
            line-height: 30px;
            margin-bottom: 20px;
          }
        }
      }

      .ticker {
        background-size: 46px;
        background-image: url("../assets/images/selection/selectmode_krogec.png");
        width: 46px;
        height: 46px;
        bottom: 35px;
        left: 50%;
        margin-left: -23px;
        position: absolute;
      }

      &:hover, &.active{
        border: 7px solid #fff;
        box-shadow: 4px 4px 4px rgba(0,0,0, 0.2);

        .selectable-inner{
          border-radius: 0;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
          padding: 23px;
        }

        .ticker {
          bottom: 28px;
        }
      }
    }
  }
  .terms-conditions{
    color: $aid-gray;
    text-align: left;
    font-size: 20px;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-bottom: 40px;
    display: inline-block;


    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      height: 25px;
      width: 25px;
      background-color: transparent;
      border: 1px solid $aid-gray;
    }

    /* On mouse-over, add a grey background color */
    &:hover input ~ .checkmark {
      background-color: transparent;
    }

    /* When the checkbox is checked, add a blue background */
    input:checked ~ .checkmark {
      background-color: transparent;
      border: 1px solid $aid-gray;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid darken($aid-gray, 20%);
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    a{
      color: $aid-gray;
      text-decoration: underline;
    }

    .agreed{
      margin-left: 40px;
    }
  }

  .input-container{
    padding: 40px 0 80px 0;
    border-bottom: 1px solid $aid-gray;

    input[type=email]{
      background: $aid-beige;
      padding: 25px 20px;
      border: 1px solid $aid-gray;
      font-size: 18px;
      border-right: 0;
      width: 400px;
      color: $aid-gray;
      border-bottom-left-radius: 2px;
      border-top-left-radius: 2px;

      &:focus{
        outline: none;
        color: $aid-gray;
      }
    }

    input[type=submit]{
      background: $aid-orange;
      padding: 25px 20px;
      border: 1px solid darken($aid-orange,5%);
      font-size: 18px;
      border-bottom-right-radius: 2px;
      border-top-right-radius: 2px;
      color: white
    }
  }

  #footer{
    color: darken($aid-gray, 10%);
    line-height: 29px;
    font-size: 18px;

    ul{
      padding-top: 10px;
      list-style: none;
      text-align: right;
      margin-bottom: 40px;
    }
  }
}
</style>