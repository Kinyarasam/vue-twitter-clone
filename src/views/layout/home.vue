<template>
    <div class="flex container bg-gray-200 w-full min-h-screen">
        <!-- side nav -->
        <div class="w-1/4 border-r-2 border-gray-300 px py-2">
        <div class="flex justify-center items-center">
            <div class="justify-left w-24">
                <button class="flex justify-center items-center h-12 w-12 rounded-full hover:bg-blue-200 text-3xl text-blue-500">
                    <fa :icon="[ 'fab', 'twitter' ]"/>                                       
                </button>
                <div>
                    <button v-for="tab in tabs" :key="tab" class="flex items-center py-2 pl-4 pr-4 hover:bg-blue-200 hover:text-blue-700 rounded-full mr-auto">
                        <fa :icon="`${ tab.icon }`" class="text-2xl mr-4 text-left" />
                        <span class="text-lg font-semibold text-left">{{ tab.title }}</span> 
                    </button>
                </div>
            </div>
        </div>
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
            ]
        }
    }

}
</script>

<style>

</style>