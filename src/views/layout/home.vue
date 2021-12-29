<template>
    <div class="flex container bg-gray-100 min-w-full min-h-screen">
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
        <!-- </div> -->
        </div>
        hi
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
        }
    }

}
</script>

<style>

</style>