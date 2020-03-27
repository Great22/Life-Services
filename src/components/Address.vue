<template>
  <div class="address" @touchmove.prevent>
    <van-nav-bar title="收货地址" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <van-address-edit
          :area-list="areaList"
          show-postal
          show-delete
          show-set-default
          show-search-result
          :address-info="addressInfo"
          :columns-num="2"
          :search-result="searchResult"
          :area-columns-placeholder="['请选择', '请选择', '请选择']"
          @save="onSave"
          @delete="onDelete"
          @change-detail="onChangeDetail"
        />
      </div>
    </van-overlay>
  </div>
</template>
<script>
import areaList from "../assets/js/area";
import { Toast, Dialog } from "vant";
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          province: "江苏",
          city: "无锡",
          county: "崇安区",
          areaCode: "330106",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          postal_code: "123456",
          isDefault: true //是否默认为收件地址
        },
        {
          id: "2",
          name: "罗卡",
          tel: "18292039437",
          address: "陕西省西安市高新区万里新城社区",
          province: "陕西省",
          city: "西安市",
          county: "高新区",
          areaCode: "610113",
          postal_code: "715514",
          isDefault: false //是否选择默认
        }
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ],
      show: false,
      areaList: areaList,
      searchResult: [],
      addressInfo: {
        //收货人信息初始值
        id: 0, //id值
        name: "", //姓名
        tel: "", //电话
        province: "", //省份
        city: "", //城市
        county: "", //区县
        areaCode: "", //地址code：ID
        addressDetail: "", //详细地址
        isDefault: false, //是否选择默认
        postalCode: ""
      }
    };
  },

  methods: {
    onAdd() {
      this.addressInfo = {};
      this.show = !this.show;
    },
    onEdit(item, index) {
      this.show = !this.show;
      this.addressInfo = {
        id: item.id,
        name: item.name,
        tel: item.tel,
        province: item.province,
        city: item.city,
        county: item.county,
        areaCode: item.areaCode,
        isDefault: item.isDefault, //是否选择默认
        postalCode: item.postal_code,
        addressDetail: item.address
      };
    },
    onSave(content) {
      //记录新的地址信息
      const newAddress = {
        name: content.name,
        tel: content.tel,
        province: content.province,
        city: content.city,
        county: content.county,
        areaCode: content.areaCode,
        isDefault: content.isDefault, //是否选择默认
        postalCode: "",
        address: content.addressDetail
      };
      // 如果此地址选为默认地址，即为真，就把已存在的地址设为默认的，改过来
      if (newAddress.isDefault) {
        this.list.forEach(item => {
          return (item.isDefault = false);
        });
        //设置此id为已选定id
        this.chosenAddressId = content.id;
      }
      // console.log(content);
      //判断是不是修改，即为list存不存在此id，如果不存在，添加此项到list，否则更新此项数据
      const isOld = this.list.some(item => {
        return item.id == content.id;
      });

      //id存在,取反即为添加新的
      if (!isOld) {
        const id = this.list.length + 1;
        this.list.push(newAddress);
      } else {
        newAddress.id = content.id;
        const index = this.list.findIndex(item => item.id == content.id);
        this.list[index] = newAddress;
      }

      this.show = !this.show;
    },
    onDelete(content) {
      const index = this.list.findIndex(item => item.id == content.id);
      // if (this.list.length <= 1) {
      //   Dialog.confirm({
      //     title: "温馨提示 ",
      //     message: "只剩一条地址数据了，您确认要删除吗？"
      //   })
      //     .then(() => {
      //       this.list.splice(index, 1);
      //     })
      //     .catch(() => {
      //       // on cancel
      //     });
        this.list.splice(index, 1);
        this.show = !this.show;
      // }
    },
    onChangeDetail(val) {}
  }
};
</script>
<style lang="less" scoped>
.address {
  min-height: 680px;
}
</style>