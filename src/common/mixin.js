import {debounce} from "common/utils";

export const mixin = {
  data() {
    return {
      imgLinstener: null,
      refresh: null,
      isShow: false
    }
  },
  methods: {
    scrollContent(position) {
      // console.log(position);
      this.isShow = -position.y > 1000;
      this.isShowTab = -position.y > this.tabOffsetTop
    },
    backClick() {
      this.$refs.scroll.scrollTop(0, 0);
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 100);
    this.imgLinstener = () => {
      this.refresh();
    };
    this.$bus.$on('imgLoad', this.imgLinstener);
  }
}
