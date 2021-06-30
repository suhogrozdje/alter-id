<template>
  <div id="modes">
    <div class="content">
      <h2>3 modes you can choose from.</h2>
    </div>
    <div class="banner-container" :class="{aors: activeMode === 'author-a' || activeMode === 'manual-s'}">
      <div class="content content-wider"><img class="banner" v-for="mode in modes" v-bind:key="mode.id" :src="'/modes/' + mode.id + '.png'" v-show="activeMode===mode.id" width="100%"></div>
    </div>
    <div class="content">
      <div class="row modes-links">
        <div class="col-4" v-for="mode in modes" v-bind:key="mode.id">
          <a href="#"
             class="change-mode"
             v-on:click="changeMode(mode.id, $event)"
             :class="{active: activeMode===mode.id}">{{ mode.name }}</a>
        </div>
      </div>
      <div class="mode" v-for="mode in modes" v-bind:key="mode.id" v-show="mode.id === activeMode">
        <div class="mode-description-container">
          <div class="mode-description">
            <p class="bolder">
              {{ mode.subtitle }}
            </p>
            <p>
              {{ mode.description }}
            </p>
            <div class="attributes row">
              <div class="col-6">
                <ul>
                  <li v-for="item in mode.attributes.slice(0,6)"  v-bind:key="item.id">{{ item }}</li>
                </ul>
              </div>
              <div class="col-6">
                <ul>
                  <li v-for="item in mode.attributes.slice(6)"  v-bind:key="item.id">{{ item }}</li>
                </ul>
              </div>
            </div>
            <div class="icons row">
              <div class="col-4 icon-container" v-for="icon in mode.icons" v-bind:key="icon.id">
                <img class="big-icon" :src="'/icons/' + icon.class + '.png'" :alt="icon.name">
                <p>{{ icon.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="action-container">
        <a href="" class="action-button">
          meet your Alter_ID
        </a>
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
          description: 'Author A mode is a great collaboration between your control and artiﬁcial workspeed and knowledge to make things done!',
          attributes: [
              'Automatization under Authorization',
              'works on your audio command',
              'works with fascikel data section',
              'writes your documents',
              'loves to ﬁll forms',
              'writes E-mails',
              'detects and chooses best options for you',
              'asks for iris authorization when needed',
              'sings when the works is done',
              'prepare previews for you',
              'every task completes in 0.45 min'
          ],
          icons: [
            {
              class: 'icon1',
              name: 'administration access'
            },
            {
              class: 'icon2',
              name: 'max protected data'
            },
            {
              class: 'icon3',
              name: 'certified a.i. assistant'
            }
          ]
        },
        {
          id: 'autom-c',
          name: 'Autom C',
          subtitle: 'Independent, quiet, knows it all.',
          description: 'Autom C mode is a perfect assistant. Is an excellent solution to have a happy\n' +
              'successful and simple life!',
          attributes: [
            'Complete Automatization',
            'Alter_ID clone does everything by itself',
            'Authorization is automatic',
            'works with fascikel data section',
            'writes your documents',
            'writes E-mails',
            'detects and chooses best options for you',
            'tasks are completed without your consent',
            'it gives you 100% stress free life',
            'every task completes in: unknown'
          ],
          icons: [
            {
              class: 'icon1',
              name: 'administration access'
            },
            {
              class: 'icon2',
              name: 'max protected data'
            },
            {
              class: 'icon3',
              name: 'certified a.i. assistant'
            }
          ]
        },
        {
          id: 'manual-s',
          name: 'Manual S',
          subtitle: 'Knows it all and silently awaits your questions.',
          description: 'Manual S mode is a shy silent guardian, who will speak only if spoken to.',
          attributes: [
            'your a.i. guide',
            'helps you',
            'advises you',
            'reminds you',
            'leads you through standard protocols',
            'corrects you',
            'is there for you when you need it',
          ],
          icons: [
            {
              class: 'icon1',
              name: 'administration access'
            },
            {
              class: 'icon2',
              name: 'max protected data'
            },
            {
              class: 'icon3',
              name: 'certified a.i. assistant'
            }
          ]
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

#modes{
  padding: 70px 0;
  background: $aid-beige;

  h2{
    font-size: 60px;
    font-weight: normal;
    color: $aid-gray;
  }

  .banner-container{
    margin: 70px 0;
    background: #cbffff;

    &.aors{
      background: linear-gradient(to right, #c7c7c9 50%, #cbffff 50%);
    }

    .content{
      padding: 0
    }

    .banner{
      display: block;
    }
  }

  .modes-links{
    border-bottom: 1px solid $aid-gray;
    margin-bottom: 0;

    div {
      &:first-child{
        text-align: left;
      }
      &:last-child{
        text-align: right;
      }
    }

    .change-mode{
      padding-bottom: 15px;
      display: block;
      color: #b4b3ae;
      font-size: 36px;

      &.active, &:hover {
        color: $aid-gray;
      }
    }
  }

  .mode {
    .mode-description{
      text-align: left;
      padding-top: 36px;

      p {
        font-size: 25px;
        color: $aid-gray;
        margin-bottom: 35px;

        &.bolder{
          font-weight: bold;
          margin-bottom: 20px;
        }
      }

      ul {
        padding-left: 40px;
        margin-left: 0;
        list-style: circle;
        color: $aid-gray;
        font-size: 19px;
        line-height: 30px;
      }
    }

    .icons{
      margin-top: 60px;

      .icon-container{
        &:first-child{
          text-align: center;
        }
        &:nth-child(2){
          text-align: center;
        }
        &:last-child{
          text-align: center;
        }

        .big-icon{
          height: 100px;
        }

        p{
          margin-top: 20px;
        }
      }
    }

  }
}
</style>