<template>
  <div id="author" class="page">
    <div class="intro">
      <div class="content">
        <h1>A little about me ...</h1>
      </div>
    </div>
    <div class="intro-paragraph">
      <div class="content">
        <p>
          My name is Žiga Kroflič, I am 27 years old and I come from Slovenia.
          Weird name to pronounce, I know. It goes something like this: “Zhi-guh.”
          Excelent! Now that you know basics of our language, next logical step is
          geography lesson. For those of you who don’t know where Slovenia is; it
          lies next to Italy (which I am certain you know, since it is the homeland of
          Ducati’s, romance and pasta!).
        </p>
      </div>
    </div>
    <div class="page-body">
      <div class="content">
        <p>
          I used to be scrawny little kid, who could barely lift medium size grocery
          bag, let alone any weight. My bodyweight was around 58 kilograms. As you can imagine,
          this did not help my confidence and that in turn brought
          up some problems with girls and bullies.
        </p>
        <p>
          In 2008, I decided to take
          on a challenge; I would start working out in order to gain some muscle
          mass! Little did I know, this little project of mine would for so long. Weeks went by, then months and
          finally years. It became my passion.
        </p>
        <p>
          After years of training and gallons of sweat, I decided to write my own training program: the <b>Buffed Bear</b>,
          a culmination of my training experiences, the programs I've tried, the books I've read and the YouTube videos
          that I've watched. I am thankful to have had the possibility of learning from others, and hope to pass this knowledge
          into arms that crave being ripped! :)
        </p>
        <div class="lightbox-holder">
          <CoolLightBox
              :items="items"
              :index="index"
              @close="index = null">
          </CoolLightBox>

          <div class="images-wrapper">
            <div
                class="image"
                v-for="(image, imageIndex) in items"
                :key="imageIndex"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image.src + ')' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Index',
  data() {
    return {
      items: [
        {
          title: 'The Buffed Bear (right) and a friend after 10+ years of training',
          src: "/images/author/11.jpg",
        }
      ],
      index: null
    }
  },
}
</script>

<style scoped>
.page{
  text-align: left;
}
.page .intro {
  height: 160px;
  width: 100%;
  background: rgb(17,31,48);
  background: rgba(23,42,65,1);
  /* background-size: 0 480px; */
  z-index: 0;
}

h1 {
  margin-top: 80px;
  font-size: 46px;
  font-weight: 500;
  line-height: 52px;
  color: #eee;
  text-shadow: 0 2px 2px #070b17;
}

.intro-paragraph .content p{
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  padding: 25px 0;
}

.intro-paragraph .content {
  border-bottom: 1px solid #ccc;
}

/*.page-body .content p:first-child{*/
/*  padding-top: 0;*/
/*}*/

.page-body .content p {
  font-size: 20px;
  line-height: 32px;
  font-weight: 300;
  padding-top: 25px;
}

</style>