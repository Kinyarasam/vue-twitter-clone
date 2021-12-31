<template>
    <div class="flex container bg-gray-100 min-w-full h-screen">
        <!-- side nav -->
        <div class="md:w-1/5 border-r-2 border-gray-300 px-3 lg:px-8 py-2 flex flex-col justify-between">
            <div class="">
                
                <button class="h-12 w-12 rounded-full hover:bg-blue-100 text-3xl text-blue-500">
                    <fa :icon="[ 'fab', 'twitter' ]"/>                                       
                </button>
                <div> 
                    <button v-for="tab in tabs" :key="tab" @click="id = tab.id" :class="`flex focus:outline-none items-center py-2 pl-4 pr-4 hover:bg-blue-100 hover:text-blue-500 rounded-full mr-auto ${ id === tab.id ? 'text-blue-500' : ''}`">
                        <fa :icon="`${ tab.icon }`" class="text-2xl mr-4 text-left" />
                        <span class="text-lg font-semibold text-left hidden md:block">{{ tab.title }}</span> 
                    </button>
                </div>
                <button class="text-white bg-blue-500 rounded-full font-semibold focus:outline-none w-12 h-12 md:h-auto md:w-full hover:bg-blue-900 p-3">
                    <p class="hidden md:block">Tweet</p>
                    <fa icon="plus" class="md:hidden"/>
                </button>
            </div>
            <div class="md:w-full relative">
                <button @click="dropdown = true" class="flex items-center w-full hover:bg-blue-100 rounded-full p-2 focus:ontline-none">
                    <img src="../../../src/assets/logo.png" alt="profile" class="w-10 h-10 rounded-full border border-gray-200 overflow-hidden"/>
                    <div class="hidden md:block ml-4">
                        <p class="text-sm font-bold leading-tight">Kinyarasam</p>
                        <p class="text-sm leading-tight">@Kinyarasam</p>
                    </div>
                    <fa icon="angle-down" class="hidden md:block ml-auto text-lg"/>
                </button>
                <div v-if="dropdown ===true" class="absolute left-0 bottom-0 bg-white w-64 rounded-lg shadow-md border border-gray-200 mb-16  overflow-hidden">
                    <button @click="dropdown = false" class="flex items-center w-full hover:bg-gray-100 p-3 focus:ontline-none">
                        <img src="../../../src/assets/logo.png" alt="profile" class="w-10 h-10 rounded-full border border-gray-200 overflow-hidden"/>
                        <div class="ml-4">
                            <p class="text-sm font-bold leading-tight">Kinyarasam</p>
                            <p class="text-sm leading-tight">@Kinyarasam</p>
                        </div>
                        <fa icon="check" class="ml-auto text-blue-500"/>
                    </button>
                    <button @click="dropdown = false" class="p-3 w-full text-left hover:bg-gray-100 border-t border-gray-200 text-sm focus:outline-none">
                        Add an existing account
                    </button>
                    <button @click="dropdown = false" class="p-3 w-full text-left hover:bg-gray-100 border-t border-gray-200 text-sm focus:outline-none">
                        Log out @Kinyarasam
                    </button>

                </div>
            </div>
        
        </div>
        <!--/ side nav  -->
        <!-- tweets -->
        <div class="md:w-1/2 w-full h-full overflow-y-scroll">
            <div class="px-5 py-3 border-b-2 border-gray-300 w-full flex items-center justify-between">
                <h1 class="text-xl font-bold">Home</h1>
                <fa icon="star" class="text-blue-500"/>
            </div>
            <div class="px-5 py-3 border-b-8 border-gray-300 flex">
                <div class="flex-none">
                    <img src="../../../src/assets/logo.png" alt="profile.png" class="w-12 h-12 rounded-full overflow-hidden border">
                </div>
                <form class="w-full px-4 relative">
                    <textarea placeholder="What's happenning?" class="mt-3 pb-3 w-full focus:outline-none"/>
                    <div class="flex items-center text-blue-500 my-3 mb-2">
                        <fa icon="image" class="text-lg mr-4 "/>
                        <fa icon="film" class="text-lg mr-4"/>
                        <fa icon="chart-bar" class="text-lg mr-4 "/>
                        <fa icon="smile" class="text-lg mr-4"/>
                    </div>
                    <button class="h-10 px-4 text-white font-semibold bg-blue-500 hover:bg-blue-900 focus:outline-none rounded-full absolute bottom-0 right-0">
                        Tweet
                    </button>
                </form>
            </div>
        </div>
        <!-- /tweets -->
        <!-- trending -->
        <div class="md:block hidden w-1/3 min-h-full border-l-2 border-gray-300 py-2 px-6 overflow-y-scroll relative">
            <input class="pl-12 text-sm rounded-full w-full p-2 bg-blue-100 mb-4" placeholder="Search Twitter"/>
            <fa icon="search" class="absolute left-0 top-0 mt-5 ml-12 text-sm text-gray-500"/>
            <div class="w-full rounded-xl bg-gray-200 overflow-hidden">
                <div class="flex items-center justify-between p-3">
                    <p class="text-lg font-bold">Trends For You</p>
                    <fa icon="cog" class="text-lg text-blue-500"/>
                </div>
                <button v-for="trend in trending" :key="trend" class="w-full flex justify-between hover:bg-gray-300 p-3 border-t border-gray-300">
                    <div>
                        <p class="text-sm font-semibold text-left leading-tight text-gray-700">{{ trend.top }}</p>
                        <p class="font-bold text-left leading-tight">{{ trend.title }}</p>
                        <p class="text-left font-semibold leading-tight text-gray-700">{{ trend.bottom }}</p>
                    </div>
                    <fa icon="angle-down" class="text-lg"/>
                </button>
                <button class="p-3 w-full hover:bg-gray-300 text-left text-blue-500 border-t border-gray-300">
                    Show More
                </button>
            </div>
            <div class="mt-4 w-full rounded-xl bg-gray-200 overflow-hidden">
                <div class="p-3">
                    <p class="text-lg font-bold">Who to follow</p>
                </div>
                <button v-for="friend in friends" :key="friend" class="w-full flex hover:bg-gray-300 p-3 border-t border-gray-300">
                    <img src="../../../src/assets/logo.png" :alt="`${ friend.alt }`" class="w-12 h-12 rounded-full border border-gray-200 overflow-hidden"/>
                    <!-- <img :src=" `${ friend.src }`" :alt="`${ friend.alt }`" class="w-12 h-12 rounded-full border border-gray-200 overflow-hidden"/> -->
                        <div class="ml-4">
                            <p class="text-sm font-bold leading-tight">{{ friend.name }}</p>
                            <p class="text-sm leading-tight">{{ friend.handle }}</p>
                        </div>
                        <button class="text-sm text-blue-500 py-1 px-4 rounded-full border-2 border-blue-500 ml-auto">Follow</button>
                </button>
                <button class="p-3 w-full hover:bg-gray-300 text-left text-blue-500 border-t border-gray-300">
                    Show More
                </button>
            </div>
        </div>
        <!-- /trending -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                {icon: 'home', title: 'Home', id: 'home'},
                {icon: 'hashtag', title: 'Explore', id: 'explore'},
                {icon: 'bell', title: 'Notifications', id: 'notifications'},
                {icon: 'envelope', title: 'Messages', id: 'messages'},
                {icon: 'bookmark', title: 'Bookmark', id: 'bookmark'},
                {icon: 'clipboard-list', title: 'List', id: 'list'},
                {icon: 'user', title: 'Profile', id: 'profile'},
                {icon: 'ellipsis-h', title: 'More', id: 'more'},
            ],
            id: "home",
            dropdown: false,
            trending: [
                {top: 'Trending in Tx', title: 'Gigi', bottom: 'Trending with: Rip Gigi'},
                {top: 'Music', title: 'We won', bottom: '135K Tweets'},
                {top: 'Pop', title: 'Blue Ivy', bottom: '40K Tweets'},
                {top: 'Trending in Kenya', title: 'Denim Day', bottom: '40K Tweets'},
                {top: 'Trending', title: 'When Beyonce', bottom: '20.5K Tweets'},
            ],
            friends: [
                {src: 'logo.png', alt: 'Elon Musk', name: 'Elon Musk', handle: '@teslaboy'},
                {src: '../../../src/assets/logo.png', alt: 'Kelvin', name: 'Kelvin Hart', handle: '@miniRock'},
                {src: '../../../src/assets/logo.png', alt: 'Adrian', name: 'Adrian Monk', handle: '@detective'},
                {src: '', name: '', handle: ''},
            ]
        }
    }

}
</script>

<style>

</style>