<template>
  <div class="add-site">
    <header-gray headerTitle="添加地址" back="true"></header-gray>
    <span class="extend-click header-icon save">保存</span>
    <div class="main">
      <div class="edit-form whitebg">
        <table class="addr-edit" width="100%">
          <tbody>
            <tr class="spline-top spline-bottom">
              <th>联系人</th>
              <td>
                <input type="text" class="addr-input">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import HeaderGray from 'components/Header-gray/Header-gray'
export default {
  components: {
    HeaderGray
  }
}
</script>
<style lang="less" scoped>
.main{
  bottom: 0;
}
.save{
  position: absolute;
  top: 0;
  right: .6rem;
  text-align: center;
  width: 6rem;
  height: 4.4rem;
  line-height: 4.4rem;
  font-size: 1.4rem;
  z-index: 2;
}
</style>
