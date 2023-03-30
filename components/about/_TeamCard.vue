<template>
  <div class="team-card">
    <div class="team-card__image">
      <img src="~/assets/jpg/team/alexander-ux-ui-designer.png"/>
    </div>
    <div class="team-card__body">
      <div class="team-card__name">Александр</div>
      <div class="team-card__age">32 лет</div>
      <div class="team-card__role">
        <span>UX/UI designer</span>
        <img src="~/assets/svg/common/arrow-right.svg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard"
}
</script>

<style lang="scss" scoped>
.team-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  position: relative;

  border: 1.5px solid;
  border-image: radial-gradient(33.36deg, #5900EA 0.96%, rgba(0, 0, 0, 0) 69.51%) 1;
}
.team-card__image {
  position: relative;
  border-radius: 25px 25px 0 0;
  overflow: hidden;

  img {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:after {
    content: "";
    float: left;
    padding-top: 95%;
  }
}
.team-card__body {
  padding: 20px 30px;
  box-sizing: border-box;

  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}
.team-card__name {
  margin-bottom: 15px;
  color: #087AFF;
}
.team-card__age {
  color: #A80CEE;
}
.team-card__role {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  color: white;

  img {
    filter: invert(1);
  }
}
</style>
