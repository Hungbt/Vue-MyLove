<template>
  <div>
    <div class="text-center">
      <img id="lightning1" class="lightning" src="../../assets/image/lightning-01.jpg" alt />
      <img id="lightning2" class="lightning" src="../../assets/image/lightning-02.jpg" alt />
      <img id="lightning3" class="lightning" src="../../assets/image/lightning-03.jpg" alt />
    </div>
    <div style="position:relative;" class="text-center">
      <div
        v-if="show"
        style="  position: fixed;z-index: 1000; left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.4);"
      >
        <b-spinner
          style="z-index: 1001;margin-top:100px;width: 3rem; height: 3rem;"
          label="Large Spinner"
          variant="info"
        ></b-spinner>
      </div>
      <br />
      <b-form-group style="margin-top:150px;">
        <b-form-radio-group
          style="color:white;"
          v-model="selected"
          :options="options"
          name="radio-inline"
        ></b-form-radio-group>
      </b-form-group>
      <button
        style=" margin-top:20px; width:200px;height:100px;"
        class="btn btn-warning"
        @click="test();"
      >
        <h4>NHẤN VÀO</h4>
      </button>
    </div>
  </div>
</template>
<script src="./random_eating.component.ts" ></script>
