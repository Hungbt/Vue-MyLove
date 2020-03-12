import { Vue, Component } from "vue-property-decorator";
var swal = require("sweetalert");
var $ = require("jquery");

@Component
export default class Random_eatingComponent extends Vue {
  itemsThucAn = [
    "Xiên que",
    "Ăn vặt SHIN",
    "Naga",
    "Hot",
    "Sasin",
    "Kim chi",
    "Mì gõ",
    "Bánh ướt",
    "Bánh mì thu hà",
    "Bánh mì táo đỏ",
    "Há cảo",
    "Phở",
    "Bột chiên",
    "Cơm gà xốt mỡ",
    "Xôi mặn",
    "Burger",
    "Gà rán",
    "Mì ý",
    "Lẩu",
    "Mì xào giòn",
    "Tokbokki",
    "Ốc",
    "Bún thịt nướng",
    "Cháo gà"
  ];
  itemsThucUong = [
    "Dio",
    "The town",
    "Zen",
    "Tao",
    "Dẽ cube",
    "Táo pha trà",
    "19 hồi ấy",
    "Sencha",
    "Houycha",
    "Molicha",
    "A tũn",
    "Gongcha",
    "Tapei",
    "Zcofe",
    "Tự do",
    "Đông Dương",
    "Cửa hàng cafe số 22",
    "Việt 1888",
    "Huy coffee",
    "Z88",
    "Rau má pha",
    "Trà sửa hạnh nhân",
    "I'm from HANOI",
    "Chizu"
  ];
  items = this.itemsThucAn.concat(this.itemsThucUong);
  temp = [
    { first: "Đi ăn ", last: " đi em yêu :>" },
    { first: "A thấy thèm ", last: " quá e ơi :v" },
    { first: "Trời này mà đi ăn ", last: " là hết xẩy @@" },
    { first: "Lâu rồi chưa ăn ", last: " nè em yêu <3" },
    { first: "Hôm nay ăn món ", last: " này xong đi ăn em nha :))" }
  ];
  show = false;
  selected = "first";
  options = [
    { text: "Tất cả", value: "first" },
    { text: "Thức ăn", value: "second" },
    { text: "Thức uống", value: "third" }
  ];
  test() {
    this.show = true;
    if (this.selected == "first") {
      setTimeout(() => {
        var i = Math.floor(Math.random() * this.items.length);
        swal(this.items[i], "", "success");
        this.show = false;
        this.items.splice(i, 1);
      }, 250);
    } else if (this.selected == "second") {
      setTimeout(() => {
        var j = Math.floor(Math.random() * this.temp.length);

        var i = Math.floor(Math.random() * this.itemsThucAn.length);
        swal(
          "" +
            this.temp[j]["first"] +
            this.itemsThucAn[i] +
            this.temp[j]["last"],
          "",
          "success"
        );
        this.show = false;
        this.itemsThucAn.splice(i, 1);
      }, 250);
    } else {
      setTimeout(() => {
        var i = Math.floor(Math.random() * this.itemsThucUong.length);
        swal(this.itemsThucUong[i], "", "success");
        this.show = false;
        this.itemsThucUong.splice(i, 1);
      }, 250);
    }
  }
  lightning_one() {
    $("#lightning1")
      .fadeIn(250)
      .fadeOut(250);
    setTimeout(() => {
      this.lightning_one();
    }, 4000);
  }
  lightning_two() {
    $("#lightning2")
      .fadeIn("fast")
      .fadeOut("fast");
    setTimeout(() => {
      this.lightning_two();
    }, 5000);
  }
  lightning_three() {
    $("#lightning3")
      .fadeIn("fast")
      .fadeOut("fast");
    setTimeout(() => {
      this.lightning_three();
    }, 7000);
  }

  mounted() {
    console.log("tst");

    this.lightning_one();
    this.lightning_two();
    this.lightning_three();
  }
}
