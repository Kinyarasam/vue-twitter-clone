export default [{
    path: '/twitter',
    name: 'twitter',
    components: {
        default: () =>
            import ('../views/layout/home')
    }
}]