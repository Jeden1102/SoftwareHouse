<template>
    <div class="base__footer">
        <div class="footer__logo">
            <img src="@/assets/logo_white.svg" alt="">
        </div>
        <div class="footer__links">
            <router-link class="link" to="/">About us</router-link>
            <router-link class="link" to="/">Solutions</router-link>
            <router-link class="link" to="/">Work</router-link>
            <router-link class="link" to="/">Contact</router-link>
            <router-link class="link" to="/">Language</router-link>
        </div>
        <div class="footer__socials">
            <p>Copyright jeden1102 &copy; 2022</p>
            <div class="socials__socials">
                <img src="@/assets/footer_socials/s1.svg" alt="">
                <img src="@/assets/footer_socials/s2.svg" alt="">
                <img src="@/assets/footer_socials/s3.svg" alt="">
                <img src="@/assets/footer_socials/s4.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.base__footer {
    align-items: center;
    /* Gradient yellow */
    justify-content: center;
    padding: 30px;
    background: linear-gradient(202.06deg, #F2C917 14.42%, #FFB800 77.68%);
    display: flex;
    flex-direction: column;
    gap: 30px;

    .footer__links {
        display: flex;
        flex-direction: column;
        gap: 32px;

        @media(min-width:768px) {
            flex-direction: row;
        }

        .link {
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
            text-align: center;
            letter-spacing: 0.2px;
            text-decoration: none;
            color: #00385F;

        }

    }

    .footer__socials {
        border-top: 1px solid #00385F;
        flex-direction: column-reverse;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap:50px;
        width:90%;
        padding:30px 0;
        p {
            color: white;
            font-size: .8rem;
            text-align:center;
            height:100%;
        }

        @media(min-width:768px) {
            flex-direction: row;
        }

        .socials__socials {
            display: flex;
            justify-content: center;
            height:100%;
            align-items: center;
            gap: 20px;

            img {
                transform: scale(2);
            }
        }
    }
}
</style>