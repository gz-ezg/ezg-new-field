<!--  -->
<template>
  <div>
    <van-row >
      <van-col span="24">
        <van-cell-group style="margin-left:16px">
          <van-field style="font-size:16px;line-height:16px" v-model="message" size="large" rows="2" :autosize="{ minHeight: 50}" type="textarea" maxlength="50" placeholder="请输入标题（必填）" show-word-limit></van-field>
        </van-cell-group>
      </van-col>
    </van-row>
    <van-row style="margin-top:16px">
      <van-col span="24">
        <van-cell-group :border="false" class="van-hairline--bottom" style="margin-left:16px">
          <van-field style="font-size:16px;line-height:16px" v-model="message" size="large" rows="2" :autosize="{ minHeight: 60}" type="textarea" maxlength="150" placeholder="请输入外勤内容（必填）" show-word-limit></van-field>
        </van-cell-group>
      </van-col>
    </van-row>
    <van-row style="margin-top:16px">
      <van-col span="24">
        
      </van-col>
    </van-row>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import {Field,Row,Col,CellGroup,Uploader} from 'vant'


@Component({
  components: {
    [Field.name]:Field,
    [Row.name]:Row,
    [Col.name]:Col,
    [CellGroup.name]:CellGroup,
    [Uploader.name]:Uploader,
  }
})
export default class newField extends Vue {
  @Prop() private msg!: string;
  private message:string = ''
  f(){

  }
  created() {
  
  }
}

</script>
<style lang='less'>
.van-field__word-limit {
    margin-top: 0.10667rem;
    color: #7d7e80;
    font-size: 0.7rem;
    line-height: 0.42667rem;
    text-align: right;
}
</style>