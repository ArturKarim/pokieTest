<template>
  <div class="header">
    <div class="header-logo">
      <img alt="logopokies24.io" src="../assets/images/logo.svg" />
    </div>
    <div class="header-menu">
      <div>HOME</div>
      <div>FREE POKIES</div>
      <div>ONLINE CASINOS</div>
      <div>ABOUT US</div>
      <div>CONTACT</div>
    </div>
    <div class="header-btn">
      <img alt="Claim gift" class="header-claim-btn" src="../assets/images/ClaimGift.png" />
      Claim Gift
    </div>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #193347;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 42px;
}

.header-logo {
}

.header-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  color: white;
  font-size: 16px;
}

.header-claim-btn {
  max-width: 100%;
  max-height: 100%;
}

.header-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 148px;
  height: 46px;
  gap: 10px;
  border: 1px solid;
  border-radius: 12px;
  box-shadow: 0 0 15px #ffd700;
  background: linear-gradient(to right, #00223b, #0d6eb9);
  padding: 10px 20px;
  color: #ffd700;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

.popup-menu {
}
</style>
<script setup></script>
