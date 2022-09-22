<template>
    <div class="about_us__values">
        <div class="values__heading">
            <div class="heading">
                Our values
            </div>
        </div>
        <div class="values__buttons">
            <div @click="changeValue(0)" class="values__btn values__btn--people "
                :class="currentValue == 0 ? 'values__btn--active' : ''"><img src="@/assets/leaf_full.svg" alt="" />
            </div>
            <div @click="changeValue(1)" class="values__btn values__btn--heart"
                :class="currentValue == 1 ? 'values__btn--active' : ''"><img src="@/assets/leaf_full.svg" alt="" />
            </div>
            <div @click="changeValue(2)" class="values__btn values__btn--like"
                :class="currentValue == 2 ? 'values__btn--active' : ''"><img src="@/assets/leaf_full.svg" alt="" />
            </div>
            <div @click="changeValue(3)" class="values__btn values__btn--comment"
                :class="currentValue == 3 ? 'values__btn--active' : ''"><img src="@/assets/leaf_full.svg" alt="" />
            </div>

        </div>
        <div class="values__text">
            <h2 class="text__heading">{{ values[currentValue].heading }}</h2>
            <p class="text__desc">{{ values[currentValue].desc }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentValue: 0,
            values: [
                { heading: "People first", desc: "Here, everyone's well-being and happiness are prioritized. People create YellowIpe - not the other way around." },
                { heading: "Love", desc: "We create software with passion and heart. If you have any suggestion we'll find a solution for it." },
                { heading: "Reccomendation", desc: "We are recommended by a lot of comapnies, the like and love our work." },
                { heading: "Comments", desc: "Feel free to read comments about our work, we are proud of our products and communincation with clients." },
            ]
        }
    },
    methods: {
        changeValue(valueIdx) {
            this.currentValue = valueIdx
        }
    },
}
</script>

<style lang="scss" scoped>
.about_us__values {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(min-width:768px) {
        width: 50%;
        margin: 0 auto;
    }

    .values__heading {
        .heading {
            text-align: center;
        }
    }

    .values__buttons {
        position: relative;
        height: 230px;
        width: 300px;
        margin: 0 auto;

        .values__btn {
            position: absolute;
            transition: .3s;
            cursor: pointer;
            opacity: .5;
            transform: scale(1.7);

            &--active {
                opacity: 1;
            }

            &::after {
                left: 50%;
                top: 50%;
                position: absolute;
                transform: translate(-50%, -50%)
            }

            &--people,
            &--comment {
                bottom: 0;
            }

            &--heart,
            &--like {
                bottom: 100px;
                transform: scale(1.7) rotate(48deg);
                &::after{
                    transform: translate(-50%,-50%) rotate(-48deg);
                }
            }

            &--people {

                &::after {
                    content: url(../../assets/btns_icons/people.png)
                }

                left:0;
            }

            &--heart {
                &::after {
                    content: url(../../assets/btns_icons/heart.svg)
                }

                left:70px;
            }

            &--like {
                left: 150px;

                &::after {
                    content: url(../../assets/btns_icons/like.svg)
                }
            }

            &--comment {
                &::after {
                    content: url(../../assets/btns_icons/Comment.svg)
                }

                left:210px;
                transform: scale(1.5) rotate(100deg);
            }
        }
    }

    .values__text {
        .text__heading {
            font-weight: 700;
            font-size: 24px;
            line-height: 57px;
            letter-spacing: 0.2px;
            text-align: center;
        }

        .text__desc {
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
            text-align: center;
            letter-spacing: 0.2px;
        }
    }
}
</style>