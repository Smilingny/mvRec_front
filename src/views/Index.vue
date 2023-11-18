<script setup>
import { computed, ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()

const i = "@/assets/indexview/xskdjs2.webp"


const list = [{
    title: '肖申克的赎',
    image: 'xskdjs2.webp',
    desc: '我是肖申克的救赎肖申克的救赎肖申克的救赎肖申克的救赎肖申克的救赎肖申克的救赎肖申克的救赎肖申克的救赎肖申克的救赎肖申克的救赎肖申克的救赎'
},
{
    title: '泰坦尼克号',
    image: 'ttnkh2.webp',
    desc: '我是泰坦尼克号泰坦尼克号泰坦尼克号泰坦尼克号泰坦尼克号泰坦尼克号泰坦尼克号泰坦尼克号泰坦尼克号泰坦尼克号'
},
{
    title: '星际穿越',
    image: 'xjcy2.webp',
    desc: '我是星际穿越星际穿越星际穿越星际穿越星际穿越星际穿越星际穿越星际穿越星际穿越星际穿越星际穿越'
},
{
    title: '阿甘正传',
    image: 'agzz2.webp',
    desc: '我是阿甘正传阿甘正传阿甘正传阿甘正传阿甘正传'
}
]
const carouselDom = ref(null)
function handleSetCarousel(index) {
    carouselDom.value.setActiveItem(index)
}

const backgroundImage = ref('/@/assets/indexview/xskdjs2.webp');

const imageList = import.meta.glob('/@/assets/indexview/*.webp'); // 使用 import.meta.glob 动态加载所有匹配的图片文件

const changeBackground = async (index) => {
    const keys = Object.keys(imageList);
    if (keys[index]) {
        const module = await imageList[keys[index]]();
        backgroundImage.value = module.default;
    }
};
const activeTab = ref('all');
const movieTabs = ref([
    {
        value: 'all',
        label: '全部',
    },
    {
        value: 'science',
        label: '科幻',
    },
    {
        value: 'comedy',
        label: '喜剧',
    },
    {
        value: 'horror',
        label: '恐怖',
    },
    {
        value: 'thriller',
        label: '惊悚',
    },
    {
        value: 'action',
        label: '动作',
    },
])
const movieLists = ref([
    {
        name: 'movie1',
        kind: 'comedy',
        img: 'agzz2.webp'
    },
    {
        name: 'movie2',
        kind: 'science',
        img: 'agzz2.webp'
    },
    {
        name: 'movie3',
        kind: 'horror',
        img: 'agzz2.webp'
    },
    {
        name: 'movie4',
        kind: 'thriller',
        img: 'agzz2.webp'
    },
    {
        name: 'movie5',
        kind: 'action',
        img: 'agzz2.webp'
    },
    {
        name: 'movie6',
        kind: 'comedy',
        img: 'agzz2.webp'
    },
    {
        name: 'movie7',
        kind: 'science',
        img: 'agzz2.webp'
    },
    {
        name: 'movie8',
        kind: 'horror',
        img: 'agzz2.webp'
    },
    {
        name: 'movie9',
        kind: 'thriller',
        img: 'agzz2.webp'
    },
    {
        name: 'movie10',
        kind: 'action',
        img: 'agzz2.webp'
    },
    {
        name: 'movie11',
        kind: 'comedy',
        img: 'agzz2.webp'
    },
    {
        name: 'movie12',
        kind: 'science',
        img: 'agzz2.webp'
    },
    {
        name: 'movie13',
        kind: 'horror',
        img: 'agzz2.webp'
    },
    {
        name: 'movie14',
        kind: 'thriller',
        img: 'agzz2.webp'
    },
    {
        name: 'movie15',
        kind: 'action',
        img: 'agzz2.webp'
    },
    {
        name: 'movie16',
        kind: 'comedy',
        img: 'agzz2.webp'
    },
    {
        name: 'movie17',
        kind: 'science',
        img: 'agzz2.webp'
    },
    {
        name: 'movie18',
        kind: 'horror',
        img: 'agzz2.webp'
    },
    {
        name: 'movie19',
        kind: 'thriller',
        img: 'agzz2.webp'
    },
    {
        name: 'movie20',
        kind: 'action',
        img: 'agzz2.webp'
    },
]);
const currentMovies = computed(() => movieLists.value.filter(item => activeTab.value === 'all' ? true : item.kind === activeTab.value));
function handleClickTab(tab) {
    activeTab.value = tab.value;
}

const toDetail=()=>{
    router.push('/moviedetail')
}

</script>

<template>
    <div class="contain">
        <SearchBar class="search-bar"></SearchBar>
        <el-carousel ref="carouselDom" height="800px">
            <el-carousel-item v-for="item in list" :key="item.title"
                :style="{backgroundImage: `url('/src/assets/indexview/${item.image}')`}">
                <div class="information">
                    <div class="title">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.desc }}
                        </p>
                        <el-button>查看</el-button>
                    </div>
                    <div class="picture">
                        <div class="img">
                            <img class="p-item" src="../assets/indexview/xskdjs1.webp" alt="" @click="handleSetCarousel(0)">
                            <span class='img-text'>肖申克的救赎</span>
                        </div>
                        <div class="img">
                            <img class="p-item" src="../assets/indexview/ttnkh1.webp" alt="" @click="handleSetCarousel(1)">
                            <span class='img-text'>泰坦尼克号</span>
                        </div>
                        <div class="img">
                            <img class="p-item" src="../assets/indexview/xjcy1.webp" alt="" @click="handleSetCarousel(2)">
                            <span class='img-text'>星际穿越</span>
                        </div>
                        <div class="img">
                            <img class="p-item" src="../assets/indexview/agzz1.webp" alt="" @click="handleSetCarousel(3)">
                            <span class='img-text'>阿甘正传</span>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>

        <div class="tabs">
            <div class="header">
                <span>电影列表</span>
                <ul>
                    <li v-for="tab in movieTabs" :key="tab.value" :class="[activeTab === tab.value ? 'is-active' : '']"
                        @click="handleClickTab(tab)">
                        {{ tab.label }}</li>
                </ul>
            </div>
            <el-divider />
            <el-row :gutter="20">
                <el-col :span="6" v-for="item in currentMovies" :key="item.name">
                    <el-card shadow="hover" style="background-image: url('/src/assets/indexview/agzz2.webp');" @click="toDetail">
                    </el-card>
                    <p>{{ item.name }}</p>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<style lang="less" scoped>
.contain {
    height: 100vw;
    display: flex;
    height: 1800px;
    flex-direction: column;
    align-items: center;
    background-color: black;
}

.el-carousel {
    width: 100%;
    height: 800px;

    .el-carousel__container {
        width: 100%;

        .el-carousel__item {
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
}

// .Carposter {
//     height: 100%;
//     width: 100%;
//     background-image: url('../assets/indexview/xskdjs2.webp');
//     background-size: cover;
//     background-repeat: no-repeat;
// }

.search-bar {
    position: absolute;
    top: 40px;
    z-index: 9999;
}

:deep(.information) {
    display: flex;
    justify-content: space-between;
    color: white;
    width: 76%;
    height: 300px;
    margin: 400px auto 0 auto;

    h2 {
        font-size: 50px;
        margin-bottom: 20px;
    }

    P {
        width: 400px;
        margin-bottom: 20px;
    }
    .title {
        position: relative;
        .el-button {
            position: absolute;
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.2);
            height: 48px;
            width: 140px;
            line-height: 48px !important;
            border-radius: 24px;
            color: black;
        }
    }
}

.picture {
    width: 540px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
}

.img {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.p-item {
    display: block;
    width: 120px;
    height: 170px;
    border-radius: 10px;
}

.tabs {
    margin-top: 20px;
    width: 90%;

    .header {
        display: flex;
        align-items: center;

        span {
            color: white;
            font-size: 30px;
            font-weight: 800;
            margin-right: 40px;
        }

        ul {
            list-style: none;
            display: flex;

            li {
                color: white;
                width: 65px;
                line-height: 48px;
                text-align: center;
                cursor: pointer;
                box-sizing: border-box;

                &:hover {
                    color: var(--el-color-primary);
                }
            }

            li.is-active {
                color: var(--el-color-primary);
                border-bottom: 2px solid var(--el-color-primary);
                background-color: rgba(255, 255, 255, 0.2);
            }
        }
    }

    .el-row {
        height: 870px;
        overflow: hidden;
    }

    .el-card {
        height: 200px;
        width: 100%;
        background-size: cover;
    }

    p {
        text-align: center;
        color: white;
        line-height: 90px;
    }


}

:deep(.el-tabs) {
    width: 90%;

    .el-tabs__item {
        color: white;

        &:hover {
            color: var(--el-color-primary);
        }
    }

    .el-tabs__item.is-active {
        color: var(--el-color-primary);
    }

    .el-tabs__content {
        color: white;
    }
}



.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
