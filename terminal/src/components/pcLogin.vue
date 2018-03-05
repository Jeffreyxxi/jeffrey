<template>
  <div class="pc_login">
    <div class="pc_login_top">
      <div class="pc_login_qrcode">
        <div class="pc_login_qrcode_item">
          <div>
            <img src="../assets/images/jeffrey_qrcode.png" alt="Jeffrey的微信公众号">
          </div>
          <p>Jeffrey的微信公众号</p>
        </div>
        <div class="pc_login_qrcode_item">
          <div>
            <img src="../assets/images/jeffrey_qrcode.png" alt="Jeffrey的个人微信">
          </div>
          <p>Jeffrey的个人微信</p>
        </div>
      </div>
      <p class="pc_login_hi">Hi,This is Jeffrey...</p>
    </div>
    <div class="pc_login_operate">
      <div class="pc_login_operate_input">
        <input placeholder="name?t=token or command" autofocus/>
      </div>
      <div class="pc_login_operate_button">
        <button @click="BtnClicked()">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {}
  },
  methods: {
    BtnClicked: function () {
      this.$router.push('pcMainPage')
    }
  }
}
</script>

<style scoped>
.pc_login{width: calc(100% - (40px));height: calc(100% - (40px));margin: 0;padding: 20px;}
.pc_login_top{width: 100%; height: calc(100% - (200px));}
.pc_login_qrcode{width: 100%;height: 200px;display: flex;flex-wrap: nowrap;flex-direction: row-reverse;}
.pc_login_qrcode_item{width: 160px;height: 200px;margin-left: 40px;}
.pc_login_qrcode_item>div{width: 160px;height: 160px;}
.pc_login_qrcode_item>div>img{width: 100%;height: 100%;}
.pc_login_qrcode_item>p{height: 40px;width: 100%;font-size: 12px;font-family: Arial, Helvetica, sans-serif;text-align: center;color: #333333;}
.pc_login_hi{position: absolute;height: 200px;width: 100%;left: 0;top: 50%;margin-top: -170px;line-height: 200px;font-size: 100px;color: rgba(13, 188, 121, 1);font-weight: bold;}

.pc_login_operate{height: 40px;width: 100%;padding: 150px 0px 0px 0px;display: flex;flex-wrap: nowrap;}
.pc_login_operate_input{height: 100%;width: calc(100% - (100px));position: relative;}
.pc_login_operate_input::after{content: "";height: 1px;width: 100%;background-color: #666666;position: absolute;bottom: 0;left: 0;}
.pc_login_operate_input>input{height: 100%;width: calc(100% - (24px));border: none;outline: none;text-align: right;font-size: 18px;padding: 0px 12px;}
.pc_login_operate_button{width: 100px;height: 100%;}
.pc_login_operate_button>button{width: 76px;height: 40px;border: none;background-color: rgba(13, 188, 121, 1);box-shadow: 0px 0px 4px 4px rgba(13, 188, 121, 0.14);color: #ffffff;font-size: 18px;font-family: 'Arial Narrow', Arial, sans-serif; }
</style>
