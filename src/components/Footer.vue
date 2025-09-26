<template>
  <div class="container">
    <div class="logo-bar">
      <a
        class="logo-bar-image"
        href="https://pokies24.io/free-pokies/pokies-by-provider"
        rel="nofollow"
      >
        <img alt="aristocrat" src="../assets/images/aristocrat.png"
      /></a>
      <a
        class="logo-bar-image"
        href="https://pokies24.io/free-pokies/pokies-by-provider"
        rel="nofollow"
      >
        <img alt="pragmaticPlay" src="../assets/images/pragmaticPlay.png"
      /></a>
      <a
        class="logo-bar-image"
        href="https://pokies24.io/free-pokies/pokies-by-provider"
        rel="nofollow"
      >
        <img alt="bgaming" src="../assets/images/bgaming.png"
      /></a>
      <a
        class="logo-bar-image"
        href="https://pokies24.io/free-pokies/pokies-by-provider"
        rel="nofollow"
      >
        <img alt="playson" src="../assets/images/playson.png"
      /></a>
    </div>
    <div class="main-footer">
      <div class="main-footer-content">
        <div class="footer-info">
          <img
            alt="pokies24.io logo"
            class="footer-logo"
            src="../assets/images/logo.png"
            title=" logo Pokies24"
          />
          <p class="footer-info-text">
            © 2025 Pokies24.io<br />
            This website is intended for informational purposes only and does not accept payments
            from users. Gambling should be considered as entertainment, not as a way to make money.
            Excessive involvement can quickly lead to gambling addiction. Play responsibly. For
            individuals aged 21 and over only. <span class="yellow-text">info@pokies24.io</span>
          </p>
        </div>
        <div class="footer-links">
          <div class="links-title">Quick links</div>
          <a class="link" href="https://pokies24.io/online-casinos" rel="nofollow">Where to play</a>
          <a class="link" href="https://pokies24.io/contact" rel="nofollow">Contact</a>
          <a class="link" href="https://pokies24.io/responsible-gambling" rel="nofollow"
            >Responsible Gambling</a
          >
          <a class="link" href="https://pokies24.io/disclaimer" rel="nofollow">Disclaimer</a>
          <a class="link" href="https://pokies24.io/privacy-policy" rel="nofollow"
            >Privacy Policy</a
          >
          <a class="link" href="https://pokies24.io/terms-conditions" rel="nofollow"
            >Terms & Conditions</a
          >
        </div>
        <div class="footer-social">
          <p class="social-title">Sign up for free to get:</p>
          <div class="social-cta-container">
            <div class="cta-box">
              <img alt="yellowStar" class="cta-img" src="../assets/images/yellowStar.png" />
              <span class="cta-text">New slot reviews</span>
            </div>
            <div class="cta-box">
              <img alt="yellowGame" class="cta-img" src="../assets/images/yellowGame.png" />
              <span class="cta-text">Free demo access</span>
            </div>
            <div class="cta-box">
              <img alt="yellowGift" class="cta-img" src="../assets/images/yellowGift.png" />
              <span class="cta-text">Exclusive casino deals</span>
            </div>
          </div>

          <div id="mailerlite-form" style="display: none">
            <div class="ml-embedded" data-form="PLuCqf"></div>
          </div>

          <div class="social-input-container">
            <input
              v-model="email"
              class="input"
              placeholder="Enter your email address"
              @keyup.enter="subscribe"
            />
            <button class="input-button" @click="subscribe">Subscribe</button>
          </div>
        </div>
      </div>
      <div class="divider" />
      <div class="footer-logos-down">
        <img alt="18+" class="logo-bar-image" src="../assets/images/18+.png" />
        <a class="logo-bar-image" href="https://ecogra.org/" rel="nofollow">
          <img alt="ecogra" src="../assets/images/ecogra.png" />
        </a>
        <a class="logo-bar-image" href="https://www.gambleaware.org/ " rel="nofollow">
          <img alt="gambleAware" src="../assets/images/gambleAware.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.logo-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #113047;
  height: 120px;
  gap: 150px;
}

.logo-bar-image {
  max-height: 80px;
  max-width: 170px;
}

.main-footer {
  display: flex;
  flex-direction: column;
  padding: 30px 40px 10px;
  background-color: #011320;
}

.footer-logos-down {
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
}

.divider {
  height: 1px;
  background-color: #343b42;
  width: 100%;
}

.main-footer-content {
  display: flex;
  justify-content: space-between;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-info-text {
  max-width: 404px;
  max-height: 108px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0;
  color: #405b6f;
}

.yellow-text {
  color: #ffd700;
}

.footer-logo {
  max-width: 115px;
  max-height: 26px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
}

.links-title {
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: capitalize;
  padding-bottom: 20px;
}

.link {
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: capitalize;
}

.footer-social {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.social-title {
  color: #ffc700;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1;
  letter-spacing: normal;
}

.social-cta-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.cta-box {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

.cta-img {
  max-height: 30px;
  max-width: 30px;
}

.cta-text {
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: capitalize;
}

.social-input-container {
  display: flex;
  gap: 8px;
}

.input-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffc700;
  width: 160px;
  height: 40px;
  color: #00192b;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.input-button:hover {
  background-color: #e6b300;
}

.input {
  max-height: 40px;
  border: 1px solid #8899a5;
  padding: 12px 20px;
  border-radius: 8px;
  color: #8899a5;
  background: transparent;
  flex: 1;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
}

.input::placeholder {
  color: #8899a5;
}
</style>

<script setup>
import { onMounted, ref } from 'vue'

const email = ref('')

onMounted(() => {
  if (!window.ml) {
    const script = document.createElement('script')
    script.src = 'https://assets.mailerlite.com/js/universal.js'
    script.async = true
    script.onload = () => {
      window.ml('account', '1791493')
    }
    document.head.appendChild(script)
  } else {
    window.ml('account', '1791493')
  }
})

const subscribe = () => {
  if (!email.value) {
    alert('Please enter your email address')
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    alert('Please enter a valid email address')
    return
  }

  if (window.ml) {
    window.ml(
      'webforms',
      'create',
      '1791493',
      {
        email: email.value,
        fields: {},
      },
      {
        onSubmit: (data) => {
          console.log('Form submitted:', data)
          alert('Thank you for subscribing!')
          email.value = ''
        },
        onError: (error) => {
          console.error('Subscription error:', error)
          alert('Subscription failed. Please try again.')
        },
      },
    )
  } else {
    console.log('Would subscribe email:', email.value)
    alert('Thank you for subscribing!')
    email.value = ''
  }
}
</script>
