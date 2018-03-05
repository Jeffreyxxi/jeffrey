<template>
  <div class="pc_main">
    <div class="pc_main_info">
        <div class="pc_main_content">
            <div class="pc_main_content_left">
                <div class="pc_main_content_left_head">
                    <img src="../assets/images/jeffrey_qrcode.png" alt="头像">
                </div>
            </div>
            <div class="pc_main_content_right">
                <div class="pc_main_content_right_item">
                    <p class="right_item_title">真实姓名:</p>
                    <p class="right_item_sub">简久平</p>
                </div>
                <div class="pc_main_content_right_item">
                    <p class="right_item_title">英文名:</p>
                    <p class="right_item_sub">Jeffrey</p>
                </div>
                <div class="pc_main_content_right_item">
                    <p class="right_item_title">出生日期:</p>
                    <p class="right_item_sub">1994.05.25</p>
                </div>
                <div class="pc_main_content_right_item">
                    <p class="right_item_title">籍贯:</p>
                    <p class="right_item_sub">重庆</p>
                </div>
                <div class="pc_main_content_right_item">
                    <p class="right_item_title">职业:</p>
                    <p class="right_item_sub">web前端</p>
                </div>
                <div class="pc_main_content_right_item">
                    <p class="right_item_title">身份标签:</p>
                    <p class="right_item_sub"><label class="right_item_label" for="">&nbsp;&nbsp;代码&nbsp;&nbsp;</label><label class="right_item_label" for="">&nbsp;&nbsp;代码&nbsp;&nbsp;</label></p>
                </div>
            </div>
        </div>
        <div class="pc_main_colbar">
            <div class="pc_main_colbar_cont">
                <div class="pc_main_colbar_item">简历</div>
                <div class="pc_main_colbar_item">项目</div>
                <div class="pc_main_colbar_item">文章/博客</div>
                <div class="pc_main_colbar_item">音乐</div>
                <div class="pc_main_colbar_item">视频/影视</div>
                <div class="pc_main_colbar_item">添加...</div>
            </div>
        </div>
    </div>
    <div class="pc_main_column">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pcMainPage',
  data () {
    return {}
  }
}
</script>

<style scoped>
.pc_main{width: calc(100% - (40px));height: calc(100% - (40px));margin: 0;padding: 20px;}
.pc_main_info{width: 100%;}

.pc_main_content{width: 70%;margin: 0px auto;min-width: 900px;display: flex;flex-wrap: nowrap;}
.pc_main_content_left{height: 300px;width: 300px; padding: 50px;}
.pc_main_content_left_head,.pc_main_content_left_head>img{width: 100%;height: 100%;}
.pc_main_content_right{height: 300px;width: calc(100% - (400px)); padding: 50px;}
.pc_main_content_right_item{width: 100%;min-width: 400px; display: flex;flex-wrap: nowrap;}
.pc_main_content_right_item>.right_item_title{min-width: 80px;max-width: 104px;text-align: left;color: #999999;font-size: 18px;height: 50px;line-height: 50px;margin: 0px;padding: 0px 12px 0px 12px;}
.pc_main_content_right_item>.right_item_sub{width: calc(100% - (156px));height: 50px;line-height: 50px;margin: 0px;padding: 0px 12px 0px 12px;text-align: left;color: #999999;font-size: 18px;}
/* .right_item_label{background-color: rgba(13, 188, 121, 1);padding: 4px;border-radius: 14px;margin-right: 12px;color: #ffffff;font-weight: 600;} */

.pc_main_colbar{width: calc(100% + (40px));height: 40px;margin-left: -20px;background-color: rgba(13, 188, 121, 1);/* box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.14); */}
.pc_main_colbar_cont{width: calc((100% - (40px)) * 0.7);height: 100%;margin: 0px auto; display: flex;flex-wrap: nowrap;}
.pc_main_colbar_item{width: 136px;height: 40px;line-height: 40px;color: #ffffff;font-size: 18px;position: relative;padding: 0px 12px;}
.pc_main_colbar_item::before{content: "";height: 100%;width: 2px;background-color: #f5f5f5;position: absolute;left: 0px;top: 0px;}
.pc_main_colbar_item::after{content: "";height: 100%;width: 2px;background-color: #f5f5f5;position: absolute;right: -2px;top: 0px;}

.pc_main_column{width: 100%;}
</style>
