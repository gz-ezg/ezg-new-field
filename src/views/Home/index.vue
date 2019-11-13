<!--  -->
<template>
  <div>
    <van-row type="flex" style="background-color:rgb(83,119,171);min-height:150px">
      <van-col span="12" class="col-class" v-for="(item,index) in a" :key="index">
        <div>
          <div><Icon :name="item" fill="#ffffff" style="font-size:48px;margin-bottom:10px"></Icon></div>
          <div>{{item}}</div>
        </div>
      </van-col>
    </van-row>
    <van-row v-for="(item,index) in b" :key="index">
      <van-panel>
        <div slot="header" class="header">
          {{item.title}}
        </div>
        <div>
          <van-grid :column-num="2" style="min-height:100px;">
            <van-grid-item style="font-size:14px"  @click="showPopup(item)">
              <div slot="icon">
                <Icon :name="item.icon.name1" :fill="item.color.R" style="font-size:32px"></Icon>
              </div>
              <div slot="text" style="margin-top:4px">{{item.text.text1}}</div>
            </van-grid-item>
            <van-grid-item style="font-size:14px">
              <div slot="icon">
                <Icon :name="item.icon.name2" :fill="item.color.G" style="font-size:32px"></Icon>
              </div>
              <div slot="text" style="margin-top:4px">{{item.text.text2}}</div>
            </van-grid-item>
          </van-grid>
        </div>
      </van-panel>
    </van-row>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ minHeight: '20%' }"
    >
      <van-cell-group>
        <div slot="title" class="cellGroup-title-class">可以通过外勤工单，分派外勤任务</div>
        <van-cell v-for="(item,index) in c" :key="index" @click="jump_page(item)">
          <div slot="title" class="cell-title-class">{{item}}</div>
        </van-cell>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import {Row,Col,Grid,GridItem,Panel,Icon,Popup,Cell,CellGroup} from 'vant'

@Component({
  components: {
    [Row.name] : Row,
    [Col.name] : Col,
    [Grid.name] : Grid,
    [GridItem.name] : GridItem,
    [Panel.name] : Panel,
    [Icon.name] : Icon,
    [Popup.name] : Popup,
    [Cell.name] : Cell,
    [CellGroup.name] : CellGroup,
  }
})
export default class Home extends Vue {
  @Prop() private msg!: string;
  private a:any = ['签到','签退']
  private b:any = [{title:"外勤签到",icon:{name1:"我的签到",name2:"查询"},color:{R:"orange",G:"purple"},text:{text1:"我的签到",text2:"签到查询"}},
                   {title:"外勤管理",icon:{name1:"工单信息",name2:"拜访"},color:{R:"rgb(83,119,171)",G:"green"},text:{text1:"外勤工单",text2:"客户拜访"}}]
  private c:any = ["新建外勤单","草稿","我提交的","我参与的"]
  private show:boolean = false


  showPopup(i:any){
    if(i.title=="外勤管理"){
      this.show = true
    } else{
      return false
    }
  }
  jump_page(i:any){
    if(i=="新建外勤单"){
      this.$router.push('./newField')
    } else{
      return false
    }
  }
  created() {
    
  }
}

</script>
<style lang='less' scoped>
.header{
  background-color: rgb(246, 246, 246);
  padding: 20px;
  font-size: 6px;
  color: rgb(153, 153, 153);
  text-align: left
}
.col-class{
  color:#ffffff;
  display:flex;
  align-items:center;
  justify-content:center
}
.cellGroup-title-class{
  height: 100px;
  font-size: 24px;
  color:rgb(153, 153, 153);
  line-height: 100px;
}
.cell-title-class{
    height: 78px;
    font-size: 36px;
    font-weight: bold;
    line-height: 78px;
}
</style>
