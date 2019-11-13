<!--  -->
<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"/>
    </svg>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    
  }
})
export default class SvgIcon extends Vue {
  @Prop({default:null,type:String}) 
  name!:String;

  @Prop({default:null,type:String}) 
  className!:String;

  @Prop({ default: null, type: String })
  color!: String;

  get iconName() {
    return `#icon-${this.name}`;
  }

  get svgClass() {
    if (this.className) return `svg-icon ${this.className}`;
    return 'svg-icon';
  }
}

</script>
<style lang='less' scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    // fill: currentColor;
    overflow: hidden;
}

.svg-external-icon {
    background-color: currentColor;
    mask-size: cover !important;
    display: inline-block;
}
</style>